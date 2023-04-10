import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

/** export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black min-h-screen">
      <Component {...pageProps} />;
    </div>
  );
}*/
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    ((page) => {
      return (
        <>
          <div className="mx-4 md:mx-6">
            <Navbar />
            {page}
            <Footer />
          </div>
        </>
      );
    });
  return (
    <div className="bg-gray-900 min-h-screen">
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
