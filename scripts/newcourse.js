'use strict';

const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
    const addData = {
        dept: document.getElementById('department').value,
        courseNum: document.getElementById('courseNum').value,
        courseName: document.getElementById('courseName').value,
        instructor: document.getElementById('instructor').value,
        startDate: document.getElementById('startDate').value,
        numDays: document.getElementById('numdays').value
    }

    fetch('http://localhost:8081/api/courses', {
        method: 'POST',
        body: JSON.stringify(addData),
        headers: { "Content-type": "application/json; charset=utf-8"}
    }).then((response) => response.json()).then(data => {
        window.location.href = 'index.html';
    })
});