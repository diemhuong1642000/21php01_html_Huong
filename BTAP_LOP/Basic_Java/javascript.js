 
/*  javascript
 Quy tắc đặt tên biến:
 - Không có ký tự đặc biệt
 - Không trùng với từ khóa của ngôn ngữ lập trình
 - Sử dụng chữ cái hoa hoặc thường, hoặc số hoắc dấu gạch dưới
 - Không được bắt đầu bằng số
 - Có ý nghĩa, bằng tiếng anh.
 - Đặt theo quy tắc camel hoặc snake
 Bài tập:
 Đặt tên biến cho:  Họ tên(HoTen), 
                    tuoi(Tuoi), 
                    ngay sinh(NgaySinh), 
                    tỉnh thành(TinhThanh)
2. Hàm trong javascript */
/* function */
function totalStudent(){
    return 50;
}
function total(x,y){
    return x+y;
}
function totalSum(a,b){
    document.write(a+b);
}
totalSum(7,8);
document.write("<h1>Demo show data</h1>");
document.getElementById("demo").innerHTML="Test show data again";
/* alert('Test show'); */
console.log("test thu");
/* khai báo biến trong javascript  */
var userName;
var myAge=20;

/* Câu điều kiện trong javascripts */
/* if (điều kiện) {
    Nếu điều kiện đúng thì thực hiện câu lệnh, nếu sai thì không thực hiện
} */
/* if(điều kiện){
    Nếu đúng thì thực hiện câu lệnh ở đây
}else{
    Nếu sai thì thực hiện câu lệnh ở đây
} */
/* if(điều kiện 1){
    Nếu dk1 đúng thì thực hiện câu lệnh ở đây
}else if(điều kện 2){
    Nếu dk2 đúng thì thực hiện câu lệnh ở đây
}else {
    Nếu dk 1 và 2 sai thì thực hiện câu lệnh ở đây.
} */

/* Câu điều kiện Switch case */
/* switch (biến) {
    case giá trị 1:
        Nếu thảo giá trị 1 thì thực hiện câu lệnh ở đây
        break;
    case giá trị 2  :
        Nếu thảo giá trị 2 thì thực hiện câu lệnh ở đây
        break;
    default:
        Nếu không thỏa tất cả các giá trị trên thì thực hiện câu lệnh ở đây.
        break;
} */

/* BT: Khai báo 2 biến ngày và tháng và cho giá trị ban đầu của 2 biến đó
- Nếu tháng 1,3,5,7,8,10,12 thì in ra là tháng x có 31 ngày
- Nếu tháng ;à 4,6,9,11, thì in ra là: tháng x có 30 ngày
- Nếu tháng là 2 thì tùy thuộc vào năm nhuận 28 hay 29 ngày. */
/* int thang;
switch (thang) {
    case 1,3,5,7,8,10,12:
        System.out.printf("Tháng %d có 30 ngày",thang);
    default:
        break;
}
 */
