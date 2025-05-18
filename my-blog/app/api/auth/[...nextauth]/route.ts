import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers

/////////////// Example setup for some other use cases ///////////////////////

// import { supabase } from "@/lib/client";
// import { compare } from "bcrypt";
// import NextAuth, { NextAuthOptions, Session, User } from "next-auth";
// import { AdapterUser } from "next-auth/adapters";
// import { JWT } from "next-auth/jwt";
// import CredentialsProvider from "next-auth/providers/credentials"
// import GoogleProvider from "next-auth/providers/google";

// export const queryUserByEmail = async (email: string) => {
//     const { data, error } = await supabase
//         .from('users')
//         .select('*')
//         .eq('email', email)
//         .single()

//     if (error || !data) return null
//     return data
// }

// export const authOptions: NextAuthOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: {
//                     label: 'Email',
//                     type: 'email',
//                     placeholder: 'email'
//                 },
//                 password: {
//                     label: 'Password',
//                     type: 'password'
//                 }
//             },
//             async authorize(credentials) {
//                 const { email, password } = credentials!

//                 const user = await queryUserByEmail(email)

//                 if (!user) throw new Error("No user found")

//                 const isValid = await compare(password, user.password)
//                 if (!isValid) throw new Error("Invalid password")

//                 return {
//                     id: user.id,
//                     email: user.email,
//                     name: user.name,
//                 }
//             }
//         }),
//         GoogleProvider({
//             clientId: process.env.AUTH_GOOGLE_ID!,
//             clientSecret: process.env.AUTH_GOOGLE_SECRET!,
//         }),
//     ],
//     session: {
//         strategy: "jwt"
//     },
//     secret: process.env.NEXTAUTH_SECRET,
//     callbacks: {
//         async signIn({ user }: { user: User | AdapterUser }) {
//             const { email, name } = user;
//             const { data, error } = await supabase
//                 .from('users')
//                 .select('*')
//                 .eq('email', email)
//                 .single();

//             if (!data && !error) {
//                 const { error: insertError } = await supabase
//                     .from('users')
//                     .insert([{ email, name }])

//                 if (insertError) {
//                     console.error('Insert error:', insertError)
//                     return false
//                 }
//             }

//             return true
//         },

//         async jwt({ token, user }: { token: JWT, user: User | AdapterUser }) {
//             if (user) {
//                 token.id = user.id
//                 token.email = user.email
//                 token.name = user.name
//             }
//             return token;
//         },

//         async session({ session, token }: { session: Session, token: JWT }) {
//             if (token) {
//                 session.user = {
//                     email: token.email,
//                     name: token.name,
//                 }
//             }
//             return session
//         }
//     }
// }

// const handler = NextAuth(authOptions)
// export { handler as GET, handler as POST }