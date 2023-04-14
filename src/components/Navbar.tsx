import { getServerSession } from "next-auth";
import Link from "next/link";
import { FC } from "react";

interface NavbarProps {}

const Navbar = async ({}) => {
  const session = await getServerSession();
  function buttonVarients(arg0: { varients: string }): string | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className={buttonVarients({ varients: "link" })}>
          Text Similarity 0.1
        </Link>

        <div className="md:hidden">
          <ThemeToggle />
        </div>

        <div className="hidden md:flex gap-4">
          <ThemeToggle />
          <Link
            href="/documentation"
            className={buttonVarients({ varient: "ghost" })}
          >
            Documentations
          </Link>
          {session ? (
            <>
              <Link
                className={buttonVarients({ varient: "ghost" })}
                href="/dashboard"
              >
                Dashboard
              </Link>
              <SignoutButton />
            </>
          ) : (
            <SignupButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
