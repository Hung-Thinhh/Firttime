import express from "express";
import homeController from "../controllers/homeController";
import UserController from "../controllers/UserController";
import shopeeController from "../controllers/shopeeController";
import CartController from "../controllers/CartController";
let router = express.Router();


export default function initWebRoutes(app) {
  router.get('/', homeController.getHomePage);
  router.get('/crud', homeController.getCRUD);
  router.post('/post-crud', homeController.putCRUD);
  router.get('/get-crud', homeController.displayGetCRUD);
  router.get('/edit-crud', homeController.getEditCRUD);
  router.post('/put-crud', homeController.putCRUD);
  router.get('/delete-crud', homeController.deleteCRUD);
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
  router.get('/api/Thoi-Trang-Nam/official_shop', shopeeController.getOfficial_shop);
  router.get('/api/Thoi-Trang-Nam/popular_collection', shopeeController.getPopular_collection);
  router.get('/api/Thoi-Trang-Nam/listRecommend', shopeeController.getThoitrangnam_rcm);
  router.get('/api/Thoi-Trang-Nam/search_items', shopeeController.getThoitrangnam_search_items);
  router.get('/item', homeController.getItem);
  router.get('/daily_discover', homeController.getDaily_discover);
  router.post('/post-signup', homeController.postSignup);
  router.post('/api/login', UserController.handleLogin);
  router.get('/is_from_login=true', UserController.checkLogin);
  router.get('/logOut', UserController.handleLogout);
  router.get('/user', UserController.getUser);
  router.get('/api/user', UserController.getInfoUser);
  router.get('/api/getSearch_suggestion', shopeeController.getSearch_suggestion);
  router.get('/api/getBatch_list_by_spaces', shopeeController.getBatch_list_by_spaces);
  router.get('/api/Flash_saleHome', shopeeController.getFlash_sale);
  router.get('/api/mall_shopsHome', shopeeController.getMall_shops);
  router.get('/api/recommend', shopeeController.getRecommend);
  router.get('/api/listRecommend', shopeeController.getPageRecommend);
  router.get('/api/top_products', shopeeController.getTop_products);
  router.get('/api/get_item', shopeeController.get_Item);
  router.get('/api/get_shop_info', shopeeController.getShopInfo);
  router.get('/api/get_shop_base', shopeeController.getShopbase);
  // router.get('/api/get_shop_categories', shopeeController.getShopbase);
  router.get('/api/get_reviews_item', shopeeController.getReviewsItem);
  router.get('/api/khung-gio-san-sale/firts_deal_0d', shopeeController.getFirts_deal_0d);
  router.get('/api/shop/get_categories', shopeeController.getShopCategories);
  router.get('/api/shop/get-Recomment', shopeeController.getShopRecomment);
  router.get('/api/shop/get-tab', shopeeController.getShopTab);
  router.get('/api/menu/search_filter', shopeeController.getMenu_Search_filter);
  router.get('/api/category_tree', shopeeController.getCategory_tree);
  router.post('/New_cart_item', CartController.New_cart_item);
  router.get('/api/Get_cart_item', CartController.get_cart_item);
  router.post('/api/Delete_cart_item', CartController.delete_cart_item);





  // router.get('/signup', homeController.getSignup); 









  return app.use("/", router)
}
