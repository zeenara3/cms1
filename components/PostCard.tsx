import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/types';
import { formatDate } from '@/lib/utils'; // Keep formatDate for potentially other uses or consistency

export default function PostCard({ post }: { post: Post }) {
    const imageUrl = post.featuredImage?.node?.sourceUrl || 'https://via.placeholder.com/800x600?text=No+Image';

    return (
        <Link href={`/${post.slug}`} className="group block h-full">
            <article className="h-full flex flex-col overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100 dark:bg-zinc-800">
                    <Image
                        src={imageUrl}
                        alt={post.featuredImage?.node?.altText || post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-400 mb-3">
                        {post.categories?.nodes[0]?.name || 'Uncategorized'}
                    </div>
                    <h2 className="text-xl font-bold tracking-tight mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                    </h2>
                    <div
                        className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-4 flex-1"
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    />
                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                        {post.author?.node?.avatar?.url && (
                            <Image
                                src={post.author.node.avatar.url}
                                alt={post.author.node.name}
                                width={24}
                                height={24}
                                className="rounded-full"
                            />
                        )}
                        <span className="text-xs font-medium text-gray-900 dark:text-gray-200">
                            {post.author?.node?.name}
                        </span>
                        <span className="text-xs text-gray-400 ml-auto">
                            {formatDate(post.date)}
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}
