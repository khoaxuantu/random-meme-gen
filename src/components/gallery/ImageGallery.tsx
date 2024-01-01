import { MouseEvent, useState } from "react";
import { CDN_URL } from "@/utils/Common";

export interface ImageGalleryProp {
  id: number;
  alt: string;
}

export function ImageGallery(props: ImageGalleryProp) {
  const [fade, setFade] = useState(false);

  function extendHandler(e: MouseEvent<HTMLDivElement, MouseEvent>) {
    setFade(!fade);
    const cell = (e.target as HTMLElement).parentNode as HTMLElement;
    cell.classList.toggle("gallery-c-cell__extend");
  }

  return (
    <>
      {fade && <div className="background-overlay"></div>}
      <div className="gallery-c-cell">
        <img
          src={setImageSrc(props.id)}
          alt={props.alt}
          title={props.alt}
          onClick={(e: any) => extendHandler(e)}
        />
      </div>
    </>
  );
}

function setImageSrc(id: number) {
  return `${CDN_URL}/${id}.jpg`;
}
