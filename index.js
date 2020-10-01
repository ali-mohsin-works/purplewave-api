const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 17392;

app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(require("./routes"));
app.use(express.static(`${__dirname}/../build`));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started at: http://52.86.154.61:${PORT}`);
});
