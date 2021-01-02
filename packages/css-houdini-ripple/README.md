# CSS Houdini Ripple

## Usage
```bash
npm install @tyankatsu0105/css-houdini-ripple
```

```html
<style>
  .container{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button{
    padding: 12px 16px;
    border: 2px solid rgb(2, 206, 80);
    background-color: #fff;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    font-size: 2rem;

    --houdini-ripple-x: 0;
    --houdini-ripple-y: 0;
    --houdini-ripple-color: rgb(218, 218, 218);
    --houdini-ripple-tick: 0;
    --houdini-ripple-tick-max: 1000;
    --houdini-ripple-speed: 4.0;
  }
  @supports(background: paint(ripple)) {
    .button--ripple{
      background-image: paint(ripple);
    }
  }
</style>

<body>
  <div class="container">
    <button type="button" id="ripple-button" class="button button--ripple">
      Button
    </button>
  </div>

  <script>
    const button = document.getElementById('ripple-button')
    let start;

    const handleClickButton = (event) => {
      const [x, y] = [event.offsetX, event.offsetY];
      button.style.setProperty('--houdini-ripple-x', x)
      button.style.setProperty('--houdini-ripple-y', y)
      const maxTick = parseFloat(
        getComputedStyle(button).getPropertyValue('--houdini-ripple-tick-max')
      );

      start = performance.now();

      const ripple = (now) => {
        const count = Math.floor(now - start);
        button.style.setProperty('--houdini-ripple-tick', count)

        if(maxTick < count) {
          button.style.setProperty('--houdini-ripple-tick', 0)
          return;
        }

        requestAnimationFrame(ripple);
      }
      requestAnimationFrame(ripple);
    }

    button.onclick = handleClickButton
  </script>

  <script>
    window.CSS.paintWorklet.addModule("https://unpkg.com/@tyankatsu0105/css-houdini-ripple/worklet.js");
  </script>

  <!-- Option -->
  <script src="https://unpkg.com/@tyankatsu0105/css-houdini-ripple/properties.js"></script>

</body>
</html>
```

## LICENSE
MIT
