import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    ((page) => {
      return (
        <>
          <div className="mx-4 md:mx-6 flex flex-col flex-start min-h-screen">
            <Navbar />
            {page}
            <Footer />
          </div>
        </>
      );
    });
  return (
    <div className="bg-gray-900">{getLayout(<Component {...pageProps} />)}</div>
  );
}
