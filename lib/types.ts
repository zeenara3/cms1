export interface Post {
    id: string;
    databaseId: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    date: string;
    featuredImage?: {
        node: {
            sourceUrl: string;
            altText: string;
            mediaDetails?: {
                width: number;
                height: number;
            };
        };
    };
    author: {
        node: {
            name: string;
            avatar: {
                url: string;
            };
        };
    };
    categories: {
        nodes: Array<{
            name: string;
            slug: string;
        }>;
    };
}

export interface PageInfo {
    endCursor: string;
    hasNextPage: boolean;
}

export interface AllPostsResponse {
    posts: {
        nodes: Post[];
        pageInfo: PageInfo;
    };
}

export interface SinglePostResponse {
    post: Post;
}
