import {sum} from "./helpers/sum.js";        
import {KiemTraSoDuong} from "./helpers/KiemTraSoDuong.js";     
import {KiemTraChanLe} from "./helpers/KiemTraChanLe.js";  
// - Hàm callback là một hàm được truyền dưới dạng đối số cho hàm khác
// - Hàm callback có thể được chạy sau khi những chức năng khác được kết thúc

// Ví dụ 1: dạng thường
// function ham1(){
//     console.log("Hàm 1");
// }

// function ham2(){
//     console.log("Hàm 2");
// }
// ham1();
// ham2(); 

// Ví dụ 2: Dạng callback
// function ham1(callback){
//     console.log("Hàm 1");
//     callback();
// }

// function ham2(){
//     console.log("Hàm 2");
// }

// Truyền hàm ham2() vào hàm ham1(), khi đó hàm callback của hàm 1 là ham2() 
// ham1(ham2);

// Ví dụ 3: 
sum(10, 20, KiemTraSoDuong);
sum(10, 15, KiemTraChanLe);

