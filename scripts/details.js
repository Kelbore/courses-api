'use strict';

const params = new URLSearchParams(location.search);
const courseid = params.get('courseid');

const tbody = document.querySelector('#detailsTable tbody');
const gobackBtn = document.getElementById('gobackBtn');

fetch(`http://localhost:8081/api/courses/${courseid}`).then((response) => response.json()).then((data) => {
    const row = tbody.insertRow(-1);

    const cell1 = row.insertCell(0);
    cell1.innerHTML = data.id;
    const cell2 = row.insertCell(1);
    cell2.innerHTML = data.dept;
    const cell3 = row.insertCell(2);
    cell3.innerHTML = data.courseNum;
    const cell4 = row.insertCell(3);
    cell4.innerHTML = data.courseName;
    const cell5 = row.insertCell(4);
    cell5.innerHTML = data.instructor;
    const cell6 = row.insertCell(5);
    cell6.innerHTML = data.startDate;
    const cell7 = row.insertCell(6);
    cell7.innerHTML = data.numDays;
});

gobackBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
})