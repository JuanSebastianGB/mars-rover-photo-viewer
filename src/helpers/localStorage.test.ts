import { getLocalStorage, setLocalStorage } from './localStorage';

describe('setLocalStorage', () => {
  it('test_store_string', () => {
    setLocalStorage('test_key', 'test_value');
    expect(localStorage.getItem('test_key')).toBe('test_value');
  });
  it('test_store_number', () => {
    setLocalStorage('test_key', 123);
    expect(localStorage.getItem('test_key')).toBe(123);
  });
  it('test_store_boolean', () => {
    setLocalStorage('test_key', true);
    expect(localStorage.getItem('test_key')).toBe(true);
  });
  it('test_store_null', () => {
    setLocalStorage('test_key', null);
    expect(localStorage.getItem('test_key')).toBe('null');
  });
});

describe('getLocalStorage', () => {
  it('test_retrieve_existing_item', () => {
    localStorage.setItem('test_key', JSON.stringify({ name: 'test_name' }));
    const result = getLocalStorage<{ name: string }>('test_key');
    expect(result).toEqual({ name: 'test_name' });
  });
  it('test_return_null_if_item_does_not_exist', () => {
    const result = getLocalStorage<{ name: string }>('non_existing_key');
    expect(result).toBeNull();
  });
  it('test_return_null_if_item_cannot_be_parsed_as_json', () => {
    localStorage.setItem('test_key', 'invalid_json');
    const result = getLocalStorage<{ name: string }>('test_key');
    expect(result).toBeNull();
  });
  it('test_return_item_as_is_if_boolean_or_number_and_cannot_be_parsed_as_json', () => {
    localStorage.setItem('test_key', 'true');
    const result = getLocalStorage<boolean>('test_key');
    expect(result).toBe(true);

    localStorage.setItem('test_key', '123');
    const result2 = getLocalStorage<number>('test_key');
    expect(result2).toBe(123);
  });
  it('test_return_null_if_error_occurs_during_parsing', () => {
    localStorage.setItem('test_key', '{ invalid_json');
    const result = getLocalStorage<{ name: string }>('test_key');
    expect(result).toBeNull();
  });
  it('test_return_null_if_key_parameter_is_not_a_string', () => {
    const result = getLocalStorage<{ name: string }>(123 as any);
    expect(result).toBeNull();
  });
  it('test_handle_union_type', () => {
    localStorage.setItem('test_key', JSON.stringify({ a: 1 }));
    const result = getLocalStorage<{ a: number } | null>('test_key');
    expect(result).toEqual({ a: 1 });

    localStorage.setItem('test_key', 'true');
    const result2 = getLocalStorage<boolean | null>('test_key');
    expect(result2).toBe(true);
  });
});
