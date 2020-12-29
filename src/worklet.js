if (typeof registerPaint !== "undefined") {
/**
 * @typedef {CanvasCompositing & CanvasDrawImage & CanvasDrawPath & CanvasFillStrokeStyles & CanvasFilters & CanvasImageSmoothing & CanvasPath & CanvasPathDrawingStyles & CanvasRect & CanvasShadowStyles & CanvasState & CanvasTransform} PaintRenderingContext2D
 */
/**
 * @typedef PaintSize
 * @property {number} width
 * @property {number} height
 */
/**
 * @typedef {{[key: string]: any}} StylePropertyMap
 */

  class PaintCtor {

    /**
     * @returns {string[]}
     */
      static get inputProperties() {
        return [
          "--houdini-ripple-x",
          "--houdini-ripple-y",
          "--houdini-ripple-color",
          "--houdini-ripple-tick",
          "--houdini-ripple-speed"
        ];
      }

       /**
        * SEE: https://drafts.css-houdini.org/css-paint-api-1/#idl-index
        * @param {PaintRenderingContext2D} ctx 
        * @param {PaintSize} geom 
        * @param {StylePropertyMap} properties 
        */
      paint(ctx, geom, properties) {  
        const houdiniRippleX = parseFloat(properties.get('--houdini-ripple-x').toString());
        const houdiniRippleY = parseFloat(properties.get('--houdini-ripple-y').toString());
        const houdiniRippleColor = properties.get('--houdini-ripple-color').toString();
        const houdiniRippleSpeed = parseFloat(properties.get('--houdini-ripple-speed').toString());
        
        const maxTick = 1000;
        let houdiniRippleTick = houdiniRippleSpeed * parseFloat(properties.get('--houdini-ripple-tick').toString());
        if (houdiniRippleTick < 0) {
          houdiniRippleTick = 0;
        }
        if (maxTick < houdiniRippleTick) {
          houdiniRippleTick = maxTick;
        }

        const tickProgress = houdiniRippleTick / maxTick;

        ctx.beginPath()

        ctx.fillStyle = houdiniRippleColor
        ctx.globalAlpha = 1.0 - tickProgress
        ctx.arc(houdiniRippleX, houdiniRippleY, geom.width * tickProgress, 0, 2 * Math.PI)

        ctx.fill();
      }
    }

  registerPaint("ripple", PaintCtor);
}