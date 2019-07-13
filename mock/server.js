const express = require("express");
const bodyParse = require("body-parser");
const mockMiddleware = require("luobo-mock-middleware");

const app = express();
const port = "2019";

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

// mock 图片静态配置
app.use("/static", express.static(__dirname + "/images"));
app.use(mockMiddleware());

app.listen(port, function() {
  console.log(`Server running on http://localhost:${port}`);
});
