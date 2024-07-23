/*
    - Closure là một hàm ở bên trong một hàm khác 
    - Nó có thể sử dụng các biến toàn cục, biến cục bộ của hàm cha và biến cục bộ của 
    chính nó. 
    - Nếu có các biến trùng tên thì closure sẽ ưu tiên thứ tự: biến cục bộ của chính nó,
    biến cục bộ của hàm cha, biến toàn cục. 
    - Nếu muốn return nhiều hàm closure thì bạn phải sử dụng 1 object, trong đó mỗi phần 
    tử sẽ là một closure 
    - Closure thay đổi được giá trị của biến toàn cục và cục bộ
*/

/*
const execute = () => {
    const sum = (a, b) => {
        return a + b;
    }

    return sum;
};

const calculate = execute();
console.log(calculate);
// (a, b) => {
//     return a + b;
// }

console.log(calculate(10, 20)); // 30
*/




/*
    Tại sao hàm execute() không chứa tham số nhưng vẫn có thể truyền vào 2 số 10 và 20 ở 
    dòng console.log(calculate(10, 20)); ??

    - Hàm execute:
    + Hàm execute là hàm mũi tên không nhận bất kì tham số nào
    + Bên trong execute, có 1 hàm mũi tên khác là sum, nhận hai tham số đầu vào là a và b,
    và trả về tổng của chúng. 
    + Cuối cùng, execute trả về chính hàm sum 

    - Gọi hàm execute và gán kết quả: 
    + Khi gọi hàm execute, nó sẽ thực hiện các lệnh trong thân hàm. 
    + Do execute trả về hàm sum nên giá trị của hàm execute sẽ là hàm sum, vậy nên, calculate
    bây giờ là một tham chiếu đến hàm sum

    - Gọi hàm calculate với tham số: 
    + Bây giờ, calculate là hàm sum và có thể gọi calculate(10, 20);
    + Khi gọi calculate(10, 20), thực chất ta đang gọi đến sum(10, 20);
    + Hàm sum trả về tổng của hai số và in ra kết quả 
*/

/*
const execute = () => {
    const sum = (a, b) => {
        return a + b;
    }

    const minus = (a, b) => {
        return a - b;
    }

    const multi = (a, b) => {
        return a * b;
    }

    const div = (a, b) => {
        return a / b;
    }
    return {
        tong: sum,
        hieu: minus,
        tich: multi,
        thuong: div
    }
};

const calculate = execute();
console.log(calculate);
// Bây giờ calculate không phải là một hàm mà là 1 object
// console.log(calculate(10, 20)); // TypeError: calculate is not a function
console.log(calculate.tich(10, 20)); // 200
console.log(calculate.tong(10, 20)); // 30 
console.log(calculate.hieu(10, 20)); // -10
console.log(calculate.thuong(10, 20)); // 0.5
*/


/* Closure thay đổi được giá trị của biến toàn cục và cục bộ */
const info = () => {
    let fullName = "Lee Dinh Nhuan";

    const getFullName = () => {
        return fullName;
    }

    const setFullName = (newFullName) => {
        fullName = newFullName;
    } 

    return {
        get: getFullName,
        set: setFullName
    }; 
};

const userInfo = info();
console.log(userInfo.get()); // Lee Dinh Nhuan
userInfo.set("Nhuan le");
console.log(userInfo.get()); // Nhuan le