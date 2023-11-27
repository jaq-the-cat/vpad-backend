import { makeRoute } from "@docs/helpers";

export const subId = {
    put: makeRoute({
        tag: "Subscription",
        summary: "Updates subscription from id, must be logged in",
        bodyRequired: ['creatorId', 'tierId'],
        path: { id: "clpeceq9h000078m210txowen" },
        body: {
            tierId: "clpeceq9h000078m210txowen",
        },
        400: "Missing ID",
    }),
    delete: makeRoute({
        tag: "Subscription",
        summary: "Deletes a subscription from id, must be logged in",
        path: { id: "clpeceq9h000078m210txowen" },
        400: "Missing ID",
    }),
}