const express = require("express");
const path = require("path");
const routes = require("./routes");

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./client/public")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

////Routes////
app.use(routes);

// router.use("*",function(req, res) {
//     res.sendFile(path.join(__dirname, "./client/public/index.html"))
// })


app.listen(PORT, function serverConnected() {
  console.log(`Karaoke Capital App listening on PORT ${PORT}`);
});
