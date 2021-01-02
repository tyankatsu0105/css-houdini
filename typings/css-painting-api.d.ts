// see: https://drafts.css-houdini.org/css-paint-api-1/#idl-index

type PaintRenderingContext2D = Omit<
  CanvasRenderingContext2D,
  | keyof CanvasImageData
  | keyof CanvasUserInterface
  | keyof CanvasText
  | keyof CanvasTextDrawingStyles
>;
type PaintSize = {
  readonly height: number;
  readonly width: number;
};

/**
 * see: https://drafts.css-houdini.org/css-typed-om-1/#the-stylepropertymap
 */
type StylePropertyMap = {
  get(property: string): any;
  getAll(property: string): ReturnType<StylePropertyMap['get']>[];
  has(property: string): boolean;
  size: number;
};

type PaintCtorInputProperties = string[];
type PaintCtorPaint = (
  ctx: PaintRenderingContext2D,
  geom: PaintSize,
  properties: StylePropertyMap
) => void;

interface PaintCtor {
  inputProperties?: PaintCtorInputProperties;
  paint?: PaintCtorPaint;
}

declare function registerPaint(name: string, paintCtor: PaintCtor): undefined;
