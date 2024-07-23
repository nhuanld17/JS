/* 
    LocalStograge là kho lưu trữ ở phía người dùng
    Lưu trữ dữ liệu vô thời hạn, dữ liệu sẽ được lưu trữ cho tới khi người dùng
    xóa lịch sử trình duyệt  
*/

/*
    Phương thức localStorage.setItem(key, value);
    Dùng để thêm dữ liệu vào localStorage, dữ liệu sẽ được lưu dưới dạng key-value 
    Cú pháp:
        localStorage.setItem(key, value);
*/

    const input = document.querySelector("input");
    const setItemButton = document.querySelector("#set-item");

    setItemButton.addEventListener("click", () => {
        let name = input.name; // Lấy giá trị từ thuộc tính name
        let value = input.value; // Lấy dữ liệu từ ô input

        if (value) {
            localStorage.setItem(name, value);
        }
    });

/*
    Phương thức localStorage.getItem(key)
    Dùng để lấy dữ liệu, tham số truyền vào là tên key muốn lấy
    dư liệu, nếu không tồn tại thì trả về null. 
    Cú pháp: 
    localStorage.getItem(key);
*/
    const result = document.querySelector("#result");
    const getItemButton = document.querySelector("#get-item");
    getItemButton.addEventListener("click", ()=>{
        let name = input.name;
        let value = localStorage.getItem(name);
        if (value) {
            result.innerHTML = value;
        } else {
            result.innerHTML =`Not found`;
        }
    });
/*
    Phương thức localStorage.removeItem(key);
    Dùng để xóa dữ liệu, tham số truyền vào là key muốn xóa
    Cú pháp:
        localStorage.removeItem(key);
*/
    const removeItemButton = document.querySelector("#remove-item");
    removeItemButton.addEventListener("click", ()=>{
        let name = input.name;
        localStorage.removeItem(name);
        result.innerHTML = "";
    });

/*
    Phương thức localStorage.clear(): Xóa toàn bộ dữ liệu của localStorage
    Cú pháp:
        localStorage.clear();
*/

    let count = 0;
    const buttonCount = document.querySelector("#count");

    buttonCount.addEventListener("click", ()=>{
        localStorage.setItem(`key${count}`,`value${count}`)
        count++;
    });

    const clearButton = document.querySelector("#clear-button");
    clearButton.addEventListener("click", ()=>{
        localStorage.clear();
    });

/*
    Phương thức localStorage.key(): Lấy ra key của localStorage, nếu không có thì trả về null. 
    Cú pháp: 
        localStorage.key(index);
        index : là vị trí của key đó bắt đầu từ 0, 1, 2,... 
*/

    const getKey = document.querySelector("#get-key");
    let i = 0;
    getKey.addEventListener("click", ()=>{
        let anyKey = localStorage.key(i);
        let keyResult = document.querySelector("#key-result");
        keyResult.innerHTML += `
            <p>key[${i}]:${anyKey}</p>
        `;
        i++;
    });

    // In ra danh sách key trong localStograge
    for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);
        const value = localStorage.getItem(key);
        console.log(key, value);
    }
