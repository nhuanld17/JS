/*
    sessionStorage là kho lưu trữ theo phiên, lưu trữ dữ liệu cho một phiên làm việc
    có nghĩa là dữ liệu sẽ bị mất khi người dùng tắt trình duyệt

    sessionStorage có 5 phương thức:
    + sessionStorage.setItem(): Thêm dữ liệu vào sessionStorage
    + sessionStorage.getItem(): Lấy dữ liệu từ sessionStorage
    + sessionStorage.removeItem(): Xóa dữ liệu ra khỏi sessionStorage
    + sessionStorage.clear(): Xóa toàn bộ dữ liệu ra khỏi sessionStorage
    + sessionStorage.key(): Lấy tên key của dữ liệu đang lưu trữ trong sessionStorage
*/

// Tắt trình duyệt, comment đoạn code dưới lại --> thấy rõ token đã bị xóa
sessionStorage.setItem("token","asdasdasdasdasdasdads");

/*
So sánh cookies, localStorage và sessionStorage
    - cookies:
    + Hết hạn (Expires): Sau khi tắt trình duyệt hoặc đặt thời gian sống thủ công
    + Có thể truy cập/lưu trữ ở cả clientSide và serverSide
    + Kích thước lưu trữ là 4 KB 

    - localStorage:
    + Hết hạn (Expires): Vô thời hạn 
    + Có thể truy cập và lưu trữ ở client Side 
    + Kích thước lưu trữ là 5 MB 

    - sessionStorage: 
    + Hết hạn: Sau khi tắt trình duyệt 
    + Có thể truy cập và lưu trữ ở Client Side 
    + Kích thước lưu trữ là 10 MB
*/