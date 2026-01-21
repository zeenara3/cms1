import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 bg-black/50 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="size-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-pink-500/20 transition-all">
                        P
                    </div>
                    <span className="font-bold text-lg tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-pink-400 transition-all">
                        Premium<span className="text-white/40">CMS</span>
                    </span>
                </Link>

                <div className="hidden md:flex items-center space-x-1">
                    {['Home', 'Templates', 'Premium', 'Blog'].map((item) => (
                        <Link
                            key={item}
                            href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden md:block text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                        Log in
                    </button>
                    <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}
