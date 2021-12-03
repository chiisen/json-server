# json-server
![伺服器](https://i.imgur.com/oIFoyj5.jpg)
3分鐘設定完 mock server  
使用情境:  
當與你合作的 server 功能還未完成  
你可以透過 json-server 輕鬆的模擬 server 的功能  

# 安裝
```shell
npm install -g json-server
```
![json-server 安裝](https://i.imgur.com/HEqW7lE.png)

# API 網址設定
建立一個 resp.json 檔案，內容如下:
```json
{
  "GetBalance": {
    "errorCode": 0,
    "errorMessage": "No Error",
    "data": {
      "balance": 1000
    }
  },
  "PlaceBet": {
    "errorCode": 0,
    "errorMessage": "No Error",
    "data": {
      "balance": 1000
    }
  }
}
```
GetBalance 為 API 名稱(/GetBalance)，{} 大括號內為要回傳的 json 內容

# API 轉址
建立 routes.json 檔案，內容如下:
```json
{
    "/User/GetBalance": "/GetBalance",
    "/Bet/PlaceBet": "/PlaceBet"
}
```
/User/GetBalance 會自動轉址到 /GetBalance

# 關閉 POST 修改 .json 問題
由於非 GET 方式會修改 resp.json 檔案內容，所以新增下面的 middleware，將所有的要求都改成 GET  方式
```javascript
// middleware-1.js
module.exports = function (req, res, next) {
  if (req.method === "POST") {
    // Converts POST to GET and move payload to query params
    // This way it will make JSON Server that it's GET request
    req.method = "GET";
    req.query = req.body;
  }
  // Continue to JSON Server router
  next();
};
```

# 設定伺服器
有些設定可以寫在 json-server.json 檔案內，如下:
```json
{
    "port": 4000,
    "routes": "routes.json",
    "middlewares": [
        "middleware-1.js"
    ]
}
```

# 啟動伺服器
由於 json-server.json 是預設檔名，所以只需要輸入 resp.json 的 API 設定，就能啟動服務
```shell
json-server resp.json
```
![run server](https://i.imgur.com/PSKDGV3.png)

