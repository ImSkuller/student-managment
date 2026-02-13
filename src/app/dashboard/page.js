import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardRedirect() {
  const session = await getServerSession(authOptions);

  // Not logged in → login page
  if (!session) {
    redirect("/login");
  }

  const role = session.user.role;

  // Redirect to role dashboard
  redirect(`/${role}/dashboard`);
}
