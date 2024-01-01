import { TOTAL_MEMES } from "@/utils/Common";
import { BaseGallery, IMG_PER_PAGE, paginateProp } from "./Common";
import { ImageGalleryProp } from "./ImageGallery";

export class DescGallery extends BaseGallery {
  constructor() {
    super();
    console.log("Construct descgallery");
  }

  static initFirstPaginate() {
    return { start: TOTAL_MEMES, end: TOTAL_MEMES - IMG_PER_PAGE };
  }

  static initSecondPaginate() {
    return {
      start: TOTAL_MEMES - IMG_PER_PAGE,
      end: TOTAL_MEMES - IMG_PER_PAGE * 2,
    };
  }

  static nextPaginate(cursor: paginateProp): paginateProp {
    return { start: cursor.end, end: cursor.end - IMG_PER_PAGE };
  }

  static hasMore(cursor: paginateProp): boolean {
    const { scrollTop, scrollHeight, offsetHeight } = document.documentElement;
    return offsetHeight + scrollTop >= scrollHeight - 100 && cursor.start > 0;
  }

  static genImages(cursor: paginateProp): ImageGalleryProp[] {
    let tmp: ImageGalleryProp[] = [];
    for (let i = cursor.start; i > cursor.end && i > 0; i--) {
      tmp.push({
        id: i,
        alt: i.toString(),
      });
    }
    return tmp;
  }
}
