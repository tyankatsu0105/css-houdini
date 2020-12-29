import { registerProperty } from "./utils";

registerProperty({
  name: '--houdini-ripple-x',
  syntax: '<number>',
  inherits: false,
  initialValue: 0
});

registerProperty({
  name: '--houdini-ripple-y',
  syntax: '<number>',
  inherits: false,
  initialValue: 0
});


registerProperty({
  name: '--houdini-ripple-color',
  syntax: '<color>',
  inherits: false,
  initialValue: "red"
});


registerProperty({
  name: '--houdini-ripple-tick',
  syntax: '<number>',
  inherits: false,
  initialValue: 0
});

registerProperty({
  name: '--houdini-ripple-tick-max',
  syntax: '<number>',
  inherits: false,
  initialValue: 1000
});

registerProperty({
  name: '--houdini-ripple-speed',
  syntax: '<time>',
  inherits: false,
  initialValue: '1s'
});
