/**
 * The function `getLocalStorage` retrieves an item from the local storage and returns it as the
 * specified type, or null if the item does not exist.
 * @param {string} key - The `key` parameter is a string that represents the key used to retrieve the
 * item from the local storage.
 * @returns The function `getLocalStorage` returns a value of type `T` or `null`.
 */
export const getLocalStorage = <T>(key: string): T | null => {
  const item =
    typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;

  if (item) {
    try {
      const parsedItem = JSON.parse(item) as T;
      return parsedItem;
    } catch (error) {
      if (typeof item === 'boolean' || typeof item === 'number') {
        return item as unknown as T;
      }
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
