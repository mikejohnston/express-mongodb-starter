var express = require("express");
const router = express.Router();
const posts = require("../controllers/posts");

router.get("/", posts.getAll);
router.get("/:id", posts.get);
router.post("/", posts.create);
router.put("/:id", posts.update);
router.delete("/:id", posts.del);

module.exports = { router };
