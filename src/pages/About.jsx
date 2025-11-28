import React from "react";

const personal = {
  name: "Subhanshu Pardeshi",
  dob: "17 July 1999",
  age: "26",
  father: "Mr. Sabhajit Mohal Pardeshi",
  mother: "Mrs. Sunita Sabhajit Pardeshi",
  Sister: "Sakshi Sabhajit Pardeshi",
  nationality: "Indian",
  location: "Hadapsar, Pune, Maharashtra",
};

const About = () => {
  return (
    <div className="section center-container">
      <h2 className="section-title">Subhanshu Sabhajit Pardeshi</h2>
       <a href="/logo.jpg"></a>
        <div className="card about-card">
        <p><strong>Name:</strong> {personal.name}</p>
        <p><strong>Age:</strong> {personal.age}</p>
        <p><strong>DOB:</strong> {personal.dob}</p>
        <p><strong>Nationality:</strong> {personal.nationality}</p>
        <p><strong>Father:</strong> {personal.father}</p>
        <p><strong>Mother:</strong> {personal.mother}</p>
        <p><strong>Sister:</strong> {personal.Sister}</p>
        <p><strong>Address:</strong> {personal.location}</p>
      </div>
    </div>
  );
};

export default About;
