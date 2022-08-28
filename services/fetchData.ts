import { request, gql } from "graphql-request";
const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;
// get All categories
export const getCategories = async () => {
  const query = gql`
    query getCategories {
      categories(orderBy: publishedAt_DESC) {
        name
        image {
          url
        }
        description
        href
        id
        createdAt
        author {
          id
          name
          avatar {
            url
          }
        }
      }
    }
  `;
  const results = await request(endpoint, query);
  return results.categories;
};

// get all categories : data => name and href only
export const getCategoriesNameAndHref = async () => {
  const query = gql`
    query getCategories {
      categories {
        name
        href
      }
    }
  `;
  const result = await request(endpoint, query);
  return result.categories;
};

// get Articles specific category only
export const getArticlesSpecificCategory = async (href: string) => {
  const query = gql`
    query GetCategoryPost($href: String!) {
      postsConnection(where: { category: { href_contains: $href } }) {
        edges {
          node {
            href
            createdAt
            description
            title
            image {
              url
            }
            author {
              name
              avatar {
                url
              }
            }
          }
        }
      }
    }
  `;
  const results = await request(endpoint, query, { href });
  return results?.postsConnection?.edges;
};

// get details article
export const getDetailsArticle = async (href: string) => {
  const query = gql`
  query getDetailsPost($href: String!)  {
   post(where: {href: $href}) {
     createdAt
     description
     id
     title
     image {
       url
     }
     content{
      html
     }
     author {
       name
       avatar {
         url
       }
     }
   }
  }
`;
  const results = await request(endpoint, query, { href });
  return results?.post;
};

// get href articles => static paths
export const getHrefArticles = async () => {
  const query = gql`
    query MyQuery {
      posts {
        href
      }
    }
  `;
  const results = await request(endpoint, query);
  return results?.posts;
};
