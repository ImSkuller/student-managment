import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function RootLayout({ children }) {
  let session = null;

  try {
    session = await getServerSession(authOptions);
  } catch (e) {
    session = null;
  }

  return (
    <div>
      {children}
    </div>
  );
}
