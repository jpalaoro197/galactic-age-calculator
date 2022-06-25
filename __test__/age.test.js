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
    expect(venusAge.venusEquation()).toEqual(40);
  });

  test('should return a whole number = user age divided by 1.88 and rounded', () => {
    let marsAge = new Age(25, 0);
    expect(marsAge.marsEquation()).toEqual(13);
  });

  test('should return a whole number = user age divided by 11.86', () => {
    let jupiterAge = new Age(25, 0);
    expect(jupiterAge.jupiterEquation()).toEqual(2);
  });

  test('should return a whole number = averageLifeExpectancy minus userAge divided by .24 and rounded', () => {
    let mercuryAge = new Age(25, 94);
    expect(mercuryAge.mercuryYearsLeft()).toEqual(288);
  });

  test('should return a whole number = averageLifeExpectancy minus userAge divided by .62 and rounded', () => {
    let venusAge = new Age(25, 94);
    expect(venusAge.venusYearsLeft()).toEqual(111);
  });

  test('should return a whole number = averageLifeExpectancy minus userAge divided by 1.88 and rounded', () => {
    let marsAge = new Age(25, 94);
    expect(marsAge.marsYearsLeft()).toEqual(37);
  });

  test('should return a whole number = averageLifeExpectancy minus userAge divided by 1.88 and rounded', () => {
    let jupiterAge = new Age(25, 94);
    expect(jupiterAge.jupiterYearsLeft()).toEqual(6);
  });
});


