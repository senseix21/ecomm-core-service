import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import authenticate from '../../middlewares/authenticate';
import validateRequest from '../../middlewares/validateRequest';
import { StoreController } from './store.controller';
import { StoreValidation } from './store.validation';

const router = express.Router();

router.post('/',
    authenticate(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.VENDOR),
    validateRequest(StoreValidation.storeValidationZodSchema),
    StoreController.create);

export const StoreRoutes = router;