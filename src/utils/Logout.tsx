"use client";
import { signOut } from "next-auth/react";
const Logout = () => {
  return (
    <div>
      <button
        onClick={() => signOut()}
        className="btn btn-error btn-outline text-white rounded-full px-5"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
