export interface Data {
  email: string
  first_name: string
  last_name: string
  account_type: string
  access_token: string
  token_type: string
  email_verified_at: null
  expires_at: Date
}

declare module 'next-auth' {
  interface User {
    data: Data
  }

  interface Session extends DefaultSession {
    user?: Data
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    data: Data | undefined
  }
}
