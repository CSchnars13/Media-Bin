import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
import * as SpotifyController from '../controllers/spotify.controller';
const router = new Router();

// Get all Users
router.route('/users').get(UserController.getUsers);

// Get one user by email
router.route('/users/:email').get(UserController.getUser);

// Add a new User
router.route('/users').post(UserController.addUser);

//Add album to user database
router.route('/users/:email').post(UserController.addAlbum);

router.route('/users').delete(UserController.deleteUsers);

router.route('/album/:title').get(SpotifyController.getAlbumArt);



export default router;