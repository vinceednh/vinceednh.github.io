import "./globals.css";
import { Poppins } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

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
      <body className={poppins.className}>
        <ReactQueryClientProvider>
          <Navigation />
          {children}
          <Footer />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
