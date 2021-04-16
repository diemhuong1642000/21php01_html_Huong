
var myArray = ["Nam", "Nguyen", "Huy"];

console.log(myArray);
console.log(myArray.length);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
var i;
for (i=0;i<myArray.length;i++){
    document.write(i+1 +"." +myArray[i] +"<br>");
}
////
var myArray3 = [1,4,2,5,8,2,11,55,5,115];
var tg;
for (i = 0; i < myArray3.length -1; i++) {
    for (j = i + 1; j < myArray3.length; j++) {
        if (myArray3[i] > myArray3[j]) {
        
            tg = myArray3[i];
            myArray3[i] = myArray3[j];
            myArray3[j] = tg;
            
        }  
        
    }
}
document.write(myArray3);
document.write("<br>");
document.write(myArray3[0]*myArray3[myArray3.length-1]);
///bài 3
var myArray4 = [
    ['Nam', 1998,'nam@yahoo.com','0900392234'],
    ['Huong', 1998,'huong@yahoo.com','0900392234'],
    ['Huy', 1998,'huy@yahoo.com','0900392234'],

];
console.log(myArray4[1][2]);//Email
console.log(myArray4[2][3]);//SDT


   
    


