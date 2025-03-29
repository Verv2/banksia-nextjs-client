/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "lightgallery/react" {
  import type { LightGallerySettings } from "lightgallery/lg-settings";

  export interface LightGalleryProps
    extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    > {
    onAfterAppendSubHtml?: (detail: any) => void;
    onAfterAppendSlide?: (detail: any) => void;
    onAfterClose?: (detail: any) => void;
    onAfterOpen?: (detail: any) => void;
    onAfterSlide?: (detail: any) => void;
    onBeforeClose?: (detail: any) => void;
    onBeforeNextSlide?: (detail: any) => void;
    onBeforeOpen?: (detail: any) => void;
    onBeforePrevSlide?: (detail: any) => void;
    onBeforeSlide?: (detail: any) => void;
    onCloseAfter?: (detail: any) => void;
    onContainerResize?: (detail: any) => void;
    onDragEnd?: (detail: any) => void;
    onDragMove?: (detail: any) => void;
    onDragStart?: (detail: any) => void;
    onFlipHorizontalEnd?: (detail: any) => void;
    onFlipVerticalEnd?: (detail: any) => void;
    onInit?: (detail: any) => void;
    onPosterClick?: (detail: any) => void;
    onRotateLeft?: (detail: any) => void;
    onRotateRight?: (detail: any) => void;
    onSlideItemLoad?: (detail: any) => void;
    settings?: LightGallerySettings;
    plugins?: any[];
    children?: React.ReactNode;
    elementClassNames?: string;
  }

  declare const LightGallery: React.FC<LightGalleryProps>;
  export default LightGallery;
}

declare module "lightgallery/plugins/thumbnail" {
  const lgThumbnail: any;
  export default lgThumbnail;
}

declare module "lightgallery/plugins/zoom" {
  const lgZoom: any;
  export default lgZoom;
}

declare module "lightgallery/plugins/fullscreen" {
  const lgFullscreen: any;
  export default lgFullscreen;
}

declare module "lightgallery/lg-settings" {
  export interface LightGallerySettings {
    speed?: number;
    plugins?: any[];
    thumbnail?: boolean;
    animateThumb?: boolean;
    zoomFromOrigin?: boolean;
    allowMediaOverlap?: boolean;
    toggleThumb?: boolean;
    [key: string]: any;
  }
}
