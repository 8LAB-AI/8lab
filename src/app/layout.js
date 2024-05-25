import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import local from 'next/font/local';
import Header from "@/components/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "8 LAB",
  description: "IN THE ERA OF AI, WE ARE STILL ABOUT THE PEOPLE.",
  icons: {
    icon: '/8lab.png', // /public path
  },
  // viewport: 'width=device-width, initial-scale=1, minimum-scale=1',
};

const andalemo = local({
  src: [
    {
      path: '../../public/fonts/ANDALEMO.otf',
      weight: '400',
    },
  ],
  variable: '--font-andalemo',
});

const kl = local({
  src: [
    {
      path: '../../public/fonts/KohinoorLatin-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/KohinoorLatin-BoldItalic.otf',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../../public/fonts/KohinoorLatin-Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/KohinoorLatin-LightItalic.otf',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../../public/fonts/KohinoorLatin-Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/KohinoorLatin-MediumItalic.otf',
      weight: '500',
      style: 'italic'
    },
    
  ],
  variable: '--font-kl',
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <meta name="viewport" content="minimum-scale=1"/>
      </Head> */}
      <body className={`${andalemo.variable} ${kl.variable} ${inter.className}`}>
        <Providers>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
