import React, { useEffect, useState } from "react";
import RootLayout from "@/layout";
import { TOTAL_MEMES } from "@/utils/Common";
import { ImageGallery, ImageGalleryProp } from "@/components/ImageGallery";
import { Metadata } from "@/utils/Metadata";

const IMG_PER_PAGE = 10;

interface paginateProp {
  start: number;
  end: number;
}

const metadata: Metadata = {
  url: "https://meme.xuankhoatu.com/gallery/"
}

// TODO sort options
export default function Gallery() {
  const [paginateCursor, setPaginateCursor] = useState<paginateProp>({
    start: TOTAL_MEMES - IMG_PER_PAGE,
    end: TOTAL_MEMES - IMG_PER_PAGE*2,
  });
  const [images, setImages] = useState<ImageGalleryProp[]>(
    genImages({ start: TOTAL_MEMES, end: TOTAL_MEMES - IMG_PER_PAGE })
  );

  function paginateHandler() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (
      scrollTop + clientHeight >= scrollHeight &&
      paginateCursor.start > 0
    ) {
      setPaginateCursor({
        start: paginateCursor.end,
        end: paginateCursor.end - IMG_PER_PAGE,
      });
      setImages([...images, ...genImages(paginateCursor)]);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", paginateHandler);
    return () => window.removeEventListener("scroll", paginateHandler);
  }, [images]);

  return (
    <>
      <React.StrictMode>
        <RootLayout metadata={metadata} >
          <div className="gallery-l-container">
            {images.map((image) => {
              return <ImageGallery key={image.id} {...image} />;
            })}
          </div>
        </RootLayout>
      </React.StrictMode>
    </>
  );
}

function genImages(cursor: paginateProp) {
  let tmp: ImageGalleryProp[] = [];
  for (let i = cursor.start; i > cursor.end && i > 0; i--) {
    tmp.push({
      id: i,
      alt: i.toString(),
    });
  }
  return tmp;
}
