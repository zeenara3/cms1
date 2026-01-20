import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/types';
import { formatDate } from '@/lib/utils';

export default function Hero({ post }: { post: Post }) {
    if (!post) return null;

    const imageUrl = post.featuredImage?.node?.sourceUrl || 'https://via.placeholder.com/1200x600?text=Featured';

    return (
        <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] items-center">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            Featured Post
                        </div>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                            {post.title}
                        </h1>
                        <div className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 line-clamp-3" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link
                                href={`/${post.slug}`}
                                className="inline-flex h-10 items-center justify-center rounded-md bg-foreground text-background px-8 text-sm font-medium shadow transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            >
                                Read Article
                            </Link>
                            <p className="text-xs text-gray-400 self-center">
                                By {post.author?.node?.name} • {formatDate(post.date)}
                            </p>
                        </div>
                    </div>
                    <Link href={`/${post.slug}`} className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                        <Image
                            src={imageUrl}
                            alt={post.featuredImage?.node?.altText || post.title}
                            width={800}
                            height={450}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </Link>
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-gradient-to-bl from-blue-50 to-transparent dark:from-blue-950/20 blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 -z-10 h-full w-1/2 bg-gradient-to-tr from-purple-50 to-transparent dark:from-purple-950/20 blur-3xl opacity-50" />

        </section>
    );
}
