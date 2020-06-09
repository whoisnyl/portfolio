import { GraphQLClient } from "graphql-request";

export function request({ query, variables, preview }) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer 80c1348d1acdc5f35c96c0aa6d3ca1`,
    },
  });
  return client.request(query, variables);
}
