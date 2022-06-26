import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4v8m3471agv01ue7wzc2rih/master',
    cache: new InMemoryCache() //Há outras estratégias de cache, como LocalStorage, Redis...
})