/* eslint-disable @typescript-eslint/no-require-imports */
import { config } from '@/lib/config'
import type { AuthAdapter } from './types'

function getAuthAdapter(): AuthAdapter {
  if (config.auth.provider === 'local') {
    console.log('🔐 [AUTH] Using LOCAL auth adapter (bcrypt + session cookie)')
    return (require('./local') as { localAdapter: AuthAdapter }).localAdapter
  }
  console.log('🔐 [AUTH] Using SUPABASE auth adapter')
  return (require('./supabase') as { supabaseAdapter: AuthAdapter }).supabaseAdapter
}

export const authAdapter: AuthAdapter = getAuthAdapter()
export type { AuthAdapter, AuthUser } from './types'
