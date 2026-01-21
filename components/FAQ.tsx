export default function FAQ() {
    const faqs = [
        {
            q: "Is it safe to use Spotify Premium Mod APK?",
            a: "Yes, all APK files provided on Spotifull are scanned for malware and viruses to ensure they are 100% safe. We only source files from reputable developers."
        },
        {
            q: "Will my account get banned?",
            a: "While using a modified client technically violates Spotify's Terms of Service, account bans are extremely rare. Most users never face any issues."
        },
        {
            q: "Can I log in with my existing account?",
            a: "Yes, you can log in with your existing free Spotify account. All your playlists, saved songs, and preferences will be available."
        },
        {
            q: "Do I need to root my device?",
            a: "No, rooting is not required. You only need to enable 'Installation from Unknown Sources' in your security settings."
        },
        {
            q: "How do I update the app?",
            a: "Modified APKs do not update automatically. You will need to revisit our website, download the new APK file, and install it over the existing version."
        }
    ];

    return (
        <section className="py-20 bg-black border-t border-white/5">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-16 text-center">
                    Frequently Asked <span className="text-[#1ED760]">Questions</span>
                </h2>

                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-3">
                                    <span className="text-[#1ED760]">Q.</span> {faq.q}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed pl-8">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
