// parent class of name School
class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    numberOfStudentsSet(newNumberOfStudents) {
      if (isNaN(newNumberOfStudents)) {
        console.log("Invalid input: numberOfStudents must be set to a Number.");
      } else {
        this._numberOfStudents = newNumberOfStudents;
      }
    }
  
    quickFacts() {
      console.log(
        `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
      );
    }
  
    static pickSubstituteTeacher(substituteTeachers) {
      const randomNumber = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randomNumber];
    }
  }
  
  // child class PrimarySchool
class PrimarySchool extends School {
constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
}

get pickupPolicy() {
    return this._pickupPolicy;
}
}

  // child class highschool
class HighSchool extends School {
constructor(name, numberOfStudents, sportsTeams) {
    super(name, "highschool", numberOfStudents);
    this._sportsTeams = sportsTeams;
}
get sportTeams() {
    console.log(this._sportsTeams);
}
}

  //child class middleSchool
class MiddleSchool extends School {
constructor(name, numberOfStudents, subjectChoice){
    super(name, 'middleschool', numberOfStudents)
    this._subjectChoice = subjectChoice;
}
}
  
  // primarySchool instance
const lorraineHansbury = new PrimarySchool(
"Lorraine Hansbury",
514,
"Students must picked up by a parent, guardian, or a family member over the age of 13."
);

console.log(lorraineHansbury);
lorraineHansbury.quickFacts();
  
const subTeachersList = [
"Jamal Crawford",
"Lou Williams",
"J. R. Smith",
"James Harden",
"Jason Terry",
"Manu Ginobli",
];
School.pickSubstituteTeacher(subTeachersList);
  
//highschool instance
const sportTeamsList = [
"Baseball",
"Basketball",
"Volleyball",
"Track and Field",
];
const alSmith = new HighSchool("Al E. Smith", 415, sportTeamsList);
alSmith.sportTeams;

// middle school instance
const subject = ['math core', 'math lit', 'physics', 'chemistry', 'language arts', 'IT & Engineering'];
const bobMallory = new MiddleSchool('Bob A. Mallory', 423, subject);

  
  // const shek = new PrimarySchool('Shek', 34, 'ALways before 12pm')
  // console.log(shek)
  // shek.numberOfStudentsSet("maybe like 4")
  
  // const manny = new School('Serge', 'Primary', 8);
  // console.log(manny)
  // // manny.numberOfStudentsSet('hello');
  // // console.log(manny)
  
  // // manny.quickFacts();
  // const subTeachers = ['Mr Sally', 'Mrs Chollo Bob', 'Vato Pirc']
  // console.log(School.pickSubstituteTeacher(subTeachers));
  