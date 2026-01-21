import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black text-zinc-400 py-12 md:py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="size-8 rounded-full bg-[#1ED760] flex items-center justify-center text-black font-bold text-lg">
                                S
                            </div>
                            <span className="font-bold text-xl text-white">Spotifull</span>
                        </Link>
                        <p className="max-w-sm text-sm leading-relaxed mb-6">
                            Download Spotify Premium Mod APK for free. Get unlimited skips, no ads, and high-quality audio on Android, PC, and iOS.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="size-8 rounded-full bg-zinc-900 border border-white/5 hover:bg-[#1ED760] hover:text-black transition-all cursor-pointer flex items-center justify-center">
                                    <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8 8 8z" /></svg>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Downloads</h4>
                        <ul className="space-y-4 text-sm">
                            {['Spotify for Android', 'Spotify for PC', 'Spotify for iOS', 'Old Versions'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-[#1ED760] transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Legal & Info</h4>
                        <ul className="space-y-4 text-sm">
                            {['About Us', 'DMCA Disclaimer', 'Privacy Policy', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-[#1ED760] transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium">
                    <p>&copy; {new Date().getFullYear()} Spotifull. All rights reserved.</p>
                    <div className="flex items-center gap-4 opacity-50">
                        <span>v1.1 (Premium Design)</span>
                        <span>Designed with ❤️</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
