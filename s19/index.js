const user = {
  name: "jay",
  age: 31,
  skills: ["html", "css", "js"],
  job: {
    title: "front end developer",
    company: "Google",
  },
};

const emptyUser = null;

if (emptyUser && emptyUser.name) {
  console.log("its full");
} else {
  console.log("its empty");
}

const company = {
  name: "TechCorp",
  departments: {
    dev: { employees: 15, budget: 100000 },
    hr: { employees: 3, budget: 50000 },
  },
};

// a) Access the HR budget
console.log(company.departments.hr.budget);

// b) Add new department 'marketing' with .employees = 5
company.departments.marketing = {
  employees: 5,
  budget: 0,
};
console.log(company);

// c) Calculate total employees
console.log(
  company.departments.hr.employees +
    company.departments.dev.employees +
    company.departments.marketing.employees
);

console.log(user);

const userValues = Object.values(user);
console.log(userValues);

const userKeys = Object.keys(user);
console.log(userKeys);

const userInfo = Object.entries(user);
console.log(userInfo);

let emp = 0;
Object.values(company.departments).forEach((dep) => {
  emp = dep.employees + emp;
});
console.log(emp);

const pegahArr = [["name", "Pegah"]];
console.log(pegahArr);

const pegahObj = Object.fromEntries(pegahArr);
console.log(pegahObj);

const people = {
  ali: 23,
  jay: 31,
  reza: 32,
};
const peopleAges = Object.values(people);
console.log(peopleAges);
// let sumOfPeopleAges = 0
// peopleAges.forEach((personAge) => {
//     sumOfPeopleAges = sumOfPeopleAges + personAge
// })
const sumOfPeopleAges = peopleAges.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(sumOfPeopleAges);
const peopleAgeAverage = sumOfPeopleAges / peopleAges.length;
console.log(peopleAgeAverage);

const numbers = [1, 2, 3, 4];
const sumOfNumbers = numbers.reduce((acc, cur) => {
  console.log(acc);
  console.log(cur);

  return acc + cur;
}, 0);
console.log(sumOfNumbers);

const strs = ["a", "b", "c", "d"];
const sumOfStrs = strs.reduce((acc, cur) => {
  return acc + cur;
}, "");
console.log(sumOfStrs);
console.log(strs.join(""));

const listInStr = "Jay,Ali,Pedram";
console.log(listInStr.split(","));

const indexOfB = strs.indexOf("b");
console.log(indexOfB);
const indexOfE = strs.indexOf("e");
console.log(indexOfE);
const indexOfD = strs.findIndex((item) => {
  return item.toUpperCase() === "D";
});
console.log(indexOfD);

const peopleAsString = "Shakiba,Pedram,Maryam";
// peopleAsObject = {
//     shakiba: 7,
//     pedram: 6
//     maryam: 6
// }
// const step1 = peopleAsString.split(',')
// console.log(step1);

// const step2 = step1.map((item) => {
//     return [item.toLowerCase(), item.length]
// })
// console.log(step2);

// const peopleAsObject = Object.fromEntries(step2)
// console.log(peopleAsObject);

const peopleAsObject = Object.fromEntries(
  peopleAsString.split(",").map((item) => {
    return [item.toLowerCase(), item.length];
  })
);
console.log(peopleAsObject);

const students = [
  {
    name: "Alice",
    courses: {
      math: 18,
      english: 14,
      history: 12,
    },
  },
  {
    name: "Bob",
    courses: {
      math: 10,
      chemistry: 16,
      physics: 19,
    },
  },
  {
    name: "Charlie",
    courses: {
      biology: 13,
      english: 17,
      math: 15,
    },
  },
  {
    name: "Diana",
    courses: {
      art: 20,
      music: 18,
      english: 16,
    },
  },
  {
    name: "Ethan",
    courses: {
      geography: 11,
      history: 14,
      math: 9,
    },
  },
];

const getStudentAverageScore = (personName) => {
  const student = students.find((person) => {
    return person.name === personName;
  });
  if (!student) {
    return -1;
  }
  const coursesScores = Object.values(student.courses || {});

  if (!coursesScores.length) {
    return -1;
  }

  const averageScore =
    coursesScores.reduce((acc, cur) => {
      return acc + cur;
    }, 0) / coursesScores.length;
  return averageScore;
};

console.log(getStudentAverageScore("Ali"));

console.log(undefined || {});
console.log(undefined || 124);
console.log(0 || "توافقی");
// console.log(undefined && 'yes');

const studentHasCourse = (personName, courseName) => {
  const student = students.find((person) => {
    return person.name === personName;
  });
  if (!student) {
    return false;
  }
  const courses = Object.keys(student.courses || {});

  return courses.some((course) => {
    return course === courseName;
  });
};
console.log(studentHasCourse("Ethan", "art"));

const getCourseAverage = (courseName) => {
  // const studentsMatchedCourseScores = students.map((student) => {
  //     const courses = Object.entries(student.courses)
  //     const matchedCourse = courses.find((courseArray) => {
  //         return courseArray[0].toLowerCase() === courseName.toLowerCase()
  //     })
  //     if (!matchedCourse) {
  //         return -1
  //     }
  //     return matchedCourse[1]
  // }).filter((score) => {
  //     return score >= 0
  // })

  const studentsMatchedCourseScores = students
    .map((student) => {
      return student.courses[courseName];
    })
    .filter((score) => {
      return score !== undefined;
    });

  if (!studentsMatchedCourseScores.length) {
    return "WTF";
  }

  return (
    studentsMatchedCourseScores.reduce((acc, cur) => {
      return acc + cur;
    }, 0) / studentsMatchedCourseScores.length
  );
};

console.log(getCourseAverage("math"));

console.log(user);
console.log(user.name);
console.log(students[0]);
console.log(user["name"]);
console.log(students[0].courses.math);

console.log(students[0]["name"]);

const getFailedPeople = (courseName) => {
  return students
    .filter((student) => {
      return student.courses[courseName] < 10;
    })
    .map((student) => {
      return student.name;
    });
};

console.log(getFailedPeople("math"));
