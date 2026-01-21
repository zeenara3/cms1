export default function ProsCons() {
    return (
        <section className="py-20 bg-zinc-900 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-6xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-16 text-center">
                    The <span className="text-[#1ED760]">Pros & Cons</span> at a Glance
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Pros */}
                    <div className="bg-black p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#1ED760]"></div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="size-8 rounded-full bg-[#1ED760]/20 text-[#1ED760] flex items-center justify-center">
                                <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                            </span>
                            The Good Stuff (Pros)
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Access to all Premium features for free.",
                                "No audio or visual advertisements.",
                                "Offline listening mode enabled.",
                                "Very High audio quality unlocked.",
                                "Unlimited skips and on-demand playback."
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-4 text-zinc-300">
                                    <span className="mt-1 size-5 rounded-full bg-[#1ED760]/10 text-[#1ED760] flex items-center justify-center shrink-0">
                                        <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Cons */}
                    <div className="bg-black p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="size-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center">
                                <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" /></svg>
                            </span>
                            The Trade-offs (Cons)
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Not an official app, so no automatic updates.",
                                "Requires manual installation (sideloading).",
                                "Social logins (Facebook, Google) sometimes fail.",
                                "May violate Spotify's Terms of Service."
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-4 text-zinc-400">
                                    <span className="mt-1 size-5 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
                                        <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
