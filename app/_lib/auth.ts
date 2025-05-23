import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google"
import { db } from "./prisma";

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(db) as Adapter,
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SCRET as string,
      }),
    ],
    callbacks: {
      async session({session, user}) {
        session.user = {
          ...session.user,
          id: user.id,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any;
        return session
      }
    }
  }
