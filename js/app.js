'use strict';

let studentArr = [];
let studentEmail = document.getElementById('email');
let studentNumber = document.getElementById('mobilenumber');
let studentTuition = document.getElementById('Tuition');
let studentTable = document.getElementById('table');
let idNumber = 0;
let evLi = document.getElementById('form');


function Students (email, mobilenumber, age, tuition) {
  this.email=email;
  this.mobilenumber=mobilenumber;
  this.age=ageGen();
  this.tuition=tuition;
  this.push(studentArr);

}

Students.prototype.renderstudent = function() {
  this.email=studentEmail;
  this.mobilenumber=studentNumber;
  this.tuition=studentTuition;
  idNumber+=1;

  let tableRow=document.createElement('tr');
  let idData=document.createElement('td');
  tableRow.appendChild.idData;
  idData.innerText= idNumber ;

  let nameData=document.createElement('td');
  tableRow.appendChild.nameData;
  nameData.innerText=this.name;

  let emailData=document.createElement('td');
  tableRow.appendChild.emailData;
  emailData.innerText=this.email;

  let mobileData=document.createElement('td');
  tableRow.appendChild.mobileData;
  mobileData.innerText=this.mobile;

  let ageData=document.createElement('td');
  tableRow.appendChild.ageData;
  ageData.innerText=this.age;

  let tuitionData=document.createElement('td');
  tableRow.appendChild.tuitionData;
  tuitionData.innerText=this.tuition;

};

evLi.addEventListener('click',Students.renderstudent);
// function newstudent(){};

function ageGen (){
  let age=Math.floor((Math.random() * 50) + 18);
  return age ;
}


function creatHeaderTable(){
  let headerTable=document.createElement('tr');
  studentTable.appendChild.headerTable;

  let id=document.createElement('th');
  id.innerText='id';
  headerTable.appendChild.id;

  let stName=document.createElement('th');
  stName.innerText='Name';
  headerTable.appendChild.stName;

  let email=document.createElement('th');
  email.innerText='Email';
  headerTable.appendChild.email;

  let mobile=document.createElement('th');
  mobile.innerText='Mobile';
  headerTable.appendChild.mobile;

  let age=document.createElement('th');
  age.innerText='Age';
  headerTable.appendChild.age;

  let tuition=document.createElement('th');
  tuition.innerText='tuition';
  headerTable.appendChild.tuition;



}
creatHeaderTable();
