export default function DownloadSection() {
    return (
        <section className="py-12 bg-zinc-900 border-b border-white/5">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-black rounded-3xl border border-white/10 p-8 md:p-12 text-center shadow-2xl relative overflow-hidden group">

                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#1ED760]/10 blur-[100px] rounded-full -z-0 pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-4xl font-black text-white mb-6">
                            Spotify Premium APK v9.1.2.1253 <span className="text-[#1ED760]">(Latest Version)</span>
                        </h2>

                        <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                            Get the most recent Spotify Mod APK for Android. Verified secure, virus-free, and always updated.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto text-sm font-bold text-zinc-500">
                            <div className="flex flex-col items-center p-4 rounded-2xl bg-zinc-900 border border-white/5">
                                <span className="text-white mb-1">Size</span>
                                85 MB
                            </div>
                            <div className="flex flex-col items-center p-4 rounded-2xl bg-zinc-900 border border-white/5">
                                <span className="text-white mb-1">Version</span>
                                v9.1.2
                            </div>
                            <div className="flex flex-col items-center p-4 rounded-2xl bg-zinc-900 border border-white/5">
                                <span className="text-white mb-1">Update</span>
                                Jan 21, 2026
                            </div>
                            <div className="flex flex-col items-center p-4 rounded-2xl bg-zinc-900 border border-white/5">
                                <span className="text-white mb-1">Root</span>
                                No
                            </div>
                        </div>

                        <button className="px-10 py-5 rounded-full bg-[#1ED760] text-black font-bold text-xl hover:bg-[#1fdf64] hover:scale-105 transition-all shadow-xl shadow-green-500/20 w-full md:w-auto flex items-center justify-center gap-3 mx-auto">
                            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.308-1.758-8.796-.963-.335.077-.67-.133-.746-.467-.076-.335.132-.67.467-.746 3.808-.87 7.076-.496 9.726 1.115.294.18.386.563.206.857zm1.226-2.726c-.225.362-.693.475-1.055.253-2.695-1.657-6.8-2.14-9.97-1.173-.42.128-.86-.113-.986-.53-.127-.418.112-.86.53-.988 3.618-1.103 8.163-.56 11.234 1.328.36.223.474.69.25 1.056zm.106-2.88c-3.23-1.92-8.562-2.1-11.644-1.16-.477.144-.984-.13-.127-.606-.144-.477.13-.985.606-1.127 3.56-1.085 9.432-.87 13.09 1.3 2.478.283.65.116 1.126-.116 2.478-.367.283-.533.648-.25.533.65z" /></svg>
                            Download Secure APK
                        </button>
                        <p className="mt-4 text-xs text-zinc-600 font-medium">100% Safe • Fast Download • No Ads</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
