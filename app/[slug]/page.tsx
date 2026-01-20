import { notFound } from "next/navigation";
import Image from "next/image";
import { getPostBySlug } from "@/lib/wordpress";
import { formatDate } from "@/lib/utils";

// Force static generation for these paths would require getStaticParams, but we'll use dynamic rendering for now or generateParams if needed.
// For Cloudflare Pages, standard on-request ISR/SSR works fine.
export const revalidate = 600;

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const imageUrl = post.featuredImage?.node?.sourceUrl || null;

    return (
        <article className="min-h-screen pb-20">
            {/* Header / Hero for Post */}
            <div className="relative w-full h-[60vh] md:h-[70vh] bg-black">
                {imageUrl && (
                    <Image
                        src={imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 mb-8">
                    <div className="container mx-auto max-w-4xl">
                        <div className="flex gap-2 mb-4">
                            {post.categories?.nodes.map(cat => (
                                <span key={cat.slug} className="px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                                    {cat.name}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-sm">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 text-white/90">
                            {post.author?.node?.avatar?.url && (
                                <Image
                                    src={post.author.node.avatar.url}
                                    alt={post.author.node.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full border-2 border-white/20"
                                />
                            )}
                            <div>
                                <div className="font-medium text-lg">{post.author?.node?.name}</div>
                                <div className="text-sm opacity-80">{formatDate(post.date)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto max-w-3xl px-6 mt-12">
                <div
                    className="prose prose-lg dark:prose-invert max-w-none 
            prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-a:text-blue-600 
            prose-img:rounded-xl prose-img:shadow-lg"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
        </article>
    );
}
