import React, { useState } from "react";
import { Button, Form, Input } from "@heroui/react";
import api from "@lib/api";

const Account = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    previousPassword: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const errors: string[] = [];

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const data = Object.fromEntries(new FormData(e.currentTarget));
      setLoading(true);
      const response = await api.put("/users/", {
        username: data.username,
        email: data.email,
        previous_password: data["previous password"],
        new_password: data.password,
        confirm_password: data["confirm password"],
      });
      if (response.status !== 200) {
        if (response.data.detail) {
          setMessage(response.data.detail);
          setLoading(false);

          return;
        }
        setMessage("Registration failed");
        setLoading(false);

        return;
      }
      setMessage("Account updated successfully");
      setForm({
        username: "",
        email: "",
        previousPassword: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err: any) {
      setMessage(err.message);
    }
    setLoading(false);
  };
  return (
    <Form className="w-full max-w-lg gap-4" onSubmit={onSubmit}>
      <Input
        errorMessage={({ validationDetails, validationErrors }) => {
          if (validationDetails.typeMismatch) {
            return "Please enter a valid username";
          }

          return validationErrors;
        }}
        label="Username"
        name="username"
        placeholder="Enter your username"
        type="text"
        variant="underlined"
        fullWidth
      />
      <Input
        errorMessage={({ validationDetails, validationErrors }) => {
          if (validationDetails.typeMismatch) {
            return "Please enter a valid email";
          }

          return validationErrors;
        }}
        label="Email"
        name="email"
        placeholder="Enter your Email"
        type="email"
        variant="underlined"
        fullWidth
      />
      <Input
        errorMessage={() => (
          <ul>
            {errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        )}
        isInvalid={errors.length > 0}
        name="previous password"
        placeholder="Enter your previous password"
        value={form.previousPassword}
        variant="underlined"
        fullWidth
        type="password"
        onValueChange={(value) => setForm({ ...form, previousPassword: value })}
      />
      <Input
        errorMessage={() => (
          <ul>
            {errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        )}
        isInvalid={errors.length > 0}
        name="password"
        placeholder="Enter your password"
        value={form.password}
        variant="underlined"
        fullWidth
        type="password"
        onValueChange={(value) => setForm({ ...form, password: value })}
      />
      <Input
        errorMessage={() => (
          <ul>
            {errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        )}
        isInvalid={errors.length > 0}
        name="confirm password"
        placeholder="Repeat your password"
        value={form.confirmPassword}
        variant="underlined"
        fullWidth
        type="password"
        onValueChange={(value) => setForm({ ...form, confirmPassword: value })}
      />
      <Button
        color="primary"
        type="submit"
        size="sm"
        className="mt-4"
        isLoading={loading}
      >
        Update Information
      </Button>
      {message && <div className="text-small text-default-500">{message}</div>}
    </Form>
  );
};

export default Account;
