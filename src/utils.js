/**
 * @typedef PropertyDefinition 
 * @property {string} name
 * @property {string=} syntax
 * @property {boolean} inherits
 * @property {any=} initialValue
 */

/**
  * @param {PropertyDefinition} propertyDefinition 
  * @returns {undefined}
  */
export const registerProperty = (propertyDefinition) => CSS.registerProperty(propertyDefinition)