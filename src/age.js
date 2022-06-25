export default class Age {
  constructor(userAge, averageLifeExpectancy ) {
  this.userAge = userAge;
  this.averageLifeExpectancy = averageLifeExpectancy;
  };

  mercuryEquation() {
    return Math.round(this.userAge / .24)
  }

  venusEquation() {
    return Math.round(this.userAge / .62)
  }

  marsEquation() {
    return Math.round(this.userAge / 1.88)
  }

  jupiterEquation() {
    return Math.round(this.userAge / 11.86)
  }

  mercuryYearsLeft() {
    return Math.round((this.averageLifeExpectancy - this.userAge) / .24)
  }

  venusYearsLeft() {
    return Math.round((this.averageLifeExpectancy - this.userAge) / .62)
  }

  marsYearsLeft() {
    return Math.round((this.averageLifeExpectancy - this.userAge) / 1.88)
  }

  jupiterYearsLeft() {
    return Math.round((this.averageLifeExpectancy - this.userAge) / 11.86)
  }
};



