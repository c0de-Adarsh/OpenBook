import Head from 'next/head';
import Link from 'next/link';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Open Book App</title>
        <meta name="description" content="Privacy policy and data protection guidelines for Open Book video reels dating app." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-[#0B0F17] text-white">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 border-b-4 border-black bg-[#0F1420] px-4 py-4 md:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <Link href="/" className="flex items-center gap-3 text-xl font-black tracking-tight text-white transition-colors hover:text-[#FF6B81] md:text-2xl">
              <span className="flex h-10 w-10 items-center justify-center border-2 border-black bg-[#FF6B81] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                📖
              </span>
              OPEN BOOK
            </Link>
            <Link 
              href="/"
              className="border-4 border-black bg-[#FF6B81] px-6 py-2 font-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              BACK TO HOME
            </Link>
          </div>
        </nav>

        {/* Privacy Content */}
        <main className="px-4 py-12 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="mb-12 border-4 border-black bg-[#FF6B81] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:p-12">
              <h1 className="mb-4 text-4xl font-black text-white md:text-6xl">
                PRIVACY POLICY
              </h1>
              <p className="text-lg font-bold text-white">
                Last updated: April 17, 2026
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-6">
              {/* Section 1 */}
              <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:p-8">
                <div className="mb-4 inline-block border-4 border-black bg-[#FF6B81] px-4 py-2">
                  <span className="font-black text-white">01</span>
                </div>
                <h2 className="mb-4 text-2xl font-black text-black md:text-3xl">
                  INFORMATION WE COLLECT
                </h2>
                <div className="space-y-3 text-[#2D3748]">
                  <p className="leading-relaxed">
                    We collect information you provide directly to us when you create an Open Book account, 
                    upload video reels, set preferences, or chat with matches. This includes:
                  </p>
                  <ul className="ml-6 list-disc space-y-2 font-medium">
                    <li>Name, email address, and phone number</li>
                    <li>Uploaded short video reels and profile images</li>
                    <li>Selected interests (e.g. Coffee, Traveling, Music, Photography, Bikes)</li>
                    <li>In-app messages and match interactions</li>
                    <li>Location data (with your explicit permission for distance filtering)</li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div className="border-4 border-black bg-[#181E2E] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:p-8">
                <div className="mb-4 inline-block border-4 border-black bg-[#9B51E0] px-4 py-2">
                  <span className="font-black text-white">02</span>
                </div>
                <h2 className="mb-4 text-2xl font-black text-white md:text-3xl">
                  HOW WE USE YOUR INFORMATION
                </h2>
                <div className="space-y-3 text-[#A0AEC0]">
                  <p className="leading-relaxed">
                    We use the collected information to:
                  </p>
                  <ul className="ml-6 list-disc space-y-2 font-medium">
                    <li>Deliver video reel discovery and interest-based matching</li>
                    <li>Facilitate real-time messaging between mutual matches</li>
                    <li>Filter nearby profiles based on your age and distance settings</li>
                    <li>Protect user safety via automated moderation, block, and report systems</li>
                    <li>Optimize app performance and user experience</li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:p-8">
                <div className="mb-4 inline-block border-4 border-black bg-[#FF6B81] px-4 py-2">
                  <span className="font-black text-white">03</span>
                </div>
                <h2 className="mb-4 text-2xl font-black text-black md:text-3xl">
                  INFORMATION SHARING & VISIBILITY
                </h2>
                <div className="space-y-3 text-[#2D3748]">
                  <p className="leading-relaxed">
                    We do not sell your personal data. Your video reels and public profile details 
                    are visible to other Open Book users in the discovery feed. We share information:
                  </p>
                  <ul className="ml-6 list-disc space-y-2 font-medium">
                    <li>With mutual matches in the real-time chat room</li>
                    <li>With cloud hosting and infrastructure partners</li>
                    <li>When required by law or to enforce user safety and community guidelines</li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div className="border-4 border-black bg-[#181E2E] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:p-8">
                <div className="mb-4 inline-block border-4 border-black bg-[#9B51E0] px-4 py-2">
                  <span className="font-black text-white">04</span>
                </div>
                <h2 className="mb-4 text-2xl font-black text-white md:text-3xl">
                  USER SAFETY, BLOCK & REPORT
                </h2>
                <div className="space-y-3 text-[#A0AEC0]">
                  <p className="leading-relaxed">
                    Open Book provides built-in safety tools in the app:
                  </p>
                  <ul className="ml-6 list-disc space-y-2 font-medium">
                    <li>You can block any user at any time from their profile or chat screen.</li>
                    <li>You can report inappropriate video reels or messages directly to our moderation team.</li>
                    <li>Blocked users can no longer see your reels or send you messages.</li>
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:p-8">
                <div className="mb-4 inline-block border-4 border-black bg-[#FF6B81] px-4 py-2">
                  <span className="font-black text-white">05</span>
                </div>
                <h2 className="mb-4 text-2xl font-black text-black md:text-3xl">
                  YOUR RIGHTS & CHOICES
                </h2>
                <div className="space-y-3 text-[#2D3748]">
                  <p className="leading-relaxed">
                    You have the right to:
                  </p>
                  <ul className="ml-6 list-disc space-y-2 font-medium">
                    <li>Update or delete your video reels and profile information</li>
                    <li>Delete your Open Book account completely</li>
                    <li>Manage location permissions and push notifications</li>
                    <li>Request a copy of your stored personal data</li>
                  </ul>
                </div>
              </div>

              {/* Section 6 - Account Deletion */}
              <div className="border-4 border-black bg-[#181E2E] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:p-8">
                <div className="mb-4 inline-block border-4 border-black bg-[#9B51E0] px-4 py-2">
                  <span className="font-black text-white">06</span>
                </div>
                <h2 className="mb-4 text-2xl font-black text-white md:text-3xl">
                  ACCOUNT DELETION & DATA RETENTION
                </h2>
                <div className="space-y-3 text-[#A0AEC0]">
                  <p className="leading-relaxed">
                    Users can delete their account directly within the Open Book app Settings screen.
                  </p>
                  <p className="font-bold text-white">Upon account deletion:</p>
                  <ul className="ml-6 list-disc space-y-2 font-medium">
                    <li>Your video reels, photos, matches, and chat history are permanently deleted from active servers within 30 days.</li>
                    <li>Certain audit data may be temporarily retained for legal compliance or fraud prevention.</li>
                  </ul>
                </div>
              </div>

              {/* Section 7 - Child Safety & CSAE Policy */}
              <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:p-8">
                <div className="mb-4 inline-block border-4 border-black bg-[#FF6B81] px-4 py-2">
                  <span className="font-black text-white">07</span>
                </div>
                <h2 className="mb-4 text-2xl font-black text-black md:text-3xl">
                  CHILD SAFETY STANDARDS & CSAE PROHIBITION
                </h2>
                <div className="space-y-3 text-[#2D3748] leading-relaxed font-medium">
                  <p>
                    Open Book strictly prohibits <strong>Child Sexual Abuse and Exploitation (CSAE)</strong> and Child Sexual Abuse Material (CSAM).
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Strictly 18+ adult platform; minors are barred from registration.</li>
                    <li>Zero tolerance for grooming, exploitation, or sharing illegal abuse media.</li>
                    <li>Violations result in instant ban, content deletion, and mandatory NCMEC/law enforcement reporting.</li>
                    <li>Dedicated Child Safety Team: <a href="mailto:2digitinnovations@gmail.com" className="underline font-bold text-[#FF6B81]">2digitinnovations@gmail.com</a>.</li>
                    <li>Full policy: <Link href="/child-safety" className="font-bold underline text-[#9B51E0]">Read our Child Safety Standards</Link>.</li>
                  </ul>
                </div>
              </div>

              {/* Contact Section */}
              <div className="border-4 border-black bg-[#FF6B81] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:p-8">
                <h2 className="mb-4 text-2xl font-black text-white md:text-3xl">
                  CONTACT US
                </h2>
                <div className="space-y-3 text-white">
                  <p className="leading-relaxed font-medium">
                    If you have questions regarding this Privacy Policy or Open Book data practices, contact us at:
                  </p>
                  <div className="space-y-2 font-bold">
                    <p>📧 Email: 2digitinnovations@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-12 text-center">
              <Link 
                href="/"
                className="inline-block border-4 border-black bg-white px-8 py-4 font-black text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                ← BACK TO HOME
              </Link>
            </div>
          </div>
        </main>

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
