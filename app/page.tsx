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
    <div className="wordpress-page-wrapper">
      {homePage?.content ? (
        <div className="wordpress-content w-full">
          <div dangerouslySetInnerHTML={{ __html: homePage.content }} />
        </div>
      ) : (
        <div className="container mx-auto px-6 py-20 text-center text-white">
          <h1 className="text-3xl font-bold mb-4">{homePage?.title || "Loading..."}</h1>
          <p>Content is empty. Please add content in WordPress.</p>
        </div>
      )}

      {/* Keep the Latest Guides section as it's dynamic blog posts, typically below main page content */}
      <section className="container mx-auto px-6 max-w-5xl py-20">
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
