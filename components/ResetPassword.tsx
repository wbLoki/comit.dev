"use client";

import React from "react";
import { Button, Input, Link, Divider, Alert } from "@heroui/react";
import ErrorMessage from "./ErrorMessage";
import Image from "next/image";
import { useAuth } from "@hooks/useAuth";
import { Icon } from "@iconify/react";

export default function ResetPassword({ token }: { token: string }) {
  const [message, setMessage] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [isMessageVisible, setMessageVisible] = React.useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = React.useState(false);
  const [error, setError] = React.useState("");
  const { resetPassword } = useAuth();

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    };

    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (data.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    try {
      setLoading(true);
      const message = await resetPassword(token, data.password);
      setMessage(message);
      setMessageVisible(true);
      setLoading(false);
    } catch (err: any) {
      setError(err.message || "Invalid username or password");
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large">
        <div className="flex flex-col items-center pb-6">
          <Link href="/" target="_blank">
            <Image
              src="/assets/icons/logo-dark.png"
              alt="logo"
              width={500}
              height={500}
            />
          </Link>
        </div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          {error && <ErrorMessage data={{ message: error }} />}
          <Alert
            color="success"
            description={<p>{message},<Link href="/login" className="text-secondary">you can now log in.</Link></p>}
            isVisible={isMessageVisible}
            title={"Success"}
            variant="faded"
            onClose={() => setMessageVisible(false)}
          />
          <div className="flex flex-col">
            <Input
              isRequired
              classNames={{
                base: "-mb-[2px]",
                inputWrapper:
                  "rounded-none data-[hover=true]:z-10 group-data-[focus-visible=true]:z-10",
              }}
              endContent={
                <button type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <Icon
                      className="pointer-events-none text-2xl text-default-400"
                      icon="solar:eye-closed-linear"
                    />
                  ) : (
                    <Icon
                      className="pointer-events-none text-2xl text-default-400"
                      icon="solar:eye-bold"
                    />
                  )}
                </button>
              }
              label="Password"
              name="password"
              placeholder="Enter your password"
              type={isVisible ? "text" : "password"}
              variant="bordered"
            />
            <Input
              isRequired
              classNames={{
                inputWrapper: "rounded-t-none",
              }}
              endContent={
                <button type="button" onClick={toggleConfirmVisibility}>
                  {isConfirmVisible ? (
                    <Icon
                      className="pointer-events-none text-2xl text-default-400"
                      icon="solar:eye-closed-linear"
                    />
                  ) : (
                    <Icon
                      className="pointer-events-none text-2xl text-default-400"
                      icon="solar:eye-bold"
                    />
                  )}
                </button>
              }
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm your password"
              type={isConfirmVisible ? "text" : "password"}
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
