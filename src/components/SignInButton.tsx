"use client";
import { signIn } from "next-auth/react";
import { FC, useState } from "react";
import Button from "./ui/Button";

interface SigninButtonProps {}

const SignInButton: FC<SigninButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      //   toast({
      //     title: "Error singin in",
      //     message: "Please try again later",
      //     error: "error",
      //   });
    }
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  );
};
export default SignInButton;
