"use client";
import {
    useQuery,
    useMutation,
    Authenticated,
    Unauthenticated,
} from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";

export default function Page() {
    return (
        <>
            <Authenticated>
                <div className="flex items-center justify-center min-h-svh">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h1 className="text-2xl font-bold">app/web</h1>
                        <UserButton />
                        <p className="text-center">This is the web app.</p>
                        <p className="text-center">Users from Convex:</p>
                        <pre className="bg-gray-100 p-4 rounded"></pre>
                    </div>
                </div>
            </Authenticated>
            <Unauthenticated>
                <p>Must be signed in</p>
                <SignInButton>Sign In!</SignInButton>
            </Unauthenticated>
        </>
    );
}
