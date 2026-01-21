import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black text-zinc-400 py-12 md:py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="size-8 rounded-lg bg-zinc-800 flex items-center justify-center text-white font-bold text-lg">
                                P
                            </div>
                            <span className="font-bold text-xl text-white">PremiumCMS</span>
                        </Link>
                        <p className="max-w-sm text-sm leading-relaxed mb-6">
                            A premium digital asset marketplace and content platform.
                            Built with Next.js and WordPress for ultimate performance.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="size-8 rounded-full bg-zinc-900 border border-white/5 hover:bg-white hover:text-black transition-all cursor-pointer flex items-center justify-center">
                                    <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8 8 8z" /></svg>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Discover</h4>
                        <ul className="space-y-4 text-sm">
                            {['Templates', 'Mockups', 'Fonts', 'Icons'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-violet-400 transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            {['About Us', 'License', 'Privacy Policy', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-violet-400 transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium">
                    <p>&copy; {new Date().getFullYear()} PremiumCMS. All rights reserved.</p>
                    <p className="opacity-50">Designed with ❤️ using Next.js</p>
                </div>
            </div>
        </footer>
    );
}
