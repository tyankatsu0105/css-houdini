How to create CSS Houdini

## Memo

- ピクセルパイプラインの Layout と Paint にフックしてるっぽい
- PaintWorklet.registerPaint()で処理を書いた class を登録して、CSS.PaintWorklet.addModule()で PaintWorklet に登録した class を追加して使えるようにするっぽい
- CSS.registerProperty()は CSS 変数を作成できて、これを自作した module のプロパティとして使うっていうのが今の所ベストプラクティスっぽい。こんな感じ[extra\.css/properties\.js at master · una/extra\.css](https://github.com/una/extra.css/blob/master/lib/scallopedBorder/properties.js)

## Links

- [\(6\) Extending CSS with Houdini \- YouTube](https://www.youtube.com/watch?v=5eBar5TI71M)
- [CSS Houdini \| MDN](https://developer.mozilla.org/ja/docs/Web/Houdini)
- [CSS\.paintWorklet \(静的プロパティ\) \- Web API \| MDN](https://developer.mozilla.org/ja/docs/Web/API/CSS/paintWorklet)
- [una/extra\.css: A CSS Houdini Paint library for those who want to make their sites a little extra 💁🏻‍♀️](https://github.com/una/extra.css#readme)
- [CSS\.registerProperty\(\) \- Web API \| MDN](https://developer.mozilla.org/ja/docs/Web/API/CSS/RegisterProperty)
- [Houdini – CSS の秘密を解き明かすもの  \|  Web  \|  Google Developers](https://developers.google.com/web/updates/2016/05/houdini?hl=ja)
