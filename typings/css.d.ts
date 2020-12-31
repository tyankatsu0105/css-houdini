namespace CSS {
  export let paintWorklet: {
    addModule: (moduleURL: string) => Promise<void>;
  };

  export let registerProperty: (propertyDefinition: {
    inherits: boolean;
    initialValue?: any;
    name: string;

    /**
     * see: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types
     * @example syntax: '<number>'
     */
    syntax?: string
  }) => undefined
}
