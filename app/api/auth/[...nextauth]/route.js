// import NextAuth from "next-auth";

// import User from "@models/user";
// import { connectToDB } from "@utils/database";

// const handler = NextAuth({
//   callbacks: {
//     async session({ session }) {
//       // store the latest news from MongoDB to session
//       const sessionNews = await User.findOne({ email: session.user.email });
//       session.user.id = sessionUser._id.toString();

//       return session;
//     },
//   },
// });

// export { handler as GET, handler as POST };
