export default class Age {
  constructor(userAge, averageLifeExpectancy ) {
  this.userAge = userAge;
  this.averageLifeExpectancy = averageLifeExpectancy;
  };

  mercuryEquation() {
    (this.mercuryAge = (this.userAge * .24))
  }
};