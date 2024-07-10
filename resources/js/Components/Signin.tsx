import axios from "@/lib/axios";
import { useState } from "react";
export default function SigninComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/signin", {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#F0E9E5] px-4 py-12 sm:px-6 lg:px-8" onSubmit={handleSubmit}>
      <div className="mx-auto max-w-md space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter text-[#A38D7E] sm:text-4xl">Sign in to PinoyPalate</h1>
          <p className="text-[#7E7E7E]">Enter your email and password to access your account.</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-[#A38D7E]">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="a@alpha.com"
              onChange={(e) => setEmail(e.currentTarget.value)}
              value={email}
              className="block w-full rounded-md border border-[#D9D1CB] bg-[#F0E9E5] px-3 py-2 text-[#7E7E7E] placeholder-[#B3B3B3] shadow-sm focus:border-[#A38D7E] focus:outline-none focus:ring-1 focus:ring-[#A38D7E] sm:text-sm"
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password"
                className="text-sm font-medium text-[#A38D7E]">
                Password
              </label>
              <a href="#" className="text-sm font-medium text-[#A38D7E] hover:underline">
                Forgot your password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              placeholder="********"
              onChange={(e) => setPassword(e.currentTarget.value)}
              value={password}
              className="block w-full rounded-md border border-[#D9D1CB] bg-[#F0E9E5] px-3 py-2 text-[#7E7E7E] placeholder-[#B3B3B3] shadow-sm focus:border-[#A38D7E] focus:outline-none focus:ring-1 focus:ring-[#A38D7E] sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-[#A38D7E] px-3 py-2 text-sm font-medium text-[#F0E9E5] shadow-sm hover:bg-[#8B7667] focus:outline-none focus:ring-1 focus:ring-[#A38D7E] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Sign in
          </button>
        </div>
        <div className="text-center text-sm text-[#7E7E7E]">
          Don't have an account?{" "}
          <a href="/signup" className="font-medium text-[#A38D7E] hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </form>
  );
}
