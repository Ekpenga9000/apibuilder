import React from "react";
import AuthFormHead from "../components/AuthFormHead";
import Logo from "../components/Logo";

interface AuthFormLayoutProps {
  title?: string;
  children: React.ReactNode;
}
const AuthFormLayout = ({ title, children }: AuthFormLayoutProps) => {
  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <nav>
        <Logo path="/" />
      </nav>
      <section className="max-w-md mx-auto mt-[5rem] p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
        {title && <AuthFormHead title={title} />}

        {children}
      </section>
    </main>
  );
};

export default AuthFormLayout;
