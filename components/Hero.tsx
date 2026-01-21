
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/types';
import { formatDate } from '@/lib/utils';

export default function Hero({ post }: { post?: Post }) {
    // Post is optional here as this is a static landing hero now.

    return (
        <section className="relative w-full pt-32 pb-12 md:pt-40 md:pb-24 border-b border-white/5 overflow-hidden">

            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-violet-900/20 via-black to-black -z-10" />
            <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-pink-500/10 blur-[120px] -z-10" />

            <div className="container px-4 md:px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="text-left z-10">
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-xs font-bold uppercase tracking-widest mb-6">
                        Verified & Safe • v3.0 (Latest)
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                        Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-500">PicsArt Mod APK</span> <br />
                        For Android
                    </h1>

                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                        Unlock premium features, remove ads, and access all gold assets for free.
                        The ultimate photo editing experience on your mobile device.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold text-lg shadow-lg shadow-violet-500/25 hover:scale-105 transition-transform flex items-center justify-center gap-2">
                            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            Download Now
                        </button>
                        <button className="px-8 py-4 rounded-xl bg-zinc-800 text-white font-bold text-lg hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2">
                            <svg className="size-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            App Info
                        </button>
                    </div>

                    <div className="mt-8 flex items-center gap-6 text-sm text-zinc-500 font-medium">
                        <div className="flex items-center gap-2">
                            <svg className="size-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Virus Free
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="size-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Anti-Ban
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="size-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            All Assets Unlocked
                        </div>
                    </div>
                </div>

                {/* Right Content / Image Feature */}
                <div className="relative mx-auto w-full max-w-md lg:max-w-full">
                    <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-zinc-800 to-black rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center group">
                        {/* Using the featured post image if available, otherwise a placeholder for the "App Screenshot" */}
                        {post?.featuredImage?.node?.sourceUrl ? (
                            <Image
                                src={post.featuredImage.node.sourceUrl}
                                alt="App Screenshot"
                                fill
                                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />
                        ) : (
                            <div className="text-center p-8">
                                <div className="size-24 bg-gradient-to-br from-violet-600 to-pink-500 rounded-3xl mx-auto mb-6 flex items-center justify-center text-4xl text-white font-bold shadow-lg shadow-pink-500/20">
                                    P
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">PicsArt Premium</h3>
                                <p className="text-zinc-400">The #1 Creative Platform</p>
                            </div>
                        )}

                        {/* Floating Badge */}
                        <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                            <div className="bg-green-500/20 text-green-400 p-2 rounded-lg">
                                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            </div>
                            <div>
                                <div className="text-white font-bold">10M+ Downloads</div>
                                <div className="text-xs text-zinc-400">Trusted by Creators</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

