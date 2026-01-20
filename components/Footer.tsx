export default function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 py-12 mt-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-2xl font-bold tracking-tighter mb-4">
                        CMS<span className="text-blue-600">.</span>
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 max-w-sm">
                        A high-performance headless WordPress CMS built with Next.js and Cloudflare Pages.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">Links</h4>
                    <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                        <li><a href="#" className="hover:text-blue-600">Home</a></li>
                        <li><a href="#" className="hover:text-blue-600">About</a></li>
                        <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">Social</h4>
                    <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                        <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
                        <li><a href="#" className="hover:text-blue-600">GitHub</a></li>
                        <li><a href="#" className="hover:text-blue-600">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} CMS. All rights reserved.
            </div>
        </footer>
    );
}
