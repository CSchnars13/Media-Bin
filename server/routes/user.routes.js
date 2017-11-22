import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();

// Get all Users
router.route('/users').get(UserController.getUsers);

// Get one user by email
router.route('/users/:email').get(UserController.getUser);

// Add a new User
router.route('/users').post(UserController.addUser);

router.route('/users/:email').post(UserController.addAlbum);

export default router;