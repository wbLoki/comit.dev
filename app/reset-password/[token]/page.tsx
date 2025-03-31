import ResetPassword from "@components/ResetPassword";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { token: string } }) {
  params = await params;
  if (!params.token) {
    notFound();
  }
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <ResetPassword token={params.token} />
      </div>
    </div>
  );
}
