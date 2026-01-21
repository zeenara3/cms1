export default function Compatibility() {
    return (
        <section className="py-20 bg-zinc-900 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-6xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-16 text-center">
                    Plays Well With <span className="text-[#1ED760]">Others</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { title: "Android Phones", icon: "📱", desc: "Samsung, Pixel, etc." },
                        { title: "Tablets", icon: "📟", desc: "Any Android Tablet" },
                        { title: "Smart TV", icon: "📺", desc: "Android TV & FireStick" },
                        { title: "PC / Mac", icon: "💻", desc: "Via BlueStacks Emulator" },
                    ].map((device) => (
                        <div key={device.title} className="bg-black p-6 rounded-3xl border border-white/10 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="text-4xl mb-4">{device.icon}</div>
                            <h3 className="text-lg font-bold text-white mb-1">{device.title}</h3>
                            <p className="text-zinc-500 text-sm">{device.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-black/50 p-6 rounded-2xl border border-white/5 max-w-3xl mx-auto text-center">
                    <p className="text-zinc-400 text-sm">
                        <strong className="text-white">Note for iOS Users:</strong> This APK cannot be installed on iPhones/iPads directly. You need to look for an IPA file and use AltStore to sideload.
                    </p>
                </div>
            </div>
        </section>
    );
}
