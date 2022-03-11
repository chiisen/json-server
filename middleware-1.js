// middleware-1.js
module.exports = function (req, res, next) {
  if (req.method === "POST") {
    let nowTime = new Date(Date.now())
    nowTime.toISOString().split("T")[0]
    console.log(`%c ${nowTime}------------------------Start-`, "background: #222; color: #bada55")
    console.log(req.body)
    console.log(`%c ${nowTime}--------------------------End-`, "background: #222; color: #bada55")

    // Converts POST to GET and move payload to query params
    // This way it will make JSON Server that it's GET request
    // @note POST 會修改原始的 json 設定檔案內容，改成 GET 就可以避免這樣的情況了。
    req.method = "GET"
    req.query = req.body
  }
  // Continue to JSON Server router
  next()
}
