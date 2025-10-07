'use server';

import { serverClient } from '@/lib/streamServer';

export async function createToken(userId: string) {
  return serverClient.createToken(userId);
}
