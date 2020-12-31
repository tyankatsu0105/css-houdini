import { registerProperty } from './utils';

registerProperty({
  inherits: false,
  initialValue: 0,
  name: '--houdini-ripple-x',
  syntax: '<number>',
});

registerProperty({
  inherits: false,
  initialValue: 0,
  name: '--houdini-ripple-y',
  syntax: '<number>',
});

registerProperty({
  inherits: false,
  initialValue: 'red',
  name: '--houdini-ripple-color',
  syntax: '<color>',
});

registerProperty({
  inherits: false,
  initialValue: 0,
  name: '--houdini-ripple-tick',
  syntax: '<number>',
});

registerProperty({
  inherits: false,
  initialValue: 1000,
  name: '--houdini-ripple-tick-max',
  syntax: '<number>',
});

registerProperty({
  inherits: false,
  initialValue: '1s',
  name: '--houdini-ripple-speed',
  syntax: '<time>',
});
