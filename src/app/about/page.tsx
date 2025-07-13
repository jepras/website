import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            about me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Builder exploring new technical avenues
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-base prose-invert prose-headings:text-white prose-p:text-gray-400 prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-emerald-400 prose-code:bg-gray-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800 max-w-none">
            <p>
              I'm a software engineer with a unique journey that spans from corporate tech to startup 
              entrepreneurship. After several years at Microsoft, I ventured into the startup world as 
              a founder, gaining valuable insights into both enterprise and startup environments.
            </p>

            <h2>background</h2>
            <p>
              My experience at Microsoft gave me deep insights into building scalable software systems 
              and working with large-scale distributed systems. As a founder, I learned the art of 
              rapid prototyping, product development, and the challenges of building a business from 
              the ground up.
            </p>

            <h2>current focus</h2>
            <p>
              Currently, I'm exploring the intersection of AI, machine learning, and software development. 
              I'm particularly interested in how AI agents and data science can transform the way we 
              build and interact with software. You can follow my journey through my 
              <Link href="/blog"> blog</Link>, where I share insights about AI, machine learning, 
              and modern software development.
            </p>

            <h2>connect</h2>
            <p>
              I'm always interested in connecting with fellow developers and entrepreneurs. Feel free to 
              reach out on <a href="https://linkedin.com/in/jepras" target="_blank" rel="noopener noreferrer">LinkedIn</a> or 
              through <a href="https://github.com/jepras" target="_blank" rel="noopener noreferrer">GitHub</a>. 
              I'm particularly interested in discussing AI, machine learning, and the future of software development.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 