"use client";

import { signIn } from "next-auth/react";
import { FC, useState } from "react";
import Button from "./ui/Button";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const SignuserOut = async () => {
    setIsLoading(true);
    try {
      await signOut("google");
    } catch (error) {
      toast({
        title: "Error singing out",
        message: "Please try again later",
        error: "error",
      });
    }
  };

  return (
    <Button onClick={SignuserOut} isLoading={isLoading}>
      Sign Out
    </Button>
  );
};
export default SignOutButton;
function toast(arg0: { title: string; message: string; error: string }) {
  throw new Error("Function not implemented.");
}
