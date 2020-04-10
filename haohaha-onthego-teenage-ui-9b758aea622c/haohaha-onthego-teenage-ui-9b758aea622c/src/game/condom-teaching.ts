export interface Slide {
  id: string;
  bg: string;
  btn: {
    shap?: Shap;
    href: string;
  }[];
}

export interface Shap {
  w: number;
  h: number;
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}
