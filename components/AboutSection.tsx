export default function AboutSection({ content }: { content?: string }) {
    return (
        <section className="py-20 bg-zinc-900 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="prose prose-invert prose-lg max-w-none text-zinc-300">
                    {content ? (
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    ) : (
                        <>
                            <p className="lead text-xl text-zinc-300 text-center mb-12">
                                Spotify is a digital music, podcast, and video service that gives you access to millions of songs and other content from creators all over the world.
                            </p>

                            <div className="bg-black p-8 rounded-3xl border border-white/10 mb-12">
                                <h3 className="text-2xl font-bold text-white mb-4">Why Go Premium?</h3>
                                <p className="text-zinc-400 mb-6">
                                    While the free version of Spotify offers a great way to discover new music, it comes with limitations like audio ads, forced shuffle play on mobile, and lower audio quality.
                                    <strong> Spotify Premium</strong> unlocks the full potential of the platform.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Download music for offline listening.",
                                        "Play any song, anywhere, on any device.",
                                        "Completely ad-free experience.",
                                        "High Definition audio quality (320kbps).",
                                        "Unlimited skips.",
                                        "Spotify Connect for all devices."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-zinc-300">
                                            <div className="size-2 bg-[#1ED760] rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="text-zinc-400">
                                With the <strong>Spotify Mod APK</strong>, you get all these premium features unlocked for free. It modifies the official client to bypass server-side checks for ads and restrictions, giving you the ultimate listening experience without the monthly subscription fee.
                            </p>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
