//Bước 1 Khai báo http module 
const http = require('http');
//bước 2: Khai báo port
/*
Note: muốn deploy lên hosting (Heroku)
thì cần phải set port với process.env.PORT
*/
const port = process.env.PORT || 3000;
//Bước 3: Tạo web server, set header + code, thêm nội dung cho web
const app = http.createServer((req, res) => {
    res.statusCode = 200; // HTTP_OK
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Chào mừng đến với bình nguyên vô tận !</h1>");   
});
//bước 4: chạy web bằng listen port.
app.listen(port);