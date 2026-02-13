import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Navbar from "@/components/Navbar";

export default async function RootLayout({ children }) {
  let session = null;

  try {
    session = await getServerSession(authOptions);
  } catch (e) {
    session = null;
  }

  return (
    <div>
      <Navbar user={session?.user || null} />
      {children}
    </div>
  );
}
