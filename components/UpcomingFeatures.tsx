export default function UpcomingFeatures() {
    const features = [
        { title: "Lossless Audio", desc: "Experience ultra-high sound clarity for a richer listening experience." },
        { title: "AI-Powered Playlists", desc: "Generate entire playlists from complex text prompts or conversations." },
        { title: "Personal DJ Mode", desc: "An AI voice DJ that provides commentary, mixes tracks, and takes live requests." },
        { title: "Enhanced Offline", desc: "Faster downloads and more reliable offline library management." },
        { title: "Synced Lyrics", desc: "Follow along with real-time lyrics and see translations for global hits." },
        { title: "True Cross-Platform", desc: "Continue playback seamlessly between Android, iOS, and PC." }
    ];

    return (
        <section className="py-20 bg-zinc-900 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-6xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 text-center">
                    Upcoming Features <span className="text-[#1ED760]">2026</span>
                </h2>
                <p className="text-zinc-400 text-lg text-center mb-16 max-w-2xl mx-auto">
                    The future of music streaming is here. Check out what&apos;s coming next to the platform.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feat) => (
                        <div key={feat.title} className="bg-black p-8 rounded-3xl border border-white/10 hover:border-[#1ED760]/30 transition-all hover:-translate-y-1">
                            <div className="size-12 rounded-full bg-[#1ED760]/10 flex items-center justify-center text-[#1ED760] mb-6">
                                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
