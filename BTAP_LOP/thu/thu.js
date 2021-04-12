function changeImage(){
    document.getElementById("change_image").src ="h2.jpg";
    document.getElementById("chang_name").innerHTML='Messi';
    document.getElementById("chang_old").innerHTML='34 years old';
}
function changeImagee(){
    document.getElementById("change_image").src ="h1.jpg";
    document.getElementById("chang_name").innerHTML='Ronaldo';
    document.getElementById("chang_old").innerHTML='30 years old';
}
function changeImages(){
    document.getElementById("change_image").src ="midu.jpg";
    document.getElementById("chang_name").innerHTML='Midu';
    document.getElementById("chang_old").innerHTML='32 years old';
}
function changeInfo(name, image, age){
    document.getElementById("change_image").src = image;
    document.getElementById("chang_name").innerHTML= name;
    document.getElementById("chang_old").innerHTML= age;
}