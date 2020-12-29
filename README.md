# CSS Houdini

## Usage
```bash
npm install @tyankatsu0105/css-houdini
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

      start = performance.now();

      const ripple = (now) => {
        const count = Math.floor(now - start);
        button.style.setProperty('--houdini-ripple-tick', count)

        if(1000 < count) {
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
    window.CSS.paintWorklet.addModule("https://unpkg.com/@tyankatsu0105/css-houdini/dist/worklet.js");
  </script>

  <!-- Option -->
  <script src="https://unpkg.com/@tyankatsu0105/css-houdini/dist/properties.js"></script>

</body>
</html>
```

## Dev

```bash
npm run website
```
http://localhost:8080/

Edit `src`

## Memo
- CSS Houdiniとは、ピクセルパイプラインの各ステップにhookしてCSSの拡張を可能にするAPI郡のこと
  - CSSOMにアクセスできるAPIは、どれもレンダリングが終わったあとの操作
  - しかし、Houdiniでレンダリングまで待たずに各プロセスにフックとして機能を登録して、CSSの拡張ができる
- PaintWorklet.registerPaint()で処理を書いた class を登録して、CSS.PaintWorklet.addModule()で PaintWorklet に登録した class を追加して使えるようにするっぽい
  - registerPaintに渡す引数は、`(name, paintCtrl)`らしい https://drafts.css-houdini.org/css-paint-api-1/
- paintWorklet.addModuleでnameの指定ができないので、インストールしたモジュール間で命名のバッティングが起こりそう
  - registerPaintの第一引数の名称
  - registerPropertyで登録したCSS変数の名称

### CSS.registerProperty
- https://developer.mozilla.org/ja/docs/Web/API/CSS/RegisterProperty
- https://csstree.github.io/docs/syntax/

## Links

- [\(6\) Extending CSS with Houdini \- YouTube](https://www.youtube.com/watch?v=5eBar5TI71M)
- [CSS Houdini \| MDN](https://developer.mozilla.org/ja/docs/Web/Houdini)
- [CSS\.paintWorklet \(静的プロパティ\) \- Web API \| MDN](https://developer.mozilla.org/ja/docs/Web/API/CSS/paintWorklet)
- [una/extra\.css: A CSS Houdini Paint library for those who want to make their sites a little extra 💁🏻‍♀️](https://github.com/una/extra.css#readme)
- [CSS\.registerProperty\(\) \- Web API \| MDN](https://developer.mozilla.org/ja/docs/Web/API/CSS/RegisterProperty)
- [Houdini – CSS の秘密を解き明かすもの  \|  Web  \|  Google Developers](https://developers.google.com/web/updates/2016/05/houdini?hl=ja)
- [Exploring the CSS Paint API \| Bobrov Dev](https://bobrov.dev/blog/exploring-the-css-paint-api/)
- [CSS Houdini: Properties, Values, and the Paint API \| Aysha Anggraini](https://aysha.me/2019/08/css-houdini-properties-values-and-the-paint-api/)

## LICENSE
MIT