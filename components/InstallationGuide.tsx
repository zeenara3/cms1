export default function InstallationGuide() {
    return (
        <section className="py-20 bg-black border-t border-white/5">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        How to <span className="text-[#1ED760]">Download & Install</span>
                    </h2>
                    <p className="text-zinc-400 text-lg">Detailed guide to get started in 3 easy steps.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="bg-zinc-900 p-8 rounded-3xl border border-white/10 relative group hover:border-[#1ED760]/50 transition-colors">
                        <div className="absolute -top-6 left-8 text-8xl font-black text-white/5 z-0">1</div>
                        <div className="relative z-10">
                            <div className="size-16 rounded-2xl bg-[#1ED760]/10 text-[#1ED760] flex items-center justify-center mb-6 text-2xl font-bold">
                                <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Download APK</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Click the download button above to get the latest Spotify Premium APK file directly to your device.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-zinc-900 p-8 rounded-3xl border border-white/10 relative group hover:border-[#1ED760]/50 transition-colors">
                        <div className="absolute -top-6 left-8 text-8xl font-black text-white/5 z-0">2</div>
                        <div className="relative z-10">
                            <div className="size-16 rounded-2xl bg-[#1ED760]/10 text-[#1ED760] flex items-center justify-center mb-6 text-2xl font-bold">
                                <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Allow Unknown Sources</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Go to <strong>Settings {'>'} Security</strong> and enable &quot;Install from Unknown Sources&quot;.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-zinc-900 p-8 rounded-3xl border border-white/10 relative group hover:border-[#1ED760]/50 transition-colors">
                        <div className="absolute -top-6 left-8 text-8xl font-black text-white/5 z-0">3</div>
                        <div className="relative z-10">
                            <div className="size-16 rounded-2xl bg-[#1ED760]/10 text-[#1ED760] flex items-center justify-center mb-6 text-2xl font-bold">
                                <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Install & Enjoy</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Open the file from your notifications, tap Install, and log in to your free account.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
