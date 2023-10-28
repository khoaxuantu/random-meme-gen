import React from "react";
import ImageContainer from "@components/ImageContainer";
import RootLayout from "@/layout";
import { Metadata } from "@/utils/Metadata";
import Navbar from "@/components/Navbar";

const metadata: Metadata = {
  title: "Lmao Tus?",
  metaTitle: "Lmao Tuslipid???",
  description: `A random meme picker created by Xuan Khoa Tu Nguyen.
  Pick a meme a day for a happier life ~`,
  author: "Xuan Khoa Tu Nguyen"
}

export default function App() {
  return (
    <>
      <React.StrictMode>
        <RootLayout metadata={metadata}>
          <Navbar />
          <ImageContainer />
        </RootLayout>
      </React.StrictMode>
    </>
  );
}
