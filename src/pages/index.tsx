import React from "react";
import ImageContainer from "@components/ImageContainer";
import RootLayout from "@/layout";

export default function App() {
  return (
    <>
      <React.StrictMode>
        <RootLayout>
          <ImageContainer />
        </RootLayout>
      </React.StrictMode>
    </>
  );
}
