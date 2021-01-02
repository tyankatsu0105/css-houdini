if (typeof registerPaint !== 'undefined') {
  class Ctor implements PaintCtor {
    static get inputProperties() {
      return [
        '--houdini-stripe-line-number',
        '--houdini-stripe-line-color',
        '--houdini-stripe-line-max-width',
      ];
    }

    paint(
      ctx: PaintRenderingContext2D,
      geom: PaintSize,
      properties: StylePropertyMap
    ) {
      const getRandom = (min: number, max: number) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

      const houdiniStripeLineNumber = parseFloat(
        properties.get('--houdini-stripe-line-number').toString()
      );
      const houdiniStripeLineMaxWidth = parseFloat(
        properties.get('--houdini-stripe-line-max-width').toString()
      );
      const houdiniStripeLineColor = properties
        .get('--houdini-stripe-line-color')
        .toString();

      for (let index = 0; index < houdiniStripeLineNumber; index++) {
        const y = getRandom(0, geom.height);
        ctx.beginPath();

        ctx.lineWidth = getRandom(1, houdiniStripeLineMaxWidth);
        ctx.strokeStyle = houdiniStripeLineColor;

        ctx.moveTo(0, y);
        ctx.lineTo(geom.width, y);

        ctx.stroke();
      }
    }
  }

  registerPaint('glitch', Ctor);
}
