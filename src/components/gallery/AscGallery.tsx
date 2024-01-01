import { TOTAL_MEMES } from "@/utils/Common";
import { BaseGallery, IMG_PER_PAGE, paginateProp } from "./Common";
import { ImageGalleryProp } from "./ImageGallery";

export default class AscGallery extends BaseGallery {
  static initFirstPaginate(): paginateProp {
    return { start: 1, end: IMG_PER_PAGE };
  }

  static initSecondPaginate(): paginateProp {
    return { start: IMG_PER_PAGE, end: IMG_PER_PAGE * 2 };
  }

  static nextPaginate(cursor: paginateProp): paginateProp {
    return { start: cursor.end, end: cursor.end + IMG_PER_PAGE };
  }

  static hasMore(cursor: paginateProp): boolean {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    return (
      scrollTop + clientHeight >= scrollHeight - 100 && cursor.start <= TOTAL_MEMES
    );
  }

  static genImages(cursor: paginateProp): ImageGalleryProp[] {
    let tmp: ImageGalleryProp[] = [];
    for (let i = cursor.start; i < cursor.end && i <= TOTAL_MEMES; i++) {
      tmp.push({
        id: i,
        alt: i.toString(),
      });
    }
    return tmp;
  }
}
