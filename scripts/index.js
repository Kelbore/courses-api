'use strict';

const tableDiv = document.getElementById('courseTable');
const tbody = document.querySelector('#courseTable tbody');
const courseBtn = document.getElementById('courseBtn');

const coursesAPI = fetch('http://localhost:8081/api/courses');
coursesAPI.then((response) => response.json()).then((data) => {
    data.forEach(element => {
       const row = tbody.insertRow(-1);
       
       const cell1 = row.insertCell(0);
       cell1.innerHTML = element.dept;
       const cell2 = row.insertCell(1);
       cell2.innerHTML = element.courseNum;
       const cell3 = row.insertCell(2);
       cell3.innerHTML = element.courseName;
       const cell4 = row.insertCell(3);
       const link = document.createElement('a');
       link.href = `./details.html?couseid=${element.id}`;
       link.text = 'See details';
       cell4.appendChild(link);
       const cell5 = row.insertCell(4);
       const hyperLink = document.createElement('a');
       hyperLink.href = `./confirm-delete.html?id=${element.id}`;
       hyperLink.text = 'Delete';
       cell5.appendChild(hyperLink);
    });
});

courseBtn.addEventListener('click', () => {
    window.location.href = './newcourse.html';
});