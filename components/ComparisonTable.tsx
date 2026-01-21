export default function ComparisonTable() {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Feature <span className="text-[#1ED760]">Comparison</span>
                    </h2>
                    <p className="text-zinc-400 text-lg">See why the Mod APK is the best choice for music lovers.</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="p-4 border-b border-zinc-800 text-zinc-500 font-medium uppercase text-xs tracking-wider w-1/4">Feature</th>
                                <th className="p-4 border-b border-zinc-800 text-white font-bold text-center w-1/4">Spotify Free</th>
                                <th className="p-4 border-b border-zinc-800 text-[#1ED760] font-black text-xl text-center w-1/4 bg-[#1ED760]/5 rounded-t-2xl">Mod APK</th>
                                <th className="p-4 border-b border-zinc-800 text-white font-bold text-center w-1/4">Premium</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {[
                                { name: 'Ad-Free Listening', free: false, mod: true, premium: true },
                                { name: 'Unlimited Skips', free: false, mod: true, premium: true },
                                { name: 'Offline Mode', free: false, mod: true, premium: true },
                                { name: 'Extreme Audio Quality', free: false, mod: true, premium: true },
                                { name: 'On-Demand Playback', free: false, mod: true, premium: true },
                                { name: 'No Forced Shuffle', free: false, mod: true, premium: true },
                                { name: 'Seek & Repeat', free: false, mod: true, premium: true },
                                { name: 'Spotify Connect', free: false, mod: true, premium: true },
                                { name: 'Price', free: 'Free', mod: 'FREE', premium: '$11.99/mo' },
                            ].map((row, i) => (
                                <tr key={row.name} className="border-b border-zinc-800/50 hover:bg-white/5 transition-colors">
                                    <td className="p-4 py-6 font-bold text-zinc-300">{row.name}</td>
                                    <td className="p-4 py-6 text-center">
                                        {row.free === false ? <span className="text-red-500 font-bold">✕</span> : row.free === true ? <span className="text-white font-bold">✓</span> : <span className="text-white font-bold">{row.free}</span>}
                                    </td>
                                    <td className="p-4 py-6 text-center bg-[#1ED760]/5 font-bold">
                                        {row.mod === true ? (
                                            <div className="inline-flex items-center justify-center size-8 rounded-full bg-[#1ED760] text-black shadow-lg shadow-green-500/20">
                                                <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                        ) : <span className="text-[#1ED760] text-lg">{row.mod}</span>}
                                    </td>
                                    <td className="p-4 py-6 text-center">
                                        {row.premium === true ? <span className="text-white font-bold">✓</span> : <span className="text-white font-bold">{row.premium}</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-zinc-500 text-sm">
                        * Basic internet carrier charges may apply for downloading content.
                    </p>
                </div>
            </div>
        </section>
    );
}
