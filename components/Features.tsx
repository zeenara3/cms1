export default function Features() {
    const features = [
        {
            title: "Ad-Free Listening",
            description: "Enjoy your music without any interruptions. The Premium APK removes all audio and visual ads.",
            icon: (
                <svg className="size-8 text-[#1ED760]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
            )
        },
        {
            title: "Unlimited Skips",
            description: "Skip as many tracks as you want, whenever you want. Complete control over your listening.",
            icon: (
                <svg className="size-8 text-[#1ED760]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" /></svg>
            )
        },
        {
            title: "Offline Mode",
            description: "Download your favorite songs and podcasts. Save data and listen anywhere without internet.",
            icon: (
                <svg className="size-8 text-[#1ED760]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            )
        },
        {
            title: "High-Quality Audio",
            description: "Unlock Very High audio quality (up to 320 kbps) for a richer, more detailed sound.",
            icon: (
                <svg className="size-8 text-[#1ED760]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
            )
        },
        {
            title: "No Forced Shuffle",
            description: "Play any song, any album, in any order. Disable forced shuffle on all playlists.",
            icon: (
                <svg className="size-8 text-[#1ED760]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
            )
        },
        {
            title: "Spotify Connect",
            description: "Stream music to any supported device directly from your phone (TV, Speakers, Laptop).",
            icon: (
                <svg className="size-8 text-[#1ED760]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            )
        }
    ];

    return (
        <section className="py-20 bg-zinc-900/50 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Unlock the Full <span className="text-[#1ED760]">Premium Experience</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Get all the VIP features without the monthly subscription. Safe, secure, and always updated.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div key={feature.title} className="p-8 rounded-3xl bg-black border border-white/10 hover:border-[#1ED760]/50 transition-colors group">
                            <div className="mb-6 bg-zinc-900 size-16 rounded-2xl flex items-center justify-center group-hover:bg-[#1ED760]/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1ED760] transition-colors">{feature.title}</h3>
                            <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
