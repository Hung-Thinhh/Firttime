import express from "express";
import homeController from "../controllers/homeController";
import UserController from "../controllers/UserController";
import shopeeController from "../controllers/shopeeController";
import CartController from "../controllers/CartController";
let router = express.Router();

const initApiRouter = (app) => {

    router.get('/Thoi-Trang-Nam/official_shop', shopeeController.getOfficial_shop);
    router.get('/Thoi-Trang-Nam/popular_collection', shopeeController.getPopular_collection);
    router.get('/Thoi-Trang-Nam/listRecommend', shopeeController.getThoitrangnam_rcm);
    router.get('/Thoi-Trang-Nam/search_items', shopeeController.getThoitrangnam_search_items);

    router.get('/item', homeController.getItem);
    router.get('/daily_discover', homeController.getDaily_discover);
    router.post('/post-signup', homeController.postSignup);
    router.post('/login', UserController.handleLogin);
    router.get('/is_from_login=true', UserController.checkLogin);
    router.get('/logOut', UserController.handleLogout);
    router.get('/user', UserController.getUser);
    router.get('/user', UserController.getInfoUser);
    router.get('/getSearch_suggestion', shopeeController.getSearch_suggestion);
    router.get('/getBatch_list_by_spaces', shopeeController.getBatch_list_by_spaces);
    router.get('/Flash_saleHome', shopeeController.getFlash_sale);
    router.get('/mall_shopsHome', shopeeController.getMall_shops);
    router.get('/recommend', shopeeController.getRecommend);
    router.get('/listRecommend', shopeeController.getPageRecommend);
    router.get('/top_products', shopeeController.getTop_products);
    router.get('/get_item', shopeeController.get_Item);
    router.get('/get_shop_info', shopeeController.getShopInfo);
    router.get('/get_shop_base', shopeeController.getShopbase);
    // router.get('/get_shop_categories', shopeeController.getShopbase);
    router.get('/get_reviews_item', shopeeController.getReviewsItem);
    router.get('/khung-gio-san-sale/firts_deal_0d', shopeeController.getFirts_deal_0d);
    router.get('/shop/get_categories', shopeeController.getShopCategories);
    router.get('/shop/get-Recomment', shopeeController.getShopRecomment);
    router.get('/shop/get-tab', shopeeController.getShopTab);
    router.get('/menu/search_filter', shopeeController.getMenu_Search_filter);
    router.get('/category_tree', shopeeController.getCategory_tree);
    router.post('/New_cart_item', CartController.New_cart_item);
    router.get('/Get_cart_item', CartController.get_cart_item);
    router.post('/Delete_cart_item', CartController.delete_cart_item);

    return app.use("/api", router);
}
export default initApiRouter;