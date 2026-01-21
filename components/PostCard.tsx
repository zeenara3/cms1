import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/types';
import { formatDate } from '@/lib/utils';

export default function PostCard({ post }: { post: Post }) {
    const imageUrl = post.featuredImage?.node?.sourceUrl || 'https://via.placeholder.com/800x600?text=No+Image';

    return (
        <Link href={`/${post.slug}`} className="group relative flex flex-col bg-zinc-900/50 border border-white/5 rounded-3xl overflow-hidden hover:bg-zinc-800/50 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-1">

            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={post.featuredImage?.node?.altText || post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold text-white bg-black/50 backdrop-blur-md rounded-full border border-white/10 uppercase tracking-wider">
                        Asset
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col relative">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight group-hover:text-violet-400 transition-colors">
                    {post.title}
                </h3>

                <div
                    className="text-zinc-400 text-sm line-clamp-3 mb-6 flex-1"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />

                {/* Meta / Footer of Card */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                    <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full bg-zinc-800 relative overflow-hidden">
                            {post.author?.node?.avatar?.url && (
                                <Image src={post.author.node.avatar.url} alt="Author" fill className="object-cover" />
                            )}
                        </div>
                        <span className="text-xs text-zinc-500 font-medium">
                            {post.author?.node?.name || 'Editor'}
                        </span>
                    </div>
                    <span className="text-xs text-zinc-600 font-medium">
                        {formatDate(post.date)}
                    </span>
                </div>
            </div>
        </Link>
    );
}
