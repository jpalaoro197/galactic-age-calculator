

describe('age', ()=> {

  test('should return age for age for each age property', ()=> {
    const age = new age(25, 4, 5, 3, 7);
    expect(age.userAge).to.equal(25);
    expect(age.mercuryAge).to.equal(4);
    expect(age.venusAge).to.equal(5);
    expect(age.marsAge).to.equal(3);
    expect(age.jupiterAge).to.equal(7);
  })
})