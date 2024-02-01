import { TypePolicy } from "apollo/TypePolicies";
import { createFragmentRegistry } from "@apollo/client/cache";

import { InMemoryCache } from "@apollo/client";
import { fragments } from "apollo/Fragments";

async function initCache(): Promise<InMemoryCache> {
    const cache: InMemoryCache = new InMemoryCache({
        typePolicies: TypePolicy,
        fragments: createFragmentRegistry(...fragments),
    });

    // await persistCache({
    //     cache,
    //     storage: window.localStorage,
    //     debug: process.env.NODE_ENV === "development"
    // });

    return cache;
}
export default initCache;
