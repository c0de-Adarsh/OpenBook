import Head from 'next/head';
import Link from 'next/link';

export default function ChildSafety() {
  return (
    <>
      <Head>
        <title>Child Sexual Abuse & Exploitation (CSAE) Prevention Policy - Open Book</title>
        <meta name="description" content="Child Safety Standards and CSAE Prevention Policy for Open Book video reels dating app." />
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

        {/* Child Safety Content */}
        <main className="px-4 py-12 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="mb-12 border-4 border-black bg-[#FF6B81] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:p-12">
              <h1 className="mb-4 text-3xl font-black text-white md:text-5xl">
                CHILD SAFETY STANDARDS & CSAE POLICY
              </h1>
              <p className="text-base font-bold text-white md:text-lg">
                Open Book (Developer: Open Book / TwoDigit Innovations)
              </p>
              <p className="text-sm font-semibold text-white/90 mt-1">
                Last updated: August 13, 2026
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-6">
              {/* Policy Statement */}
              <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:p-8">
                <div className="mb-4 inline-block border-4 border-black bg-[#FF6B81] px-4 py-2">
                  <span className="font-black text-white">01</span>
                </div>
                <h2 className="mb-4 text-2xl font-black text-black md:text-3xl">
                  ZERO TOLERANCE POLICY FOR CSAE
                </h2>
                <div className="space-y-3 text-[#2D3748] leading-relaxed font-medium">
                  <p>
                    <strong>Open Book</strong> maintains a strict zero-tolerance policy against <strong>Child Sexual Abuse and Exploitation (CSAE)</strong> and Child Sexual Abuse Material (CSAM).
                  </p>
                  <p>
                    Open Book is exclusively an 18+ adult dating and video reel discovery platform. Minors (individuals under the age of 18) are strictly prohibited from creating accounts, accessing, or using the Open Book app.
                  </p>
                </div>
              </div>

              {/* Prohibited Content & Behaviors */}
              <div className="border-4 border-black bg-[#181E2E] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:p-8">
                <div className="mb-4 inline-block border-4 border-black bg-[#9B51E0] px-4 py-2">
                  <span className="font-black text-white">02</span>
                </div>
                <h2 className="mb-4 text-2xl font-black text-white md:text-3xl">
                  PROHIBITED CONDUCT & CONTENT
                </h2>
                <div className="space-y-3 text-[#A0AEC0] leading-relaxed font-medium">
                  <p>The following activities are strictly forbidden on Open Book:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Uploading, sharing, generating, or requesting any form of Child Sexual Abuse Material (CSAM) or Child Sexual Exploitation and Abuse (CSAE).</li>
                    <li>Grooming, soliciting, exploiting, or endangering minors in any manner.</li>
                    <li>Depicting, encouraging, or promoting child abuse or child sexual exploitation in video reels, profile images, bio text, or in-app messaging.</li>
                  </ul>
                </div>
              </div>

              {/* Enforcement and Law Enforcement Reporting */}
              <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:p-8">
                <div className="mb-4 inline-block border-4 border-black bg-[#FF6B81] px-4 py-2">
                  <span className="font-black text-white">03</span>
                </div>
                <h2 className="mb-4 text-2xl font-black text-black md:text-3xl">
                  ENFORCEMENT & REPORTING TO AUTHORITIES
                </h2>
                <div className="space-y-3 text-[#2D3748] leading-relaxed font-medium">
                  <p>
                    Any account found uploading or attempting to transmit child abuse material or engage in CSAE will face immediate action:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Permanent account termination and hardware/IP banning.</li>
                    <li>Immediate removal of all content from our platform.</li>
                    <li>Mandatory reporting of the incident, user details, and associated content to the <strong>National Center for Missing & Exploited Children (NCMEC)</strong> and relevant local/international law enforcement agencies.</li>
                  </ul>
                </div>
              </div>

              {/* In-App Reporting & Dedicated Child Safety Contact */}
              <div className="border-4 border-black bg-[#181E2E] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:p-8">
                <div className="mb-4 inline-block border-4 border-black bg-[#9B51E0] px-4 py-2">
                  <span className="font-black text-white">04</span>
                </div>
                <h2 className="mb-4 text-2xl font-black text-white md:text-3xl">
                  DEDICATED CHILD SAFETY CONTACT & REPORTING
                </h2>
                <div className="space-y-3 text-[#A0AEC0] leading-relaxed font-medium">
                  <p>
                    Open Book provides in-app Report buttons on every video reel, profile, and chat message. Users can immediately report suspicious behavior.
                  </p>
                  <p>
                    We also maintain a dedicated Child Safety Officer and Response Team to review child safety concerns with urgent priority:
                  </p>
                  <div className="mt-4 border-2 border-black bg-[#0B0F17] p-4 text-white">
                    <p className="font-bold text-[#FF6B81]">Child Safety Response Officer & Team:</p>
                    <p>📧 Email: <a href="mailto:fitandmeet.app@gmail.com" className="underline text-white">fitandmeet.app@gmail.com</a></p>
                    <p>App / Developer: <strong>Open Book (com.openbook.datingapp)</strong></p>
                    <p>Response Time: Reports involving child safety are investigated and escalated within 24 hours.</p>
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
                <Link href="/child-safety" className="transition-colors hover:text-white">CHILD SAFETY STANDARDS</Link>
                <Link href="/privacy" className="transition-colors hover:text-white">PRIVACY POLICY</Link>
                <a href="#" className="transition-colors hover:text-white">TERMS OF SERVICE</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
