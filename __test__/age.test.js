import Age from './../src/age.js';

describe('age', ()=> {

  test('should return age for age for each age property', () => {
    const age = new Age(25, 4, 5, 3, 7);
    expect(age.userAge).toEqual(25);
    expect(age.mercuryAge).toEqual(4);
    expect(age.venusAge).toEqual(5);
    expect(age.marsAge).toEqual(3);
    expect(age.jupiterAge).toEqual(7);
  })

  test('should make mercury age = .24 of user age', () => {
  let mercuryAge = new Age(25, 0., 0, 0, 0);
  expect(age.userAge).toEqual(25);
  expect(age.mercuryAge.mercuryEquation()).toEqual(6);
  expect(age.venusAge).toEqual(5);
  expect(age.marsAge).toEqual(3);
  expect(age.jupiterAge).toEqual(7);
  });
});

