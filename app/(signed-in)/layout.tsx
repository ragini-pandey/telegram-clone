'use client';

import React from 'react';
import UserSyncWrapper from '@/components/UserSyncWrapper';
import { Chat } from 'stream-chat-react';
import streamClient from '@/lib/stream';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { AppSidebar } from '@/components/app-sidebar';
import 'stream-chat-react/dist/css/v2/index.css';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <UserSyncWrapper>
      <Chat client={streamClient}>

        <SidebarProvider
          style={
            {
              '--sidebar-width': '19rem',
            } as React.CSSProperties
          }
        >
          <AppSidebar />
          <SidebarInset>
            <header className='flex h-16 shrink-0 items-center gap-2 px-4'>
              <SidebarTrigger className='-ml-1' />
              <Separator orientation='vertical' className='mr-2 data-[orientation=vertical]:h-4' />
              <Link href='/dashboard'>
                <h1 className='text-lg font-bold tracking-wider uppercase'>Ragini Telegram Clone</h1>
              </Link>
            </header>
            <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </Chat>
    </UserSyncWrapper>
  );
}

export default Layout;
