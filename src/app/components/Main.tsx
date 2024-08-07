import React from "react";

export type MainProps = {
  children: React.ReactNode;
};

function Main({ children }: MainProps) {
  return <main className="p-10 flex flex-col gap-10">{children}</main>;
}

export default Main;
