import React from "react";
import Input from "../Components/Ui/input";
import Button from "../Components/Ui/button";
import { FaGoogle, FaApple, FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

export default function SignIn() {
  return (
    <div className="flex min-h-screen">
      {/* Left Panel */}
      <div className="w-1/3 bg-indigo-600 text-white flex flex-col justify-between items-center py-10 px-6">
        <div className="text-4xl font-bold">BASE</div>
        <div className="flex space-x-6">
          <a href="#"><FaGithub className="w-6 h-6 hover:text-gray-300" /></a>
          <a href="#"><FaTwitter className="w-6 h-6 hover:text-gray-300" /></a>
          <a href="#"><FaLinkedin className="w-6 h-6 hover:text-gray-300" /></a>
          <a href="#"><FaDiscord className="w-6 h-6 hover:text-gray-300" /></a>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-2/3 flex justify-center items-center bg-gray-50">
        <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-2">Sign In</h2>
          <p className="text-gray-500 mb-6">Sign in to your account</p>

          {/* Social Login */}
          <div className="flex space-x-4 mb-6">
            <button className="flex-1 border rounded-lg py-2 flex items-center justify-center text-sm text-gray-600 hover:bg-gray-100">
              <FaGoogle className="mr-2" /> Sign in with Google
            </button>
            <button className="flex-1 border rounded-lg py-2 flex items-center justify-center text-sm text-gray-600 hover:bg-gray-100">
              <FaApple className="mr-2" /> Sign in with Apple
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email address</label>
              <Input type="email" placeholder="johndoe@gmail.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <Input type="password" placeholder="••••••••" />
              <a href="#" className="text-sm text-blue-600 hover:underline float-right mt-1">
                Forgot password?
              </a>
            </div>
            <Button className="w-full" size="lg">Sign In</Button>
          </form>

          {/* Register */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
}
