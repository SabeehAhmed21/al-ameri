import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ToasterContainer from "@/components/ui/Toaster";
import { StoreProvider } from "@/redux/StoreProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Al-Ameri",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={manrope.className}
      suppressHydrationWarning={true}
    >
      <body suppressHydrationWarning={true}>
        <StoreProvider>
          <ToasterContainer>{children}</ToasterContainer>
        </StoreProvider>
      </body>
    </html>
  );
}

{
  /* <GalleryMonths monthName={trainer?.month_name} />
<Main
  monthName={trainer?.main_video_name}
  tipName={trainer?.tip_video_name}
/> */
}