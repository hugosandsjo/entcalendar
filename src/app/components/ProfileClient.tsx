"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className="flex gap-4 items-center">
        <img
          className="h-20 w-20 rounded-full"
          src={user.picture ?? ""}
          alt={user.name ?? ""}
        />
        <div>
          <h2 className="text-xs">{`Welcome ${user.name}!`}</h2>
          <div className="flex gap-1 text-xs">
            Email: <p>{user.email}</p>
          </div>
          <div className="flex gap-1 text-xs">
            Auth:
            <p className="text-xs">{user.sub}</p>
          </div>
        </div>
      </div>
    )
  );
}
