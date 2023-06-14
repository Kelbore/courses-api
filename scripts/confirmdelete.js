'use strict';

const params = new URLSearchParams(location.search);
const id = params.get('id');


const tbody = document.querySelector('#deleteTable tbody');
const tableDiv = document.getElementById('deleteTable');
const deleteBtn = document.getElementById('deleteBtn');

fetch(`http://localhost:8081/api/courses/${id}`).then((response) => response.json()).then((file) => {
    const row = tbody.insertRow(-1);

    const cell1 = row.insertCell(0);
    cell1.innerHTML = file.dept;
    const cell2 = row.insertCell(1);
    cell2.innerHTML = file.courseNum;
    const cell3 = row.insertCell(2);
    cell3.innerHTML = file.courseName;
    const cell4 = row.insertCell(3);
    cell4.innerHTML = file.instructor;
    const cell5 = row.insertCell(4);
    cell5.innerHTML = file.startDate;
    const cell6 = row.insertCell(5);
    cell6.innerHTML = file.numDays;
});

tableDiv.style.display = 'table';

deleteBtn.addEventListener('click', () => {
    fetch(`http://localhost:8081/api/courses/${id}`, {
        method: "DELETE"
    }).then((response) => response.json()).then((json) => {
        console.log(json);
        alert('The course successfully deleted');
        window.location.href = 'index.html';
    })
});


