import type { Metadata } from "next";

export const metadata: Metadata = {
     title: "Air - Faça login",
     description: "Login to Air",
};

export default function LoginLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang="en">
               <body className="bg-black">{children}</body>
          </html>
     )
}