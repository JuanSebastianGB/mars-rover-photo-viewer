import { getCurrentDate } from '.';

describe('getCurrentDate', () => {
  it('test_returns_string', () => {
    expect(typeof getCurrentDate()).toBe('string');
  });
  it('test_returns_current_date', () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    expect(getCurrentDate()).toBe(formattedDate);
  });
  it('test_happy_path_returns_current_date', () => {
    const result = getCurrentDate();
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, 10);
    expect(result).toBe(formattedDate);
  });
  it('test_returns_string_length_10', () => {
    expect(getCurrentDate().length).toBe(10);
  });

  it('test_no_errors_thrown', () => {
    expect(() => getCurrentDate()).not.toThrow();
  });
  it('test_general_behaviour_parsable_date', () => {
    const result = getCurrentDate();
    const parsedDate = Date.parse(result);
    expect(isNaN(parsedDate)).toBe(false);
  });
  it('test_edge_case_leap_year', () => {
    const mockDate = new Date('2020-02-29T00:00:00.000Z');
    vitest.spyOn(global, 'Date').mockImplementation(() => mockDate);
    const result = getCurrentDate();
    expect(result).toBe('2020-02-29');
    global.Date = Date;
  });
});
