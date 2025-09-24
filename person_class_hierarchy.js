import React from "react";

// Base Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Student subclass extending Person
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  // Override to include course info
  displayInfo() {
    return `${super.displayInfo()}, Course: ${this.course}`;
  }
}

// Teacher subclass extending Person
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // Override to include subject info
  displayInfo() {
    return `${super.displayInfo()}, Subject: ${this.subject}`;
  }
}

// React component to display info from subclasses
export default function PersonClassHierarchy() {
  const student = new Student("Jane Doe", 21, "Biology");
  const teacher = new Teacher("John Smith", 40, "History");

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Person Class Hierarchy with Student and Teacher Subclasses</h1>
      <div>
        <h2>Student Info</h2>
        <p>{student.displayInfo()}</p>
      </div>
      <div>
        <h2>Teacher Info</h2>
        <p>{teacher.displayInfo()}</p>
      </div>
    </div>
  );
}