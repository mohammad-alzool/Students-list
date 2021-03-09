'use strict';

let studentArr = [];
let studentEmail = document.getElementById('email');
let studentNumber = document.getElementById('mobilenumber');
let studentTuition = document.getElementById('Tuition');
let studentTable = document.getElementById('table');
let id = 0;
let evLi = document.getElementById('form')


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
  id+=1;

  let tableRow=document.createElement('tr');
  let idData=document.createElement('td');
  tableRow.appendChild.idData;
  idData.innerText= id ;

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
function newstudent()


function ageGen (){
  let age=Math.floor((Math.random() * 50) + 18);
  return age ;
}


function creatHeaderTable(){
  let headerTable=document.createElement('tr');
  studentTable.appendChild.headerTable;

  let id=document.createElement('th');
  headerTable.appendChild.id;
  id.innerText='id';

  let stName=document.createElement('th');
  headerTable.appendChild.stName;
  stName.innerText='Name';

  let email=document.createElement('th');
  headerTable.appendChild.email;
  email.innerText='Email';

  let mobile=document.createElement('th');
  headerTable.appendChild.mobile;
  mobile.innerText='Mobile';

  let age=document.createElement('th');
  headerTable.appendChild.age;
  age.innerText='Age';

  let tuition=document.createElement('th');
  headerTable.appendChild.tuition;
  tuition.innerText='tuition';



}
creatHeaderTable();
