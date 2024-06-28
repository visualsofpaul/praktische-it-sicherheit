import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@app/globals.css";

// Auth0 imports
import { UserProvider } from "@auth0/nextjs-auth0/client";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop",
  description: "Der Shop, der von allen Nutzer:innen genutzt werden kann",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <UserProvider>
        <body className={outfit.className}>{children}</body>
      </UserProvider>
    </html>
  );
}
