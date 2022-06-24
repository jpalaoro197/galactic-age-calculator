import Age from './../src/age.js';

describe('age', ()=> {

  test('should return age for age for each age property', () => {
    const age = new Age(25, 27);
    expect(age.userAge).toEqual(25);
    expect(age.averageLifeExpectancy).toEqual(27);
  })

  test('should return number = user age divided by .24 and rounded', () => {
    let mercuryAge = new Age(25, 0);
  expect(mercuryAge.mercuryEquation()).toEqual(104, 0);
  });

  test('should return a whole number = user age divided by .62 and rounded', () => {
    let venusAge = new Age(25, 0);
    expect(venusAge.venusEquation()).toEqual(40)
  })


});


