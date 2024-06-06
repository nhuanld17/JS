/*
    - Promise dùng để giải quyết vấn đề callback hell
    - CallBack hell là có nhiều hàm lồng nhau gây khó chịu, nguyên nhân gây ra tình trạng này là do: giả sử chạy được hàm b thì hàm a phải chạy xong, và để chạy được hàm c thì hàm b phải được chạy xong.
    - Promise có cách viết đơn giản hơn so với callback, mỗi hàm nằm trên một dòng nên sẽ dễ nhìn hơn.
    - Cú pháp:

    var promise = new Promise((resolve, reject)=>{
        //resolve(): Nếu thành công thì chạy vào hàm này
        //reject(): Nếu thất bại thì chạy vào hàm này
    });

    promise
        .then((success)=>{
            // Nếu thành công thì chạy vào đây
        })
        .catch((error)=>{
            // Nếu thất bại thì chạy vào đây
        })
        .finally(()=>{
            // Luôn luôn chạy vào đây
        })

    + new Promise: tạo mới 1 promise
    + resolve: là một hàm callback xử lí cho hành động thành công
    + reject: là 1 hàm callback xử lí cho hành động thất bại. 
    + .then: Nếu thành công thì chạy vào đây
    + .catch: Nếu thất bại chạy vào đây
    + .finally: Luôn luôn chạy vào đây  
*/
/* 
    var a = 10;
    var promise = new Promise((resolve, reject) => {
        if (a !== undefined && a !== null && a !== "") {
            resolve(a); // Thành công
        } else {
            reject(a);
        }
    });

    promise
        .then((success) =>{
            console.log(success + 10);// Chạy thành công thì vào hàm này, success chính là biến a
            return success + 10;
        })
        .then((success2) =>{
            console.log(success2 + 20);// Chạy thành công thì vào hàm này, success2 chính là biến a
            return success2 + 20;
        })
        .then((success3) =>{
            console.log(success3 + 30);// Chạy thành công thì vào hàm này, success3 chính là biến a
        })
        .catch((error) =>{
            console.log("Lỗi: "+error);
        })
        .finally(() =>{
            console.log("luôn luôn chạy vào đây");
        })
 */
/*
    Promise có 3 trạng thái:
    + Pending: Trạng thái ban đầu khi Promise được tạo. Promise đang chờ xử lý và chưa được hoàn thành (resolved) hoặc bị từ chối (rejected).
    + Fullfilled: Trạng thái khi Promise đã được hoàn thành thành công và giá trị đã sẵn sàng để sử dụng.
    + Rejected: Trạng thái khi Promise đã bị từ chối do có lỗi xảy ra, và lý do từ chối (error) đã được cung cấp.
 */    

/* 
    Ví dụ về pending:
    const myPromise = new Promise((resolve, reject) => {
        // Promise đang ở trạng thái pending
        setTimeout(() => {
            resolve("Operation was successful");
        }, 2000);
    })

    console.log(myPromise); // output: Promise {<pending>}
 */

/* 
    Ví dụ về Fulfilled:

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Operation was successful"); // Chuyển sang trạng thái fulfilled
        }, 2000);
    });

    myPromise
        .then((value) => {
            console.log(value);
        });
    console.log(myPromise); // Promise { <pending> }
    // Sau 2 giây: Promise {<pending>}
 */

/* 
    // Ví dụ về Reject
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Operation Failed"); // Chuyển sang trạng thái rejected
        }, 2000);
    });

    myPromise
        .catch((error) => {
            console.error(error); // In ra "Operation Failed"
        });
    console.log(myPromise); // Promise { <pending> }
    // Sau 2 giây: Promise { <rejected>: "Operation failed!" }
 */

/*
    - Promise.all: cho phép bạn xử lý nhiều Promise song song và chỉ tiếp tục khi tất cả các Promise đã được hoàn thành hoặc một trong số chúng bị từ chối. Nó nhận vào một iterable (thường là một mảng) các Promises và trả về một Promise mới (mảng giá trị).

    Cú pháp:


    Promise.all([promise1, promise2, ..])
        .then(([success1, success2, ...]) => {
            // Nếu tất cả các promise thành công thì chạy vào đây
        })
        .catch((error) => {
            // Chỉ cần 1 promise lỗi thì sẽ chạy vào đây
        })
        .finally(() => {
            // Luôn luôn chạy vào đây
        });
*/

/* 
    // VÍ DỤ:
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise1 resolved");
        }, 1000);
    });
    
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise2 resolved");
        }, 2000);
    });

    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise3 resolved");
        }, 3000);
    });

    Promise.all([promise1, promise2, promise3])
        .then((result) => {
            console.log(result); // In ra ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
        })
        .catch((error) => {
            console.error(error);
        });
 */

/* 
    // VÍ DỤ KHI CÓ 1 PROMISE BỊ TỪ CHỐI
    const promise1 = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("Result 1");
        }, 1000);
    });

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error in promise 2");
        }, 2000);
    }); 

    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Result 3");
        }, 3000);
    });

    Promise.all([promise1, promise2, promise3])
        .then((result) => {
            console.log(result); // Sẽ không được gọi trong trường hợp này
        })
        .catch((error) => {
            console.error(error); // In ra: "Error in promise2"
        })
 */
    