const app = require("express")();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const notFound = require("./middleware/404_handler");
const errorHandler = require("./middleware/error_handler");
const { port } = require("./config/connection");
const { router: posts } = require("./routes/posts");

app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

app.use("/posts/", posts);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`backend listening on port ${port}`);
});

module.exports = app;
