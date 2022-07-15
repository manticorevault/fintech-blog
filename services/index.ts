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

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        cover {
          url
        }
        createdAt
        slug
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.posts;
};

export const getRelatedPosts = async () => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug, 
          AND: {
            categories_some: {
              slug_in: $categories
            }
          }
        }
        last: 3
      ) {
        title
        cover {
          url
        }
        createdAt
        slug
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.posts;
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories { 
        name
        slug
       }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.categories;
}