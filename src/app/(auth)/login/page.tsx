"use client";

import Link from "next/link";

import { Button } from "@/components/Button";
import { TextField } from "@/components/Fields";
import { Logo } from "@/components/Logo";
import { SlimLayout } from "@/components/SlimLayout";
import { useState } from "react";

export default function Login() {
  // Fixing the type for error state (string | null)
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setTimeout(() => {
      setError("Invalid email or password");
      setSubmitting(false);
    }, 1500);
  };

  return (
    <SlimLayout>
      <div className="flex justify-center">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900 text-center">
        Client Portal
      </h2>
      <p className="mt-2 text-sm text-gray-700 text-center">
        Sign in to your account
      </p>
      <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-y-8">
        <TextField
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
        <div>
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              {submitting ? "Signing in..." : "Sign in "}{" "}
              <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
        {error && (
          <div className={"bg-red-100 text-red-800 p-2 text-center rounded-lg"}>
            {error}
          </div>
        )}
      </form>
    </SlimLayout>
  );
}
