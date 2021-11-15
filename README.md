# json-server
mock server

# 安裝
```shell
npm install -g json-server
```

# API 網址設定
funky.json
```json
{
  "GetBalance": {
    "errorCode": 0,
    "errorMessage": "No Error",
    "data": {
      "balance": 1000
    }
  },
  "CheckBet": {
    "errorCode": 0,
    "errorMessage": "No Error",
    "data": {
      "balance": "CheckBet"
    }
  },
  "PlaceBet": {
    "errorCode": 0,
    "errorMessage": "No Error",
    "data": {
      "balance": "PlaceBet"
    }
  }
}
```

# API 轉址
routes.json
```json
{
    "/Funky/User/GetBalance": "/GetBalance",
    "/Funky/Bet/CheckBet": "/CheckBet",
    "/Funky/Bet/PlaceBet": "/PlaceBet"
}
```

# 關閉 POST 修改 .json 問題
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
json-server.json
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
```shell
json-server funky.json
```
