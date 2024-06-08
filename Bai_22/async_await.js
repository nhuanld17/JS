/* 
- async và await là các từ khóa trong JavaScript được giới thiệu trong ES2017 (ES8) để làm cho việc xử lý các tác vụ bất đồng bộ trở nên dễ đọc và dễ viết hơn. Chúng được sử dụng để làm việc với Promise một cách trực quan hơn so với việc sử dụng .then() và .catch().

- async là gì?
Từ khóa async được sử dụng để khai báo một hàm bất đồng bộ (asynchronous function).
Một hàm khai báo với async sẽ tự động trả về một Promise. Nếu hàm trả về một giá trị, giá trị đó sẽ được tự động gói trong một Promise được giải quyết (resolved). Nếu hàm ném ra một lỗi, lỗi đó sẽ là lý do (reason) của Promise bị từ chối (rejected).

- await là gì?
Từ khóa await chỉ có thể được sử dụng bên trong một hàm khai báo với async.
await tạm dừng việc thực thi của hàm async cho đến khi Promise được giải quyết, và sau đó trả về giá trị của Promise. Nếu Promise bị từ chối, await sẽ ném ra lỗi đó.
 */

/* 
    // VÍ DỤ TỔNG QUAN
    async function fetchData(url){
        try {
            let respone = await fetch(url); // Đợi fetch hoàn thành
            let data = await respone.json(); // Đợi chuyển đổi JSOn hoàn thành
            console.log(data);
            return data;
        } catch (error) {
            console.error('Error fetching data:', error); // Xử lý lỗi nếu có
        } 
    }

    fetchData("https://dummyjson.com/products/category-list");
*/

/* 
    // VÍ DỤ 1:
    const fetchAPI = async () => {
        // Dùng await để chờ cho đến khi Promise kết thúc và trả về kết quả
        const respone = await fetch("https://dummyjson.com/products/category-list");
        console.log(respone);
        // Dùng await để chờ cho đến khi Promise của response.json() kết thúc và trả về kết quả
        const result = await respone.json();
        console.log(result);
    }

    fetchAPI();
*/
    /* ÁP DỤNG VÀO GET CATEGORY và GET PRODUCT */

    const fetchAPI = async (url) => {
        // Dùng await để chờ cho đến khi Promise kết thúc và trả về kết quả
        const respone = await fetch(url);
        // Dùng await để chờ cho đến khi Promise của response.json() kết thúc và trả về kết quả
        const result = await respone.json();
        return result;
    }

    fetchAPI("http://localhost:3000/categories")
        .then((data) => {
            let htmls = "";
            data.forEach(element => {
                htmls += `
                    <div class="category-item">${element}</div> 
                `;
            });

            document.querySelector("#category").innerHTML = htmls;
        });
    
    fetchAPI("http://localhost:3000/products")
        .then((data) => {
            let htmls = "";
            data.forEach(element => {
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


