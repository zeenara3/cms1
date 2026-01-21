export default function AppInfoTable() {
    const info = [
        { label: "App Name", value: "PicsArt Photo Editor" },
        { label: "Version", value: "v24.6.3 (Latest)" },
        { label: "Size", value: "85 MB" },
        { label: "Price", value: "FREE (Premium Unlocked)" },
        { label: "Android", value: "5.0 and Up" },
        { label: "Category", value: "Photography" },
        { label: "Developer", value: "PicsArt, Inc." },
        { label: "Last Updated", value: "January 20, 2025" },
    ];

    return (
        <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-xl mb-12">
            <div className="bg-zinc-800/50 p-4 border-b border-white/5">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                    App Information
                </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {info.map((item, index) => (
                    <div
                        key={item.label}
                        className={`flex items-center justify-between p-4 border-b border-white/5 ${index % 2 === 0 ? 'bg-white/[0.02]' : ''} hover:bg-white/[0.05] transition-colors`}
                    >
                        <span className="text-zinc-400 text-sm font-medium">{item.label}</span>
                        <span className="text-white text-sm font-bold">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
