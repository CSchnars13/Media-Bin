import User from '../models/user';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getUsers(req, res) {
  console.log("In the get users method");
  User.find().sort('-role').exec((err, users) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ users });
  });
}

export function getUser(req, res) {
  console.log("Entered get user");
  User.findOne({ email: req.params.email }).exec((err, user) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else{
      console.log("found user", user.email);
    res.json({ user });
  }
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addUser(req, res) {
  console.log("Made it to server side");
  if (!req.body.user.email || !req.body.user.password || !req.body.user.role) {
    res.status(403).end();
  }

  const newUser = new User(req.body.user);

  newUser.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    else{
      res.json({ user: saved });
    }
  });
}

