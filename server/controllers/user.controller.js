import User from '../models/user';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getUsers(req, res) {
  User.find().sort('-role').exec((err, users) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ users });
  });
}

export function getUser(req, res) {
  User.findOne({ email: req.params.email }).exec((err, user) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else{
      res.json({ user });
  }
  });
}

export function addUser(req, res) {
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

export function addAlbum(req, res) {
  if (!req.body.album.title || !req.body.album.artist || !req.body.album.date || !req.body.album.rating || !req.body.album.comment ) {
    res.status(403).end();
  }

  const newAlbum = req.body.album;

    User.findOne({ email: req.params.email }).exec((err, user) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else{
      user.albums = [newAlbum, ...user.albums];
      user.save(function(err){
        if (err)
          return res.status(500).send(err);
      });
      res.json({ album: user.albums[0] });
    }
  });
}

