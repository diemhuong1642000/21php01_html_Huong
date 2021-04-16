

document.write("Danh sách học viên của lớp: <br>");
var Students = [
    ["STT", "Họ và tên" , "Tuổi" ,  "Email" , "Quê quán"],
    ["1", "Tang Thi Diem Huong" , "21" ,  "huong@gmail.com" , "Quảng Nam"],
    ["2", "Le Thi Kim Thoa" , "22" , "thoag@gmail.com" , "Tam Ky"]
];

var Table="<table>";
for (var y=0; y<Students.length; y++ ) { 
    Table += "<tr>";
  for (var x=0; x<Students[y].length; x++ ) { 
    Table += "<td>" + Students[y][x] + "</td>";
  }
  Table += "</tr>";
}
Table += "</table>";

//hiển thị danh sách
document.write("<br>" + Table);

//Thêm  2 học viên
Students.push(["3", "le Van An" , "20" ,  "an@gmail.com" , "Quảng Nam"]);
Students.push(["4", "Ha Xuan Huy" , "32" ,  "huy@gmail.com" , "Sai Gon"]);

var Table_2="<table>";
for (var y=0; y<Students.length; y++ ) { 
    Table_2 += "<tr>";
  for (var x=0; x<Students[y].length; x++ ) { 
    Table_2 += "<td>" + Students[y][x] + "</td>";
  }
  Table_2 += "</tr>";
}
Table_2 += "</table>";

document.write("<br>");

//In danh sách học viên
document.write("Thêm thông tin 2 hoc viên vào mảng: <br>");
document.write("<br>" + Table_2);

for (var i = 0; i < Students.length; i++) {
var a = Students[i].indexOf("Ha Xuan Huy");
if (a != -1) {
    Students[i].splice(a, 1, "Hung");
}
}

var Table_3="<table>";
for (var y=0; y<Students.length; y++ ) { 
    Table_3 += "<tr >";
  for (var x=0; x<Students[y].length; x++ ) { 
    Table_3 += "<td>" + Students[y][x] + "</td>";
  }
  Table_3 += "</tr>";
}
Table_3 += "</table>";
document.write("<br>");

//Hiển thị ds
document.write("Đổi tên học viên có tên Huy thành Hùng: <br>");
document.write("<br>" + Table_3);
