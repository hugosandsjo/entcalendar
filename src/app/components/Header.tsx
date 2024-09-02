import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogButton from "./LogButton";

function Header() {
  return (
    <header className="h-28 px-10 flex justify-between items-center">
      <Link href="/">
        {" "}
        <h1 className="text-4xl hover:opacity-30">ENTcalendarr</h1>
      </Link>
      <Link href="/dashboard">
        <p className="hover:underline">Dashboard</p>
      </Link>
      <LogButton />

      <Link href="/dashboard/create">
        <Image
          className="hover:opacity-30"
          src="/plus.svg"
          width={30}
          height={30}
          alt="plus icon"
        />
      </Link>
    </header>
  );
}

export default Header;
