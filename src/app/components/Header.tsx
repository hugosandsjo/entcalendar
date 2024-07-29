import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="h-28 px-10 flex justify-between items-center">
      <h1 className="text-4xl">Diary</h1>
      <button className="border">
        <a href="/api/auth/login">Login</a>
      </button>
      <button className="border">
        <a href="/api/auth/logout">Logout</a>
      </button>
      <Image src="/plus.svg" width={30} height={30} alt="plus icon" />
    </header>
  );
}

export default Header;
