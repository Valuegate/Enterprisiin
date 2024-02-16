// import { Theme } from '@radix-ui/themes'
import "./globals.css";
import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";

import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  MantineColorsTuple,
  MantineProvider,
  createTheme,
} from "@mantine/core";

const public_sans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Enterprisin",
    default: "Enterprising",
  },
  description: "The best platform for discovering new businesses",
};

const mantineColors: MantineColorsTuple = [
  "#eef5fc",
  "#dbe6f2",
  "#b3cce6",
  "#88b1dc",
  "#6599d3",
  "#508ace",
  "#4484cd",
  "#3671b6",
  "#2d65a3",
  "#1d5791",
];

const theme = createTheme({
  colors: { mantineColors },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className={public_sans.className}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
