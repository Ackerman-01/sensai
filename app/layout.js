import { Inter } from "next/font/google";
import "./globals.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ThemeProvider } from "@/components/theme-provider";
import { headers } from "next/headers";
import Header from "@/components/header";
import { Toaster } from "sonner";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const inter= Inter({subsets:["latin"]});

export const metadata = {
  title: "Sensai - Your AI Career Coach",
  description: "Personalized Career Guidance, at your fingertips..!",
};

export default function RootLayout({ children }) {
  return (
      <ClerkProvider appearance={{baseTheme: "dark"}} >

    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} `}
        >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            >
            {/*header*/}
            <Header/>
            <main className="min-h-screen">
            {children}

            </main>
            <Toaster richColors/>
            {/*footer*/}
            <footer className="bg-muted/50 py-12" id="footer">
      <div className="container mx-auto px-4 text-center text-gray-200">
        <h2 className="text-2xl font-bold mb-2">About Me</h2>

        <div className="flex justify-center gap-6 mb-2">
          <a
            href="https://github.com/Ackerman-01"      // <-- Replace with your GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/amit-patil-026b83277" // <-- Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-400">
          Made by Amit Patil
        </p>
      </div>
    </footer>
          </ThemeProvider>
      </body>
    </html>
            </ClerkProvider>
  );
}
