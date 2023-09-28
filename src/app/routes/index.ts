import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { StoreRoutes } from '../modules/vendorStore/store.route';


const router = express.Router();

const moduleRoutes = [
    { path: '/auth', route: AuthRoutes },
    { path: '/store', route: StoreRoutes },

];

//configure the routes
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;