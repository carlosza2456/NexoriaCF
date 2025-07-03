import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth/next";
import { prisma } from "@/lib/prisma";
import { authOptions } from "../authOptions";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; 