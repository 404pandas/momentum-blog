const router = require("express").Router();

// get all playlists for homepage
router.get("/", async (req, res) => {
  try {
    res.render("index", {});
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message + "Error happened on / route" });
  }
});

router.get("/author", async (req, res) => {
  try {
    res.render("author", {});
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message + "Error happened on /author route" });
  }
});

// get single playlist by id
router.get("/index", async (req, res) => {
  try {
    res.render("index", {});
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message + "Error happened on /index route" });
  }
});

router.get("/page", (req, res) => {
  try {
    res.render("page", {});
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message + "Error happened on /page route" });
  }
});

router.get("/post", (req, res) => {
  try {
    res.render("post", {});
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message + "Error happened on /post route" });
  }
});

router.get("/tag", (req, res) => {
  try {
    res.render("tag", {});
  } catch (err) {
    res
      .status(500)
      .json({ message: err.message + "Error happened on /tag route" });
  }
});
module.exports = router;
