import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html>
      <body>
        <Navbar user={session?.user} />
        {children}
      </body>
    </html>
  );
}
