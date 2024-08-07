import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <header>
      <div className="flex justify-evenly p-12">
        <Link href="/">
          {" "}
          <p>Home</p>
        </Link>
        <Link href="/about">
          <p>About</p>
        </Link>
        <Link href="/contact">
          <p>Contact</p>
        </Link>
      </div>
    </header>
  );
}

export default Footer;
