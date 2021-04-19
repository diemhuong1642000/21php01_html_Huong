
var data = [];

//Hiển thị
function viewData(){
    var list = this.data;
    for (var i = 0;i< list.length;i++){
        console.log(data[i].name);
    }
    
}
// Thêm mới
function addData(){
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value; 

    var item ={
        name : name,
        age  : age,
        email : email,
        address : address,
    };
    this.data.push(item);
    console.log(this.data);
}