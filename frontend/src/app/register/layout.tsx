export default function RegisterLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <div className="bg-black">
               {children}
          </div>
     )
}