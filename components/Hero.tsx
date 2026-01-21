import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/types';
import { formatDate } from '@/lib/utils';

export default function Hero({ post }: { post: Post }) {
    // We might not use the 'post' strictly for the hero layout anymore if we want a "landing page" feel,
    // but we can feature it as a "Top Pick".

    return (
        <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">

            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-violet-500/20 via-pink-500/10 to-transparent blur-[100px] -z-10" />

            <div className="container px-4 md:px-6 mx-auto text-center z-10">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300 backdrop-blur-md mb-8">
                    <span className="flex h-2 w-2 rounded-full bg-pink-500 mr-2 animate-pulse"></span>
                    New Updates Available v2.0
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6 drop-shadow-sm">
                    Next Generation <br />
                    <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Digital Assets</span>
                </h1>

                <p className="max-w-[800px] mx-auto text-zinc-400 md:text-xl lg:text-2xl mb-10 leading-relaxed">
                    Discover high-quality premium resources for your next creative project.
                    Powered by Cloudflare and Next.js.
                </p>

                {/* Search Bar Simulation */}
                <div className="max-w-xl mx-auto relative mb-16">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full blur opacity-25" />
                    <div className="relative flex items-center bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-full p-2 pl-6 shadow-2xl ring-1 ring-white/10">
                        <svg className="size-5 text-zinc-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        <input
                            type="text"
                            placeholder="Search for templates, assets..."
                            className="bg-transparent border-none outline-none text-white placeholder-zinc-500 w-full"
                        />
                        <button className="bg-white text-black rounded-full px-6 py-3 font-semibold hover:bg-zinc-200 transition-colors">
                            Search
                        </button>
                    </div>
                </div>

                {/* Featured Post Mini-Card (if post exists) */}
                {post && (
                    <div className="inline-block relative group">
                        <Link href={`/${post.slug}`} className="flex items-center gap-4 bg-zinc-900/50 border border-white/10 rounded-2xl p-2 pr-6 hover:bg-zinc-800/50 transition-all cursor-pointer">
                            <div className="size-12 rounded-xl bg-zinc-800 overflow-hidden relative">
                                {post.featuredImage?.node?.sourceUrl && (
                                    <Image
                                        src={post.featuredImage.node.sourceUrl}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                            </div>
                            <div className="text-left">
                                <div className="text-xs text-pink-400 font-bold uppercase tracking-wider mb-0.5">Featured</div>
                                <div className="text-sm font-medium text-white line-clamp-1 max-w-[200px]">{post.title}</div>
                            </div>
                            <svg className="size-4 text-zinc-500 group-hover:text-white transition-colors group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                )}

            </div>
        </section>
    );
}
