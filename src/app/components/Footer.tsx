import React from "react";
import Link from "next/link";
import FooterButton from "./FooterButton";

function Footer() {
  return (
    <header>
      <div className="flex justify-evenly p-12">
        <Link href="/">
          {" "}
          <FooterButton text="Home" />
        </Link>
        <Link href="/about">
          <FooterButton text="About" />
        </Link>
        <Link href="/contact">
          <FooterButton text="Contact" />
        </Link>
      </div>
    </header>
  );
}

export default Footer;
