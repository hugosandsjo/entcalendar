import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="h-28 px-10 flex justify-between items-center">
      <Link href="/">
        {" "}
        <h1 className="text-4xl">Diary</h1>
      </Link>
      <button className="border">
        <a href="/api/auth/login">Login</a>
      </button>
      <button className="border">
        <a href="/api/auth/logout">Logout</a>
      </button>
      <Link href="/new">
        <Image src="/plus.svg" width={30} height={30} alt="plus icon" />
      </Link>
    </header>
  );
}

export default Header;
