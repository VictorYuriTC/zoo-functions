const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('returns the correct number of elephants when called ', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('returns an array with the correct names when called', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('returns the correct elephants age average when called', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('returns the correct location when called', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('returns the correct popularity when called', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('return the expected availability when called', () => {
    console.log(handlerElephants('availability'));
    expect(handlerElephants('availability')).not.toEqual(expect.arrayContaining(['Monday']));
    expect(handlerElephants('availability')).toEqual(expect.arrayContaining(['Sunday']));
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('returns the expected message when called with an argument that is not a string', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(true)).toBe(expected);
    expect(handlerElephants(7)).toBe(expected);
    expect(handlerElephants(null)).toBe(expected);
  });
  it('returns undefined when the parameter is undefined', () => {
    expect(handlerElephants(undefined)).toBe(undefined);
  });
  it('returns null when called with a string that is not a functionality', () => {
    expect(handlerElephants('something')).toBe(null);
  });
});
