



export default function Hero() {

    return (
        <section className="relative w-full pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-black">

            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1ED760]/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1ED760]/5 blur-[100px] rounded-full -z-10" />

            <div className="container px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div className="text-left z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm font-bold mb-8">
                        <span className="size-2 rounded-full bg-[#1ED760] animate-pulse"></span>
                        Updated: January 2026 • v9.1.2 (Latest)
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight">
                        Spotify Premium <br />
                        <span className="text-[#1ED760]">Mod APK 2026</span>
                    </h1>

                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                        Unlock ad-free music, unlimited skips, and offline listening for free.
                        The ultimate modified version of Spotify for Android.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <button className="px-10 py-4 rounded-full bg-[#1ED760] text-black font-bold text-lg hover:bg-[#1fdf64] hover:scale-105 transition-all shadow-xl shadow-green-500/20 flex items-center justify-center gap-3">
                            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.308-1.758-8.796-.963-.335.077-.67-.133-.746-.467-.076-.335.132-.67.467-.746 3.808-.87 7.076-.496 9.726 1.115.294.18.386.563.206.857zm1.226-2.726c-.225.362-.693.475-1.055.253-2.695-1.657-6.8-2.14-9.97-1.173-.42.128-.86-.113-.986-.53-.127-.418.112-.86.53-.988 3.618-1.103 8.163-.56 11.234 1.328.36.223.474.69.25 1.056zm.106-2.88c-3.23-1.92-8.562-2.1-11.644-1.16-.477.144-.984-.13-.127-.606-.144-.477.13-.985.606-1.127 3.56-1.085 9.432-.87 13.09 1.3 2.478.283.65.116 1.126-.116 2.478-.367.283-.533.648-.25.533.65z" /></svg>
                            Download APK
                        </button>
                        <button className="px-10 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-white font-bold text-lg hover:bg-zinc-800 transition-colors flex items-center justify-center gap-3">
                            More Versions
                        </button>
                    </div>

                    <div className="flex items-center gap-8 text-sm text-zinc-500 font-semibold">
                        <div className="flex items-center gap-2">
                            <svg className="size-5 text-[#1ED760]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                            Verified Safe
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="size-5 text-[#1ED760]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                            No Root Needed
                        </div>
                    </div>
                </div>

                {/* Right Content / App Image */}
                <div className="relative mx-auto w-full max-w-md lg:max-w-full lg:pl-12">
                    {/* Card Container */}
                    <div className="relative aspect-[4/5] w-full max-w-sm mx-auto bg-zinc-900 rounded-[3rem] border-[4px] border-zinc-800 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8">
                        {/* Fake Interface Elements */}
                        <div className="w-full flex items-center justify-between mb-8 opacity-50">
                            <div className="size-2 rounded-full bg-white/20"></div>
                            <div className="w-12 h-2 rounded-full bg-white/20"></div>
                            <div className="size-2 rounded-full bg-white/20"></div>
                        </div>

                        <div className="size-48 bg-gradient-to-br from-[#1ED760] to-[#169c46] rounded-3xl shadow-2xl shadow-green-500/20 flex items-center justify-center mb-8 relative">
                            <svg className="size-24 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.308-1.758-8.796-.963-.335.077-.67-.133-.746-.467-.076-.335.132-.67.467-.746 3.808-.87 7.076-.496 9.726 1.115.294.18.386.563.206.857zm1.226-2.726c-.225.362-.693.475-1.055.253-2.695-1.657-6.8-2.14-9.97-1.173-.42.128-.86-.113-.986-.53-.127-.418.112-.86.53-.988 3.618-1.103 8.163-.56 11.234 1.328.36.223.474.69.25 1.056zm.106-2.88c-3.23-1.92-8.562-2.1-11.644-1.16-.477.144-.984-.13-.127-.606-.144-.477.13-.985.606-1.127 3.56-1.085 9.432-.87 13.09 1.3 2.478.283.65.116 1.126-.116 2.478-.367.283-.533.648-.25.533.65z" /></svg>

                            {/* Premium Badge */}
                            <div className="absolute -top-4 -right-4 px-3 py-1 bg-white text-black text-xs font-black uppercase tracking-wider rounded-lg shadow-lg rotate-6">
                                Premium
                            </div>
                        </div>

                        <div className="text-center w-full">
                            <div className="h-4 w-32 bg-white/10 rounded-full mx-auto mb-4"></div>
                            <div className="h-3 w-48 bg-white/5 rounded-full mx-auto mb-8"></div>

                            {/* Player Controls */}
                            <div className="flex items-center justify-center gap-6 text-white/80">
                                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07l-1.41-1.41a3 3 0 000-4.24l1.41-1.41zM19.07 4.93a10 10 0 010 14.14l-1.41-1.41a8 8 0 000-11.31l1.41-1.41z" /></svg>
                                <svg className="size-10 text-[#1ED760]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" /></svg>
                                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14 19h4V5h-4M6 19h4V5H6v14z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

