import { registerProperty } from "./utils";

registerProperty({
  name: '--extra-underlineNumber',
  syntax: '<number>',
  inherits: false,
  initialValue: 3
});

registerProperty({
  name: '--extra-underlineColor',
  syntax: '<color>',
  inherits: true,
  initialValue: 'black'
});

registerProperty({
  name: '--extra-underlineSpread',
  syntax: '<number>',
  inherits: false,
  initialValue: 20
});

registerProperty({
  name: '--extra-underlineWidth',
  syntax: '<number>',
  inherits: false,
  initialValue: 2
});