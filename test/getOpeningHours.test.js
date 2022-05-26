const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('returns an object with all schedules when called without a parameter', () => {
    expect(getOpeningHours()).toEqual(
      {
        Tuesday: { open: 8, close: 6 },
        Wednesday: { open: 8, close: 6 },
        Thursday: { open: 10, close: 8 },
        Friday: { open: 10, close: 8 },
        Saturday: { open: 8, close: 10 },
        Sunday: { open: 8, close: 8 },
        Monday: { open: 0, close: 0 },
      },
    );
  });
  it('returns if the zoo is open or closed depending on given parameters', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });

  /* Source: https://medium.com/@afolabiwaheed/how-to-test-a-function-thats-expected-to-throw-error-in-jest-2419cc7c6462 */

  it('returns the correct message when an invalid day is given as parameter', () => {
    expect(() => {
      getOpeningHours('Thu', '09:00');
    }).toThrow('The day must be valid. Example: Monday');
  });
  it('returns the correct message when an invalid period of the day is given as parameter', () => {
    expect(() => {
      getOpeningHours('Friday', '09:00-ZN');
    }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('returns the correct message when invalid hour numbers are given as parameter', () => {
    expect(() => {
      getOpeningHours('Saturday', 'C9:00-AM');
    }).toThrow('The hour should represent a number');
  });
  it('returns the correct message when an invalid hour minutes are given as parameters', () => {
    expect(() => {
      getOpeningHours('Sunday', '09:c0-AM');
    }).toThrow('The minutes should represent a number');
  });
});
