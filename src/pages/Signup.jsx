import { Eye, EyeOff, Lock, Mail, MessageSquare, User } from "lucide-react";
import { useState } from 'react';
import AuthImagePattern from '../components/AuthImagePattern.jsx';
import { Link } from 'react-router-dom';
import { Button } from "@mantine/core";

const SignUpPage = () => { 

  const [showPassword, setShowPassword] = useState(false);
  
   return (
      <div className="min-h-screen grid lg:grid-cols-2">
        {/* left side */}
        <div className="flex flex-col justify-center items-center p-6 sm:p-12">
          <div className="w-full max-w-md space-y-8">
            {/* LOGO */}
            <div className="text-center mb-8">
              <div className="flex flex-col items-center gap-2 group">
                <div
                  className="size-12 rounded-xl bg-primary/10 flex items-center justify-center 
                group-hover:bg-primary/20 transition-colors"
                >
                  <MessageSquare className="size-6 text-primary" />
                </div>
                <h1 className="text-2xl font-bold mt-2">Create Account</h1>
                <p className="text-base-content/60">Get started with your free account</p>
              </div>
            </div>
  
            <form  className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Full Name</span>
                </label>
                <div className="relative border rounded-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="size-5 text-base-content/40" />
                  </div>
                  <input
                    type="text"
                    className={`input h-10 w-full pl-10`}
                    placeholder="John Doe"
                  />
                </div>
              </div>
  
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <div className="relative border rounded-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="size-5 text-base-content/40" />
                  </div>
                  <input
                    type="email"
                    className={`input h-10 w-full pl-10`}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
  
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <div className="relative border rounded-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="size-5 text-base-content/40" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`input h-10 w-full pl-10`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="size-5 text-base-content/40" />
                    ) : (
                      <Eye className="size-5 text-base-content/40" />
                    )}
                  </button>
                </div>
              </div>
  
              <Button color="#2e6f40" type="submit" variant="filled">
                Create Account
              </Button>
            </form>
  
            <div className="text-center">
              <p className="text-base-content/60">
                Already have an account?{" "}
                <Link to="/login" className="link link-primary text-[#2e6f40]">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
  
        {/* right side */}
  
        <AuthImagePattern
          title="Join our community"
          subtitle="Join us today! Create an account and unlock a seamless, secure, and powerful experience tailored just for you."
        />
      </div>
    )
}

export default SignUpPage