# CSS Houdini Stripe

## Usage

```bash
npm install @tyankatsu0105/css-houdini-stripe
```

```html
<style>
  .text {
    color: #333;
    font-size: 4rem;
    font-weight: bold;
    position: relative;
  }

  .text:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  @supports (background: paint(stripe)) {
    .text:before {
      --houdini-stripe-line-number: 10;
      --houdini-stripe-line-color: #fff;
      --houdini-stripe-line-max-width: 3;

      background-image: paint(stripe);
    }
  }
</style>

<body>
  <p class="text">
    Stripe Text
  </p>

  <script>
    window.CSS.paintWorklet.addModule("https://unpkg.com/@tyankatsu0105/css-houdini-ripple/worklet.js");
  </script>

  <!-- Option -->
  <script src="https://unpkg.com/@tyankatsu0105/css-houdini-stripe/properties.js"></script>

</body>
</html>
```

## LICENSE

MIT
