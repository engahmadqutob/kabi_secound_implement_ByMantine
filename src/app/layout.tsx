import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "./global.css";
import { MantineProvider } from "@mantine/core";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],  
});

export const metadata: Metadata = {
  title: "Hiring Dashboard",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
