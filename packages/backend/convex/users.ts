import { query, mutation } from "./_generated/server";

export const getMany = query({
    args: {},
    handler: async (ctx) => {
        const users = await ctx.db.query("users").collect();
        return users;
    },
});

export const addUser = mutation({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();

        if (identity === null) {
            throw new Error("User Not Authenticated");
        }
        const userId = await ctx.db.insert("users", { name: "John Doe" });
        return userId;
    },
});
