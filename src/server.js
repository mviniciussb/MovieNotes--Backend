const routes = require("./routes/index");
const express = require("express");
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors())
app.use(routes);

const PORT = 5555;
app.listen(PORT, () => console.log(`The server is running on port ${PORT}.`));
