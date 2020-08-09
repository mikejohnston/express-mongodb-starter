const { db } = require("../config/connection");
const postsModel = db.get("posts");

// Get all posts
getAll = function (req, res) {
  postsModel.find({}, function (err, posts) {
    if (err) res.json(500, err);
    else res.json(posts);
  });
};

// Create a post
create = function (req, res) {
  var body = req.body;
  postsModel.insert(body, function (err, post) {
    if (err) res.json(500, err);
    else res.status(201).json(post);
  });
};

// Get a post
get = function (req, res) {
  var id = req.params.id;
  postsModel.find({ _id: id }, function (err, post) {
    if (err) res.json(500, err);
    else if (post) res.json(post);
    else res.send(404);
  });
};

// Update a post
update = function (req, res) {
  var id = req.params.id;
  var body = req.body;
  postsModel.findOneAndUpdate(
    { _id: id },
    { $set: body },
    { multi: false },
    function (err, post) {
      if (err) res.json(500, err);
      else if (post) res.json(post);
      else res.send(404);
    }
  );
};

// Delete a post
del = function (req, res) {
  var id = req.params.id;
  postsModel.remove({ _id: id }, function (err) {
    if (err) res.json(500, err);
    else res.sendStatus(204);
  });
};

module.exports = { getAll, get, create, update, del };
