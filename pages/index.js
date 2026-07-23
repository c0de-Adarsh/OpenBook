import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <Head>
        <title>Open Book - Video Reels Dating App | Real Moments, Real Connections</title>
        <meta name="description" content="Open Book is the ultimate video reels dating app. Show your authentic self, watch video reels, match by interests, and chat naturally." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-[#0B0F17] text-white">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 border-b-4 border-black bg-[#0F1420] px-4 py-4 md:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div className="flex items-center gap-3 text-xl font-black tracking-tight text-white md:text-2xl">
              <span className="flex h-10 w-10 items-center justify-center border-2 border-black bg-[#FF6B81] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                📖
              </span>
              OPEN BOOK
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden items-center gap-8 md:flex">
              <a href="#hero" onClick={(e) => smoothScroll(e, '#hero')} className="font-bold text-white transition-colors hover:text-[#FF6B81]">ABOUT</a>
              <a href="#features" onClick={(e) => smoothScroll(e, '#features')} className="font-bold text-white transition-colors hover:text-[#FF6B81]">REELS & FEATURES</a>
              <a href="#how-it-works" onClick={(e) => smoothScroll(e, '#how-it-works')} className="font-bold text-white transition-colors hover:text-[#FF6B81]">HOW IT WORKS</a>
              <a href="#profiles" onClick={(e) => smoothScroll(e, '#profiles')} className="font-bold text-white transition-colors hover:text-[#FF6B81]">DISCOVER</a>
            </div>

            <div className="flex items-center gap-4">
              <button className="hidden border-4 border-black bg-[#FF6B81] px-6 py-2 font-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:block">
                GET APP NOW
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="border-4 border-black bg-[#FF6B81] p-2 text-white md:hidden"
                aria-label="Toggle Navigation Menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="mt-4 border-t-4 border-black pt-4 md:hidden">
              <div className="flex flex-col gap-4">
                <a 
                  href="#hero" 
                  onClick={(e) => smoothScroll(e, '#hero')}
                  className="border-4 border-black bg-[#181E2E] px-4 py-3 font-bold text-white transition-colors hover:bg-[#FF6B81]"
                >
                  ABOUT
                </a>
                <a 
                  href="#features" 
                  onClick={(e) => smoothScroll(e, '#features')}
                  className="border-4 border-black bg-[#181E2E] px-4 py-3 font-bold text-white transition-colors hover:bg-[#FF6B81]"
                >
                  REELS & FEATURES
                </a>
                <a 
                  href="#how-it-works" 
                  onClick={(e) => smoothScroll(e, '#how-it-works')}
                  className="border-4 border-black bg-[#181E2E] px-4 py-3 font-bold text-white transition-colors hover:bg-[#FF6B81]"
                >
                  HOW IT WORKS
                </a>
                <a 
                  href="#profiles" 
                  onClick={(e) => smoothScroll(e, '#profiles')}
                  className="border-4 border-black bg-[#181E2E] px-4 py-3 font-bold text-white transition-colors hover:bg-[#FF6B81]"
                >
                  DISCOVER
                </a>
                <button className="border-4 border-black bg-[#FF6B81] px-4 py-3 font-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  GET APP NOW
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="hero" className="px-4 py-12 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center">
                <div className="mb-4 inline-flex w-max items-center gap-2 border-2 border-black bg-[#9B51E0] px-4 py-1.5 text-xs font-black text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <span>🎬 AUTHENTIC VIDEO REELS DATING</span>
                </div>
                <h1 className="mb-6 text-4xl font-black leading-tight text-white md:text-6xl">
                  WHERE REAL MOMENTS TURN INTO <span className="text-[#FF6B81]">REAL CONNECTIONS.</span>
                </h1>
                <p className="mb-8 text-base leading-relaxed text-[#A0AEC0] md:text-lg">
                  Feel the connection, not the pressure. Open Book replaces flat photos 
                  with short video reels, allowing you to showcase your real voice, smile, 
                  and personality to people who truly match your vibe.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <button className="border-4 border-black bg-[#FF6B81] px-8 py-4 font-black text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    DOWNLOAD OPEN BOOK
                  </button>
                  <button className="border-4 border-white bg-transparent px-8 py-4 font-black text-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
                    HOW IT WORKS
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="relative border-4 border-black bg-[#181E2E] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <img 
                    src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop&q=80" 
                    alt="Happy Couple - Open Book Video Reels Dating" 
                    className="h-[420px] w-full object-cover md:h-[500px]"
                  />
                  <div className="absolute bottom-4 left-4 right-4 border-4 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <p className="font-black text-black">❤️ REAL COUPLES, REAL CONNECTIONS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-[#070A10] px-4 py-12 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-3xl font-black text-white md:text-5xl">
              WHY CHOOSE <span className="text-[#FF6B81]">OPEN BOOK?</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-4 inline-block border-4 border-black bg-[#FF6B81] p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-black text-black">VIDEO REELS FEED</h3>
                <p className="text-[#2D3748]">
                  Skip misleading photos. Watch authentic short video reels to hear genuine voices, 
                  see real laughter, and experience true personality before swiping.
                </p>
              </div>
              <div className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-4 inline-block border-4 border-black bg-[#9B51E0] p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-black text-black">INTEREST MATCHING</h3>
                <p className="text-[#2D3748]">
                  Filter profiles by what you genuinely love—from Coffee, Traveling, Music, 
                  and Photography to Bikes, Cars, and Dance.
                </p>
              </div>
              <div className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-4 inline-block border-4 border-black bg-[#FF6B81] p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-black text-black">REAL-TIME CHAT & SAFETY</h3>
                <p className="text-[#2D3748]">
                  Start instant conversations with your mutual matches. Enjoy robust safety controls, 
                  verified profiles, block & report features for peace of mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="px-4 py-12 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex items-center justify-between">
              <h2 className="text-3xl font-black text-white md:text-5xl">
                HOW OPEN BOOK<br />WORKS
              </h2>
              <div className="hidden text-right text-sm font-bold text-[#9B51E0] md:block">
                SIMPLE. FUN. AUTHENTIC.
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="border-4 border-black bg-[#181E2E] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-4 inline-block border-4 border-black bg-[#FF6B81] px-6 py-3 font-black text-white">
                  01
                </div>
                <h3 className="mb-3 text-xl font-black text-white">POST YOUR REEL</h3>
                <p className="text-[#A0AEC0]">
                  Record short video clips showcasing your passions, everyday moments, 
                  hobbies, and smile. Let your true personality shine!
                </p>
              </div>
              <div className="border-4 border-black bg-[#181E2E] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-4 inline-block border-4 border-black bg-[#9B51E0] px-6 py-3 font-black text-white">
                  02
                </div>
                <h3 className="mb-3 text-xl font-black text-white">SWIPE & WATCH</h3>
                <p className="text-[#A0AEC0]">
                  Scroll through an interactive reel feed of singles near you. Filter by 
                  age, distance, and interests like Coffee, Music & Travel.
                </p>
              </div>
              <div className="border-4 border-black bg-[#181E2E] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-4 inline-block border-4 border-black bg-[#FF6B81] px-6 py-3 font-black text-white">
                  03
                </div>
                <h3 className="mb-3 text-xl font-black text-white">MATCH & CONNECT</h3>
                <p className="text-[#A0AEC0]">
                  Send likes when you feel a spark. When you match mutually, start chatting 
                  instantly and turn real moments into real connections.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Profile Reel Showcase */}
        <section id="profiles" className="bg-[#070A10] px-4 py-12 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-3xl font-black text-white md:text-5xl">
              MATCH STORIES ON <span className="bg-[#FF6B81] px-2 text-white">OPEN BOOK.</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {/* Couple Card 1 */}
              <div className="border-4 border-black bg-[#181E2E] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                <div className="border-b-4 border-black relative">
                  <div className="absolute top-4 left-4 z-10 border-2 border-black bg-[#9B51E0] px-3 py-1 text-xs font-bold text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    💕 MATCHED ON OPEN BOOK
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&auto=format&fit=crop&q=80" 
                    alt="Sophia & Liam couple match story" 
                    className="h-72 w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-2xl font-black text-white">SOPHIA & LIAM</h3>
                    <span className="border-2 border-black bg-[#FF6B81] px-3 py-1 text-xs font-bold text-white">
                      VERIFIED MATCH
                    </span>
                  </div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="border-2 border-black bg-white px-3 py-1 text-xs font-black text-black">COFFEE</span>
                    <span className="border-2 border-black bg-white px-3 py-1 text-xs font-black text-black">TRAVELING</span>
                    <span className="border-2 border-black bg-white px-3 py-1 text-xs font-black text-black">PHOTOGRAPHY</span>
                  </div>
                  <p className="mb-6 text-sm text-[#A0AEC0]">
                    "We matched after I commented on Sophia's travel video reel about Italian espresso. Now we're planning our second trip together!"
                  </p>
                  <button className="w-full border-4 border-black bg-[#FF6B81] py-3 font-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    ❤️ FIND YOUR MATCH
                  </button>
                </div>
              </div>

              {/* Couple Card 2 */}
              <div className="border-4 border-black bg-[#181E2E] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                <div className="border-b-4 border-black relative">
                  <div className="absolute top-4 left-4 z-10 border-2 border-black bg-[#9B51E0] px-3 py-1 text-xs font-bold text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    🎵 MATCHED ON OPEN BOOK
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=80" 
                    alt="Maya & Ethan couple match story" 
                    className="h-72 w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-2xl font-black text-white">MAYA & ETHAN</h3>
                    <span className="border-2 border-black bg-[#FF6B81] px-3 py-1 text-xs font-bold text-white">
                      VERIFIED MATCH
                    </span>
                  </div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="border-2 border-black bg-white px-3 py-1 text-xs font-black text-black">MUSIC</span>
                    <span className="border-2 border-black bg-white px-3 py-1 text-xs font-black text-black">DANCE</span>
                    <span className="border-2 border-black bg-white px-3 py-1 text-xs font-black text-black">BIKES</span>
                  </div>
                  <p className="mb-6 text-sm text-[#A0AEC0]">
                    "Ethan's guitar reel caught my attention immediately. Watching real video reels made it so easy to start talking naturally."
                  </p>
                  <button className="w-full border-4 border-black bg-[#FF6B81] py-3 font-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    💬 START WATCHING REELS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-4 border-black bg-[#0F1420] px-4 py-8 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-2 text-xl font-black text-white">
                <span className="flex h-8 w-8 items-center justify-center border-2 border-black bg-[#FF6B81] text-sm text-white">📖</span>
                OPEN BOOK
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-[#A0AEC0]">
                <a href="#" className="transition-colors hover:text-white">TERMS OF SERVICE</a>
                <Link href="/privacy" className="transition-colors hover:text-white">PRIVACY POLICY</Link>
                <a href="#" className="transition-colors hover:text-white">MOBILE APP</a>
                <a href="#" className="transition-colors hover:text-white">CONTACT</a>
              </div>
              <div className="flex gap-4">
                <button className="border-4 border-black bg-[#FF6B81] p-3 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  📱
                </button>
                <button className="border-4 border-black bg-[#FF6B81] p-3 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  💬
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
