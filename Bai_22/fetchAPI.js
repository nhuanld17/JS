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

// Hàm để dùng chung cho GET CATEGORY và GET PRODUCT
const fetchAPI = (url) => {
    const result = fetch(url)
        .then((respone) => {
        return respone.json();
        })
        .then((data) => {
        console.log(data);
        return data;
        });
    return result;
};


    // Ví dụ
    // GET CATEGORY
    // fetch("https://dummyjson.com/products/category-list") // Gửi yêu cầu fetch
    // .then((respone) => {
    //     return respone.json(); // Xử lí đối tượng respone, chuyển dữ liệu JSON được trả về thành 1 đối tượng JavaScript
    // })
    // .then((data) => {
    //     let html = "";
    //     data.forEach(element => {
    //         html += `

    //         `;
    //     });
    //     console.log(html); // In dữ liệu
    //     document.querySelector("#category").innerHTML = html;
    // });

    // GET PRODUCT
    // fetch("https://dummyjson.com/products")
    //     .then((respone) => {
    //         return respone.json();
    //     })
    //     .then((data) => {
    //         console.log(data.products);
    //         let htmls = "";
    //         data.products.forEach((element) => {
    //             htmls += `
    //                 <div class="product-item">
    //                     <img src="${element.thumbnail}" alt="${element.title}">
    //                     <h3>${element.title}</h3>
    //                     <p>${element.price}</p>
    //                 </div> 
    //             `;
    //         });

    //         document.querySelector("#products").innerHTML = htmls;
    //     })

    /*
        // Sử dụng hàm fetchAPI ở trên áp dụng vào GET CATEGORY và GET PRODUCT
        fetchAPI("https://dummyjson.com/products/category-list") // Trả về đối tượng JS
        .then((data) => {
            let html = "";
            data.forEach((element) => {
            html += `
                    <div class="category-item">${element}</div>
                    `;
            });
            console.log(html); // In dữ liệu
            document.querySelector("#category").innerHTML = html;
        });

        fetchAPI("https://dummyjson.com/products") // Trả về đối tượng JS
        .then((data) => {
            let htmls = "";
            data.products.forEach((element) => {
                htmls += `
                    <div class="product-item">
                        <img src="${element.thumbnail}" alt="${element.title}">
                        <h3>${element.title}</h3>
                        <p>${element.price}</p>
                    </div> 
                `;
            });
            document.querySelector("#products").innerHTML = htmls;
        });
    */

    // GET PRODUCT 
    fetch("https://dummyjson.com/products")
        .then((respone) => {
            return respone.json();
        })
        .then((data) => {
            console.log(data.products);
            let html = "";
            data.products.forEach(element => {
                html += `
                    <div class = "product-item">
                        <img src="${element.thumbnail}" alt="${element.title}">      
                        <h3>${element.title}</h3>  
                        <p>${element.price}</p>
                    </div>
                `;
            });

            document.querySelector("#products").innerHTML = html;
        })
    