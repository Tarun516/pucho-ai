"use client";
import { useQuery, useMutation } from "convex/react";
import { api } from "@workspace/backend/_generated/api";

export default function Page() {
  const users = useQuery(api.users.getMany, {});
  const addUser = useMutation(api.users.addUser);
  console.log("Users from Convex:", users);
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">app/web</h1>
        <p className="text-center">This is the web app.</p>
        <p className="text-center">Users from Convex:</p>
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(users, null, 2)}
        </pre>
      </div>
    </div>
  );
}
