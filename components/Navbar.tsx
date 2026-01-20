import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                    CMS<span className="text-blue-600">.</span>
                </Link>
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    <Link href="/" className="hover:text-blue-600 transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-blue-600 transition-colors">
                        About
                    </Link>
                    <Link href="/blog" className="hover:text-blue-600 transition-colors">
                        Blog
                    </Link>
                    <button className="px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity">
                        Subscribe
                    </button>
                </div>
            </div>
        </nav>
    );
}
