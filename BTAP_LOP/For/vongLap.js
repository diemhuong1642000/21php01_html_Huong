
/* for(var i=0; i<10; i++){
    document.write(i);
    document.write("<br>");
}
for(var i=10; i> 10; i--){
    document.write(i);
    document.write("<br>");
} */
/* BT:
1. in ra dãy số từ 0 tới 100 
- Nếu số đó chia hết cho 3 thì in ra là: số x chia hết cho 3*/
for (i = 0; i <= 100; i++) {
    if (i % 15 == 0) {
        document.write("Số " + i + " chia hết cho 15 <br>");
    } else if (i % 3 == 0) {
        document.write("Số " + i + " chia hết cho 3 <br>");
    }
    else if (i % 5 == 0) {
        document.write("Số " + i + " chia hết cho 5 <br>");

    } else if (i % 5 != 0 && i % 3 != 0 && i % 15 != 0) {
        document.write("Số " + i + " không chia hết cho 3,5,15 <br>");
    }
}
document.write("<br>");
// Vòng lặp while và do while
var i = 10;
while (i > 10) {
    document.write(i + "<br>");
    i--;
}
//Vòng lặp do while
var i = 10;
do {
    document.write(i + "<br>");
    i--;
} while (i > 0);
// cho 1 số kt số đó :Bằng 2 thì in ra là Monday...8 thì in ra là Sunday, nếu không nằm trong từ 2 đến 8 thì in ra là No day.
/* document.write("<br>");
document.write("<br>");
var thu = 3;
switch (thu) {
    case 2:
        document.write("Monday");
        break;
    case 3:
        document.write("Tuesday");
        break;
    case 4:
        document.write("Wednesday");
        break;
    case 5:
        document.write("Thursday");
        break;
    case 6:
        document.write("Friday");
        break;
    case 7:
        document.write("Saturday");
        break;
    case 8:
        document.write("Sunday");
        break;
    default:
        document.write("no day");
        break;
} */

//bt cây kẹo: cách giải: khai báo biến kẹo, vỏ kẹo, số tiền, giá kẹo
var candy = 0; 
var candyShell = 0;
var price=200;
var money = 2000;
candy = money / price;
candyShell = candy;
while (candyShell >1 ){
    candyShell = candyShell - 2;
    candy++;
    candyShell++;
}
document.write("<br>");
document.write(candy +" cây keo");
/* while(money>price){
    if (soTien-200>=200){
        soTien=soTien-200;
    }
    document.write(keo +"keo");
} */

