import { AdminLoginForm } from "@/presentation/components/admin/forms/AdminLoginForm";
import Logo from "@/presentation/public/images/logo/logo.svg";

export default function AdminLogin(): JSX.Element {
  return (
    <main className="bg-primary h-screen w-full flex justify-center items-center">
      <div className="max-w-xs ">
        <Logo className="w-48 mx-auto mb-safe" />
        <AdminLoginForm />
      </div>
    </main>
  );
}
