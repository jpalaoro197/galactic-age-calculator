import Age from './../src/age.js';

describe('age', ()=> {

  test('should return age for age for each age property', () => {
    const age = new Age(25, 27);
    expect(age.userAge).toEqual(25);
    expect(age.averageLifeExpectancy).toEqual(27);
  })

  test('should make mercury age = .24 of user age', () => {
  let mercuryAge = new Age(25, 0);
  expect(mercuryAge.mercuryEquation()).toEqual(6, 0);
 
  });
});


