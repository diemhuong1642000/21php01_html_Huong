function changeInfoMessi() {
	// có 3 việc
	// đổi hình ảnh
	document.getElementById('change-image').src = 'image/h1.jpg';
	// Đổi tên
	document.getElementById('change-name').innerHTML = 'Soong Joong Ki';
	// Đổi tuổi
	document.getElementById('change-age').innerHTML = '34 years old';
}
function changeInfoRonaldo() {
	// có 3 việc
	// đổi hình ảnh
	document.getElementById('change-image').src = 'image/h2.jpg';
	// Đổi tên
	document.getElementById('change-name').innerHTML = 'Soong Joong Ki';
	// Đổi tuổi
	document.getElementById('change-age').innerHTML = '36 years old';
}
function changeInfoMD() {
	// có 3 việc
	// đổi hình ảnh
	document.getElementById('change-image').src = 'image/midu.jpg';
	// Đổi tên
	document.getElementById('change-name').innerHTML = 'Midu';
	// Đổi tuổi
	document.getElementById('change-age').innerHTML = '34 years old';
}
function changeInfoNP() {
	// có 3 việc
	// đổi hình ảnh
	document.getElementById('change-image').src = 'image/np.jpg';
	// Đổi tên
	document.getElementById('change-name').innerHTML = 'Nhã Phương';
	// Đổi tuổi
	document.getElementById('change-age').innerHTML = '35 years old';
}
function changeInfo(name, image, age) {
	// có 3 việc
	// đổi hình ảnh
	document.getElementById('change-image').src = image;
	// Đổi tên
	document.getElementById('change-name').innerHTML = name;
	// Đổi tuổi
	document.getElementById('change-age').innerHTML = age;
}