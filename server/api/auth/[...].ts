import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'
import axiosInstance from '~~/libs/axios'

export default NuxtAuthHandler({
  secret: 'your-secret-here',
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: 'Credentials',
      async authorize(credentials: { email: string; password: string }) {
        const data = {
          email: credentials.email,
          password: credentials.password,
        }

        const res = await axiosInstance.post<TransactionData>(
          '/customer/auth/login',
          data
        )

        if (res && res.data.success) {
          const user = res.data.data
          return user
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token, user }) {
      session.user = token as any
      return session
    },
  },
})

export interface TransactionData {
  success: boolean
  status_code: number
  data: Data
}

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
