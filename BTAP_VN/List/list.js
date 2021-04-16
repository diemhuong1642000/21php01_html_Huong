var students = [
    {
      name: 'Tang Thi Diem Huong',
      age: 21,
      email: 'diemhuong@gmail.com',
      address: 'Hai Phong, VN'
    },
    {
      name: 'Le Thi Kim Thoa',
      age: 22,
      email: 'thoa@gmail.com',
      address: 'Hai Phong, VN'
    }
  ];
  document.addEventListener('DOMContentLoaded', function(){
    renderStudents();
  });
  function renderStudents(){
      var html = '';
      for (var student of students){
        html+= '<li class="student">';
        html += '<p><span>Name: </span>Tang Thi Diem Huong</p>';
        html += '<p><span>Age: </span>14</p>';
        html += '<p><span>Email: </span>huong@gmail.com</p>';
        html += '<p><span>Address: </span>Quang Nam</p>';
        html += '<i class="student-delete">X</i>';
        html += '</li>';

      }
      var studentsElement = document.getElementById('student-list');
      studentsElement.innerHTML = html;
  }
  