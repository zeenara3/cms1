import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 bg-black/80 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="size-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        P
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white">
                        PicsArt<span className="text-pink-500">Premium</span>
                    </span>
                </Link>

                <div className="hidden md:flex items-center space-x-6">
                    {[
                        { label: 'Home', href: '/' },
                        { label: 'For iOS', href: '/#ios' },
                        { label: 'For PC', href: '/#pc' },
                        { label: 'Blogs', href: '/#blogs' }
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-zinc-300 hover:text-pink-500 transition-colors uppercase tracking-wide"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="px-6 py-2 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white text-sm font-bold hover:shadow-lg hover:shadow-pink-500/25 transition-all">
                        Download
                    </button>
                </div>
            </div>
        </nav>
    );
}
