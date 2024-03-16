import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Settings from "./_components/settings";
import ModalProvider from "./_components/providers/modal-provider";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://phasmo.luizf.dev"),
  title: "Spirit Box Web",
  description: "Identify Phasmophobia ghosts here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning /* For instant theme application */
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/initial-theme-applier.js"></script>
      </head>
      <body
        className={`${quicksand.className} flex h-dvh flex-col gap-8 bg-stone-200 p-4 text-stone-700 transition-colors sm:h-auto dark:bg-stone-900 dark:text-stone-100`}
      >
        <ModalProvider>
          <div className="w-fit-content flex flex-row-reverse">
            <Settings></Settings>
          </div>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}