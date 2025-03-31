"use client";

import React from "react";
import { Button, Input, Link, Divider, Image, Alert } from "@heroui/react";
import ErrorMessage from "./ErrorMessage";
import { useAuth } from "@hooks/useAuth";

export default function ForgetPassword() {
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = React.useState(false);
  const [error, setError] = React.useState("");
  const { forgetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email") as string,
    };

    try {
      setLoading(true);
      const message = await forgetPassword(data.email);
      setMessage(message);
      setIsConfirmVisible(true);
      setLoading(false);
    } catch (err: any) {
      setError(err.message || "Invalid username or password");
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large">
        <div className="flex flex-col items-center pb-6">
          <Image src="assets/icons/logo-dark.png" alt="logo" />
        </div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          {error && <ErrorMessage data={{ message: error }} />}
          <Alert
            color="success"
            description={message}
            isVisible={isConfirmVisible}
            title={"Success"}
            variant="faded"
            onClose={() => setIsConfirmVisible(false)}
          />
          <div className="flex flex-col">
            <Input
              isRequired
              classNames={{
                base: "-mb-[2px]",
                inputWrapper:
                  "rounded-none data-[hover=true]:z-10 group-data-[focus-visible=true]:z-10",
              }}
              label="Email Address"
              name="email"
              placeholder="Enter your email"
              type="email"
              variant="bordered"
            />
          </div>
          <Button color="primary" type="submit" isLoading={loading}>
            Send Reset Link
          </Button>
        </form>
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">OR</p>
          <Divider className="flex-1" />
        </div>
        <p className="text-center text-small">
          Already have an account?&nbsp;
          <Link href="/login" className="text-default" size="sm">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
