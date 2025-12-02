import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "./global.css";
import { MantineProvider } from "@mantine/core";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose what you need
});
 
 
export const metadata: Metadata = {
  title: "card app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
