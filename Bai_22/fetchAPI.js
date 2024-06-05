/*
    - Phương thức Fetch dùng để gọi trên server thông qua API để lấy dữ liệu từ trên server trả về.
    - API hiểu đơn giản thì nó là một url để cho phép bên front end có thể giao tiếp với bên back end
    - Cú pháp

    fetch('http://example.com/movies.json')
        .then((reponse) => { // Xử lí đối tượng response
            return reponse.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
 */

    // Ví dụ
    fetch("https://dummyjson.com/products/category-list") // Gửi yêu cầu fetch
    .then((respone) => {
        return respone.json(); // Xử lí đối tượng respone, chuyển dữ liệu JSON được trả về thành 1 đối tượng JavaScript
    })
    .then((data) => {
        let html = "";
        data.forEach(element => {
            html += `
            <div class="category-item">${element}</div>
            `;
        });
        console.log(html); // In dữ liệu
        document.querySelector("#category").innerHTML = html;
    });