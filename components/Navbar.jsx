import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-300">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/experience">Experience</Link>
    </div>
  );
};

export default Navbar;
