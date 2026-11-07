import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rhyn | Full-Stack Software Engineer (React & Laravel)",
  description:
    "Full-stack engineer building minimal web applications with React and Laravel.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('theme');
                if (saved === 'light') {
                  document.documentElement.classList.remove('dark');
                } else if (saved === 'dark') {
                  document.documentElement.classList.add('dark');
                } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-neutral-900 dark:bg-black dark:text-neutral-100 font-sans selection:bg-neutral-200 selection:text-black dark:selection:bg-neutral-800 dark:selection:text-white transition-colors duration-200">
        {/* Minimal Monochromatic Top Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-900 transition-colors duration-200">
          <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
            <Link
              href="/home"
              className="font-medium text-sm tracking-tight text-neutral-900 hover:text-black dark:text-white dark:hover:text-neutral-300 transition-colors"
            >
              rhyn<span className="text-neutral-400 dark:text-neutral-500">.dev</span>
            </Link>

            <nav className="flex items-center gap-6 text-xs text-neutral-600 dark:text-neutral-400">
              <Link href="/home" className="hover:text-black dark:hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/projects" className="hover:text-black dark:hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="https://github.com/RHYNLDVCE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white text-xs font-mono transition-colors"
              >
                github ↗
              </a>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-grow pt-24 pb-16">{children}</main>

        {/* Minimal Monochromatic Footer */}
        <footer className="border-t border-neutral-200 dark:border-neutral-900 py-8 transition-colors duration-200">
          <div className="max-w-4xl mx-auto px-6 flex items-center justify-between text-xs text-neutral-500 font-mono">
            <span>&copy; {new Date().getFullYear()} Rhyn. React + Laravel.</span>
            <div className="flex items-center gap-4">
              <Link href="/home" className="hover:text-black dark:hover:text-white transition-colors">
                home
              </Link>
              <Link href="/projects" className="hover:text-black dark:hover:text-white transition-colors">
                projects
              </Link>
              <Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors">
                contact
              </Link>
              <Link href="/messages" className="hover:text-black dark:hover:text-white transition-colors text-neutral-400 dark:text-neutral-500">
                inbox
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
