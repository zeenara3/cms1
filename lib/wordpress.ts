import { GraphQLClient } from 'graphql-request';
import { AllPostsResponse, SinglePostResponse, Post, SinglePageResponse, Page, GeneralSettingsResponse, SiteSettings } from './types';

const API_URL = process.env.WORDPRESS_API_URL || 'https://cms.imranmurtaza.com/graphql';

const client = new GraphQLClient(API_URL);

/**
 * Fetch all posts with pagination support (basic implementation)
 */
export async function getAllPosts(first = 20): Promise<Post[]> {
  const query = `
    query GetAllPosts($first: Int!) {
      posts(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          databaseId
          title
          slug
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const data = await client.request<AllPostsResponse>(query, { first });
    return data.posts.nodes;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

/**
 * Fetch a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const query = `
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        databaseId
        title
        slug
        content
        date
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  `;

  try {
    const data = await client.request<SinglePostResponse>(query, { slug });
    return data.post;
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
}

/**
 * Fetch recent posts for the hero section or sidebar
 */
export async function getRecentPosts(count = 3): Promise<Post[]> {
  return getAllPosts(count);
}

/**
 * Fetch a single page by slug
 */
export async function getPageBySlug(slug: string): Promise<Page | null> {
  const query = `
    query GetPageBySlug($slug: ID!) {
      page(id: $slug, idType: URI) {
        id
        title
        content
        slug
      }
    }
  `;

  try {
    const data = await client.request<SinglePageResponse>(query, { slug });
    return data.page;
  } catch (error) {
    console.error(`Error fetching page with slug ${slug}:`, error);
    return null;
  }
}

/**
 * Fetch site general settings
 */
export async function getSiteSettings(): Promise<SiteSettings | null> {
  const query = `
    query GetSiteSettings {
      generalSettings {
        title
        description
      }
    }
  `;

  try {
    const data = await client.request<GeneralSettingsResponse>(query);
    return data.generalSettings;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}
