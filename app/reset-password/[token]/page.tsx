import ResetPassword from "@components/ResetPassword";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ token?: string }> }) {
  const wait_params  = await params;
  if (!wait_params.token) {
    notFound();
  }
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <ResetPassword token={wait_params.token} />
      </div>
    </div>
  );
}
