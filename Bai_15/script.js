// Tìm và tham chiếu đến phần tử button đầu tiên trong tài liệu html
var button = document.querySelector("button"); 

// Gán 1 hàm sử lí sự kiện onclick cho button
button.onclick = function () { 
    // Khi button được nhấn, hiển thị một thông báo với nội dung hello world
    alert("Hello world");
}