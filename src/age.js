export default class Age {
  constructor(userAge, averageLifeExpectancy ) {
  this.userAge = userAge;
  this.averageLifeExpectancy = averageLifeExpectancy;
  };

  mercuryEquation() {
    return (this.userAge * .24)
  }
};

