import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-navy flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-[120px] font-black text-brand-gold leading-none mb-4">
          404
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-white/60 text-lg mb-10">
          The page you&#39;re looking for doesn&#39;t exist or has been moved.
          Let&#39;s get you back on track.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-brand-gold text-brand-navy font-bold rounded-xl hover:bg-brand-gold-light transition-all"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
