import express from "express";
import homeController from "../controllers/homeController";
import crudController from "../controllers/crudController";
import shopeeController from "../controllers/shopeeController";
import CartController from "../controllers/CartController";
let router = express.Router();


export default function initWebRoutes(app) {

  // admin crud
  router.get('/admin', crudController.getHomePage);
  router.get('/admin/user', crudController.getCRUD);
  router.post('/admin/create-user', crudController.handleCreateNewUser);
  router.post('/admin/post-crud', crudController.putCRUD);
  router.get('/admin/get-alluser', crudController.displayGetCRUD);
  router.get('/admin/edit-crud', crudController.getEditCRUD);
  router.post('/admin/put-crud', crudController.putCRUD);
  router.post('/admin/delete-crud', crudController.deleteCRUD);

  //cliend 
  router.get('/index', homeController.getIndex);
  router.get('/cart', homeController.getCart);
  router.get('/pay', homeController.getPay);
  router.get('/shop', homeController.getShop);
  router.get('/login', homeController.getLogin);
  router.get('/signup', homeController.getSignup);
  router.get('/khung-gio-san-sale', homeController.getKhung_gio_san_sale);
  router.get('/gi-cung-re-freeship', homeController.getGi_cung_re_freeship);
  router.get('/flash_sale', homeController.getFlash_sale);
  router.get('/Thoi-Trang-Nam', homeController.getThoi_Trang_Nam);








  // router.get('/signup', homeController.getSignup); 









  return app.use("/", router)
}
