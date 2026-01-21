import { getAllPosts, getPageBySlug } from "@/lib/wordpress";
import { Post, Page } from "@/lib/types";
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import AppInfoTable from "@/components/AppInfoTable";
import Features from "@/components/Features";
import DownloadSection from "@/components/DownloadSection";
import ComparisonTable from "@/components/ComparisonTable";
import ProsCons from "@/components/ProsCons";
import InstallationGuide from "@/components/InstallationGuide";
import Compatibility from "@/components/Compatibility";
import FAQ from "@/components/FAQ";
import AboutSection from "@/components/AboutSection";
import PlaylistGuide from "@/components/PlaylistGuide";
import UpcomingFeatures from "@/components/UpcomingFeatures";

export const dynamic = 'force-static';
export const revalidate = 600; // Revalidate every 10 minutes

export default async function Home() {
  let posts: Post[] = [];
  try {
    posts = await getAllPosts(20);
    console.log('Posts fetched:', posts?.length);
  } catch (err) {
    console.error('Failed to fetch posts:', err);
    // Continue with empty posts to show Hero at least
  }

  let homePage: Page | null = null;

  try {
    homePage = await getPageBySlug('home');
    console.log('Home page fetched:', homePage?.title);
  } catch (e) {
    console.error('Failed to fetch home page:', e);
  }



  return (
    <div className="bg-black min-h-screen pb-20">
      {/* Force hardcoded title to override WP "PicsArt" title */}
      <Hero title="Download Spotify Premium Mod APK For Android" />

      <DownloadSection />

      <Features />

      <ComparisonTable />

      <ProsCons />

      <InstallationGuide />

      <Compatibility />

      {/* Force null content to trigger the default 'Spotifull' layout in AboutSection */}
      <AboutSection content={null} />

      <PlaylistGuide />

      <UpcomingFeatures />

      <FAQ />

      <section className="container mx-auto px-6 max-w-5xl mt-20">

        {/* App Info Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#1ED760] rounded-full"></span>
            Spotify Mod APK Details
          </h2>
          <AppInfoTable />

          <div className="prose prose-invert max-w-none text-zinc-300">
            <p className="text-lg leading-relaxed mb-6">
              **Spotify Premium Mod APK** is the unlocked version of the world&apos;s most popular music streaming app. It gives you access to a massive library of millions of songs, podcasts, and videos from artists all over the globe, without any subscription fees.
            </p>
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 my-8">
              <h3 className="text-xl font-bold text-white mb-4 text-[#1ED760]">Why Download the Mod?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-400">
                <li className="flex items-center gap-2"><div className="size-1.5 bg-[#1ED760] rounded-full" /> No Audio Ads</li>
                <li className="flex items-center gap-2"><div className="size-1.5 bg-[#1ED760] rounded-full" /> Unlimited Skips</li>
                <li className="flex items-center gap-2"><div className="size-1.5 bg-[#1ED760] rounded-full" /> Extreme Audio Quality</li>
                <li className="flex items-center gap-2"><div className="size-1.5 bg-[#1ED760] rounded-full" /> No Root Required</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Blog / Resources Section */}
        <div id="blogs">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-white tracking-tight">Latest Guides & Updates</h2>
            <div className="h-px flex-1 bg-white/10 ml-8" />
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
