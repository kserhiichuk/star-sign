import express from 'express';
import { UserController } from './user.controller';
import authMiddleware from '~/libs/middleware/auth.middleware';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

const userController = new UserController();

router.post('/auth/sign-up', userController.signUp);
router.post('/auth/sign-in', userController.signIn);
router.get('/auth/authenticated-user', authMiddleware, userController.getAuthenticatedUser);

router.patch('/users/:id', authMiddleware, upload.array('photos', 10), userController.patchUser);

export default router;
