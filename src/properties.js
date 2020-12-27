if ("registerProperty" in window.CSS) {
  window.CSS.registerProperty({
    name: "--extra-underlineNumber",
    syntax: "<number>",
    inherits: false,
    initialValue: 3
  });

  window.CSS.registerProperty({
    name: "--extra-underlineColor",
    syntax: "<color>",
    inherits: true,
    initialValue: "black"
  });

  window.CSS.registerProperty({
    name: "--extra-underlineSpread",
    syntax: "<number>",
    inherits: false,
    initialValue: 20
  });

  window.CSS.registerProperty({
    name: "--extra-underlineWidth",
    syntax: "<number>",
    inherits: false,
    initialValue: 2
  });
}
