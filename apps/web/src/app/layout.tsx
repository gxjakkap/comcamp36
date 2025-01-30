import { CSPostHogProvider } from "@/components/provider/post-hog";
import QueryProvider from "@/components/provider/query";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comcamp36",
  description: "Camp by Computer Engineering Department, KMUTT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TailwindIndicator />
        <QueryProvider>
          <CSPostHogProvider>{children}</CSPostHogProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
