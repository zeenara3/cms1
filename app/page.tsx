import { getAllPosts } from "@/lib/wordpress";
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import AppInfoTable from "@/components/AppInfoTable";

export const runtime = 'edge';
export const revalidate = 600; // Revalidate every 10 minutes

export default async function Home() {
  const posts = await getAllPosts(20);

  // We'll use the first post as the "featured app" content if needed, 
  // or just pass it to the Hero for the image.
  const featuredPost = posts?.[0]; // Safe access

  return (
    <div className="space-y-12 pb-20">
      <Hero post={featuredPost} />

      <section className="container mx-auto px-6 max-w-5xl">

        {/* App Info Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-pink-500">
            PicsArt Mod APK Details
          </h2>
          <AppInfoTable />

          <div className="prose prose-invert max-w-none text-zinc-300">
            <p className="text-lg leading-relaxed mb-4">
              PicsArt is the #1 photo and video editor on mobile. Download the **PicsArt Mod APK** today to access Gold features, remove watermarks, and use thousands of premium stickers, fonts, and frames without spending a dime.
            </p>
            <p>
              Whether you are a professional creator or just want to make your photos pop for social media, this unlocked version gives you the power of a desktop editor in the palm of your hand.
            </p>
          </div>
        </div>

        {/* Blog / Resources Section */}
        <div id="blogs" className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white tracking-tight">Latest Blogs & Tutorials</h2>
            <div className="h-px flex-1 bg-white/10 ml-6" />
          </div>

          {(!posts || posts.length === 0) ? (
            <div className="text-center py-20 bg-zinc-900 rounded-3xl border border-white/5">
              <p className="text-zinc-500">No posts found. Please check your WordPress connection.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>

      </section>
    </div>
  );
}
