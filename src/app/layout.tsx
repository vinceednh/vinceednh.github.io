import "./globals.css";
import { Poppins } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Banner from "@/components/banner";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata = {
  title: "vinceednh | Portfolio",
  description: "Designed and developed by Vincent Dinh",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex min-h-screen flex-col`}>
        <ReactQueryClientProvider>
          <Navigation />
          <main className="relative z-0 flex-grow">
            <Banner />
            {children}
          </main>
          <Footer />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
