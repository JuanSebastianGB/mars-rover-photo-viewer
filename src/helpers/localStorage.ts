/**
 * The function `getLocalStorage` retrieves an item from the local storage and returns it as the
 * specified type, or null if the item does not exist.
 * @param {string} key - The `key` parameter is a string that represents the key used to retrieve the
 * item from the local storage.
 * @returns The function `getLocalStorage` returns a value of type `T` or `null`.
 */
export const getLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);

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
 * The function sets a value in the local storage using a specified key.
 * @param {string} key - A string representing the key under which the value will be stored in the local storage.
 * @param {any} value - The value parameter can be any data type, such as a string, number, boolean, object, or array.
 */
export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, value);
};
