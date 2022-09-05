// Lấy 2 button và thẻ div
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var div = document.getElementById('content');

// Thiết lập click cho button 1
button1.onclick = function() {
    div.innerHTML = '<li>Điện thoại: +84 987918xxx</li> <li>Email: khoab1908333@student.ctu.edu.vn</li>';
};

// Thiết lập click cho button 2
button2.onclick = function() {
    div.innerHTML = '<li>Hẻm 216, đường 3/2, phường Xuân Khánh,<br> quận Ninh Kiều, thành phố Cần Thơ</li>';
};