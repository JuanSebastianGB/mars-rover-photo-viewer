/**
 * The function `getLocalStorage` retrieves a value from the local storage by a given key, and returns
 * it as a parsed JSON object if possible, otherwise returns the value as is.
 * @param {string} key - The `key` parameter is a string that represents the key of the item you want
 * to retrieve from the local storage.
 * @returns The function `getLocalStorage` returns the value stored in the local storage with the
 * specified key. If the value exists and can be parsed as JSON, it returns the parsed JSON value. If
 * the value exists but cannot be parsed as JSON, it checks if the value includes '{' character. If it
 * does, it returns null. Otherwise, it logs the value to the console and returns the value as
 */
export const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    try {
      return JSON.parse(value);
    } catch (error) {
      if (value.includes('{')) return null;
      return value;
    }
  }
  return null;
};

/**
 * The function `setLocalStorage` stores a value in the browser's local storage, converting it to a JSON string if it is an object.
 * @param {string} key - The key parameter is a string that represents the key under which the value will be stored in the local storage.
 * @param {any} value - The value parameter can be any data type, including primitive types (such as string, number, boolean) or complex types (such as objects or arrays).
 */
export const setLocalStorage = (key: string, value: any) => {
  if (typeof value === 'object')
    localStorage.setItem(key, JSON.stringify(value));
  else localStorage.setItem(key, value);
};
