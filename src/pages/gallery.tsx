import React, { useEffect, useState } from "react";
import RootLayout from "@/layout";
import {
  ImageGallery,
  ImageGalleryProp,
} from "@/components/gallery/ImageGallery";
import { Metadata } from "@/utils/Metadata";
import { DescGallery } from "@/components/gallery/DescGallery";
import { paginateProp } from "@/components/gallery/Common";
import AscGallery from "@/components/gallery/AscGallery";
import SortButton from "@/components/gallery/ButtonSort";
import GoTopButton from "@/components/gallery/ButtonGoTop";
import { ScrollToTop } from "@/utils/ScrollToTop";

const metadata: Metadata = {
  url: "https://meme.xuankhoatu.com/gallery/",
};

// TODO sort options (asc/desc)
export default function Gallery() {
  const [galleryType, setGalleryType] = useState<"desc" | "asc">("desc");
  const gallery = selectGallery(galleryType);

  const [paginateCursor, setPaginateCursor] = useState<paginateProp>(
    gallery.initSecondPaginate()
  );
  const [images, setImages] = useState<ImageGalleryProp[]>(
    gallery.genImages(gallery.initFirstPaginate())
  );

  function paginateHandler() {
    if (gallery.hasMore(paginateCursor)) {
      setPaginateCursor(gallery.nextPaginate(paginateCursor));
      setImages([...images, ...gallery.genImages(paginateCursor)]);
    }
  }

  function galleryTypeHandler() {
    if (galleryType === "desc") setGalleryType("asc")
    else setGalleryType("desc");
    ScrollToTop();
  }

  useEffect(() => {
    window.addEventListener("scroll", paginateHandler);
    return () => window.removeEventListener("scroll", paginateHandler);
  }, [images]);

  useEffect(() => {
    const gallery = selectGallery(galleryType);
    setPaginateCursor(gallery.initSecondPaginate());
    setImages(gallery.genImages(gallery.initFirstPaginate()));
  }, [galleryType])

  return (
    <>
      <React.StrictMode>
        <RootLayout metadata={metadata}>
          <>
            <div className="gallery-l-container">
              {images.map((image) => {
                return <ImageGallery key={image.id} {...image} />;
              })}
            </div>
            <div className="gallery-l-button">
              <SortButton
                type={galleryType}
                galleryTypeHandler={galleryTypeHandler}
              />
              <GoTopButton />
            </div>
          </>
        </RootLayout>
      </React.StrictMode>
    </>
  );
}

function selectGallery(type: "asc" | "desc") {
  switch (type) {
    case "asc":
      return AscGallery;
    case "desc":
      return DescGallery;

    default:
      throw new Error(`Invalide gallery type ${type}`);
  }
}
