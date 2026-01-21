export default function PlaylistGuide() {
    return (
        <section className="py-20 bg-black border-t border-white/5">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
                            How to Create a <br />
                            <span className="text-[#1ED760]">Playlist?</span>
                        </h2>
                        <p className="text-zinc-400 text-lg mb-12">
                            Curate your own vibe. It's easy to build your personal collection of tracks.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="size-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white font-bold text-xl shrink-0">1</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Create Your Playlist</h3>
                                    <p className="text-zinc-400">In the Spotify app, go to &apos;Your Library&apos; and tap the &apos;+&apos; icon. Select &apos;Playlist&apos; to start a new one.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="size-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white font-bold text-xl shrink-0">2</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Name Your Vibe</h3>
                                    <p className="text-zinc-400">Give your playlist a name that fits its mood, like &apos;Late Night Drives&apos; or &apos;Workout Fuel&apos;.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="size-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white font-bold text-xl shrink-0">3</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Add Songs</h3>
                                    <p className="text-zinc-400">Tap &apos;Add songs&apos; to search for tracks. Spotify will also give you smart recommendations.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#1ED760]/20 to-transparent blur-3xl rounded-full" />
                        <div className="relative bg-zinc-900 rounded-3xl border border-white/10 p-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="flex items-center justify-between mb-8">
                                <div className="text-white font-bold text-xl">My Playlist</div>
                                <div className="size-8 rounded-full bg-[#1ED760] flex items-center justify-center">
                                    <svg className="size-4 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-black/50 border border-white/5 hover:bg-white/5 transition-colors">
                                        <div className="size-10 rounded bg-zinc-800 flex items-center justify-center text-xs text-zinc-500">Img</div>
                                        <div className="flex-1">
                                            <div className="h-2 w-24 bg-zinc-700 rounded mb-2" />
                                            <div className="h-2 w-16 bg-zinc-800 rounded" />
                                        </div>
                                        <div className="text-zinc-600">...</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
