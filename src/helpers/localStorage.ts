/**
 * The function `getLocalStorage` retrieves a value from the browser's local storage by its key and returns it as a parsed JSON object, or null if the value is not found or cannot be parsed.
 * @param {string} key - The `key` parameter is a string that represents the key of the item you want to retrieve from the local storage.
 * @returns the value stored in the local storage with the given key. If the value exists and can be parsed as JSON, it will be returned as an object. Otherwise, it will return null.
 */
export const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    try {
      return JSON.parse(value);
    } catch (error) {
      return null;
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
