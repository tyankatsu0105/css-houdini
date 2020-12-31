import CSSTypes from 'mdn-data/css/types.json';

type PropertyDefinition = {
  inherits: boolean;
  initialValue?: any;
  name: string;
  syntax?: `<${keyof typeof CSSTypes}>`
};

namespace CSS {
  export let paintWorklet: {
    addModule: (moduleURL: string) => Promise<void>;
  };

  export let registerProperty: (propertyDefinition: PropertyDefinition) => undefined
}
