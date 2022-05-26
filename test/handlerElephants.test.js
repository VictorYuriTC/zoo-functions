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
  it('returns the correct popularity when called', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('returns the correct message when the parameter is not a string', () => {
    expect(handlerElephants(true)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('returns undefined when the parameter is undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('returns the correct location when called', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
});
