/* eslint-disable class-methods-use-this */
export default class Validator {
  validateUsername(name) {
    if (/\d{4}/g.test(name)) {
      return false;
    }
    return (/^[a-z][\w-]*[a-z]$/i.test(name));
  }
}
