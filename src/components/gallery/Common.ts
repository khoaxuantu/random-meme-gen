import { ImageGalleryProp } from "./ImageGallery";

export const IMG_PER_PAGE = 10;

export interface paginateProp {
  start: number;
  end: number;
};

export abstract class BaseGallery {
  static initFirstPaginate(): paginateProp {
    throw new Error("initFirstPaginate has not been implemented");
  }
  static initSecondPaginate(): paginateProp {
    throw new Error("initSecondPaginate has not been implemented");
  }
  static nextPaginate(cursor: paginateProp): paginateProp {
    throw new Error("nextPaginate has not been implemented");
  }
  static hasMore(cursor: paginateProp): boolean { return false; }
  static genImages(cursor: paginateProp): ImageGalleryProp[] { return []; }
}
