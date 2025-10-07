'use client';

import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { useMutation } from 'convex/react';
import { useCallback, useEffect, useState } from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import { createToken } from '@/actions/createToken';
import streamClient from '@/lib/stream';

function UserSyncWrapper({ children }: { children: React.ReactNode }) {
  const { user, isLoaded: isUserLoaded } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //Convex mutation to sync user
  const createOrUpdateUser = useMutation(api.users.upsertUser);

  const syncUser = useCallback(async () => {
    if (!user?.id) return;
    try {
      setIsLoading(true);
      setError(null);

      const tokenProvider = async () => {
        if (!user) throw new Error('User not found');
        const token = await createToken(user.id);
        return token;
      };
      await createOrUpdateUser({
        userId: user.id,
        name:
          user.fullName || user.firstName || user.emailAddresses[0]?.emailAddress || 'Unknown User',
        email: user.emailAddresses[0]?.emailAddress || '',
        imageUrl: user.imageUrl || '',
      });

      //connect user to stream
      await streamClient.connectUser(
        {
          id: user.id,
          name:
            user.fullName ||
            user.firstName ||
            user.emailAddresses[0]?.emailAddress ||
            'Unknown User',
          image: user.imageUrl || '',
        },
        tokenProvider
      );
    } catch (error) {
      console.error('Error syncing user data:', error);
      setError(error instanceof Error ? error.message : 'Failed to sync user data');
    } finally {
      setIsLoading(false);
    }
  }, [createOrUpdateUser, user]);

  const disconnectUser = useCallback(async () => {
    try {
      await streamClient.disconnectUser();
    } catch (error) {
      console.error('Error disconnecting user:', error);
    }
  }, []);

  useEffect(() => {
    if (!isUserLoaded) return;
    if (user) {
      syncUser();
    } else {
      disconnectUser();
      setIsLoading(false);
    }

    //cleanup function to disconnect user on unmount
    return () => {
      if (user) {
        disconnectUser();
      }
    };
  }, [user, isUserLoaded, syncUser, disconnectUser]);

  //Loading State
  if (!isUserLoaded || isLoading) {
    return (
      <LoadingSpinner
        size='lg'
        message={!isUserLoaded ? 'Loading...' : 'Syncing user data...'}
        className='min-h-screen'
      />
    );
  }

  if (error) {
    return (
      <div className='flex-1 items-center justify-center bg-white px-6'>
        {/* Big red error title */}
        <p className='text-red-500 text-lg font-semibold mb-2'>Sync Error</p>

        {/* Show the actual error message */}
        <p className='text-gray-600 text-center mb-4'>{error}</p>

        {/* Suggest next steps for the user */}
        <p className='text-gray-500 text-sm text-center'>
          Please try restarting the app or contact support if the issue persists.
        </p>
      </div>
    );
  }
  return <div>{children}</div>;
}

export default UserSyncWrapper;
