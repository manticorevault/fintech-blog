import { request, gql } from "graphql-request";

// Import dotenv files with non-null assertion operator ("!")
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                biography
                name
                id
                picture {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              cover {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `

    const result = await request(graphqlAPI, query)

    return result.postsConnection.edges;
};