
import Link from 'next/link';

export default function Navbar({ siteTitle = "Spotifull" }: { siteTitle?: string }) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 bg-black/90 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    {/* Spotify-like Icon */}
                    <div className="size-10 rounded-full bg-[#1ED760] flex items-center justify-center text-black shadow-lg shadow-green-500/20">
                        <svg className="size-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.308-1.758-8.796-.963-.335.077-.67-.133-.746-.467-.076-.335.132-.67.467-.746 3.808-.87 7.076-.496 9.726 1.115.294.18.386.563.206.857zm1.226-2.726c-.225.362-.693.475-1.055.253-2.695-1.657-6.8-2.14-9.97-1.173-.42.128-.86-.113-.986-.53-.127-.418.112-.86.53-.988 3.618-1.103 8.163-.56 11.234 1.328.36.223.474.69.25 1.056zm.106-2.88c-3.23-1.92-8.562-2.1-11.644-1.16-.477.144-.984-.13-.127-.606-.144-.477.13-.985.606-1.127 3.56-1.085 9.432-.87 13.09 1.3 2.478.283.65.116 1.126-.116 2.478-.367.283-.533.648-.25.533.65z" /></svg>
                    </div>
                    <span className="font-bold text-2xl tracking-tighter text-white">
                        {siteTitle}
                    </span>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    {[
                        { label: 'Android', href: '/#android' },
                        { label: 'PC', href: '/#pc' },
                        { label: 'iOS', href: '/#ios' },
                        { label: 'TV & FireStick', href: '/#tv' },
                        { label: 'Spotify MODs', href: '/#mods' }
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-bold text-zinc-400 hover:text-[#1ED760] transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="px-6 py-2.5 rounded-full bg-[#1ED760] text-black text-sm font-bold hover:bg-[#1fdf64] hover:scale-105 transition-all shadow-lg shadow-green-500/20">
                        Download
                    </button>
                </div>
            </div>
        </nav>
    );
}

