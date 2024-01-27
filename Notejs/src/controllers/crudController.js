import db from '../models/index';
import CRUDServices from '../services/CRUD-services';
import jwt from 'jsonwebtoken';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()
        return res.render('admin/homepage.ejs', {
            data: JSON.stringify(data),
            header:'header_admin'
        });
    } catch (err) {
        console.log(err);
    }

}

let getCRUD = async(req, res) => {
    try {
        let data = await db.User.findAll()
        let allUser = await CRUDServices.getAllUser();
        return res.render('admin/crud.ejs', {
            data: JSON.stringify(data),
            header: 'header_admin',
            data:allUser
        });
    } catch (err) {
        console.log(err);
    }
}
let handleCreateNewUser = async (req, res) => {
    let message = await CRUDServices.createNewUsers( req.body)
    console.log(message)
    return res.send('crud-ejs')
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDServices.getAllUser();
    return res.status(200).json({
        EM: 'get user seucess',
        EC: 0,
        DT: data
    })
}

let getEditCRUD = async (req, res) => {

    let userid = req.query.id;
    if (userid) {
        let userdata = await CRUDServices.getUserInfoById(userid);
        return res.render('EditCRUD.ejs', {
            user: userdata
        })

    } else {
        return res.send('data is found')
    }
}
let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDServices.updateUserData(data);
    return res.status(200).json({
        EM: allUsers.EM,
        EC: allUsers.EC,
        DT: allUsers.DT
    })
}

let deleteCRUD = async (req, res) => {
    let id = req.body.id;
    if (id) {
        let data = await CRUDServices.deleteUserById(id);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } else {
        return res.status(404).json( {
            EM: 'the user is not found',
            EC: -1,
            DT: []
          })

    }


}
let getIndex = async (req, res) => {
    return res.render('index.ejs')

}
let getCart = async (req, res) => {
    return res.render('cart.ejs')

}
let getPay = async (req, res) => {
    return res.render('pay.ejs')

}
let getShop = async (req, res) => {
    return res.render('shop.ejs')

}
let getLogin = async (req, res) => {
    return res.render('login.ejs')

}
let getSignup = async (req, res) => {
    return res.render('signup.ejs')

}
let postSignup = async (req, res) => {
    console.log(req.body)
    let message = await CRUDServices.createNewUsers(req.body)
    console.log(message)
    return res.sendStatus(message)
    // return res.render('signup_success.ejs', {
    //     PhoneNumber: message,

    // })


}
let getKhung_gio_san_sale = async (req, res) => {
    return res.render('flashsale.ejs')

}
let getGi_cung_re_freeship = async (req, res) => {
    return res.render('mua_la_freeship.ejs')

}
let getFlash_sale = async (req, res) => {
    return res.render('FlashSale_category.ejs')

}
let getThoi_Trang_Nam = async (req, res) => {
    return res.render('thoitrangnam.ejs')

}
let getItem = async (req, res) => {
    return res.render('item.ejs')

}
let getDaily_discover = async (req, res) => {
    return res.render('recomment_product.ejs')

}


module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    handleCreateNewUser:handleCreateNewUser,
    // postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
    getIndex: getIndex,
    getCart: getCart,
    getPay: getPay,
    getShop: getShop,
    getLogin: getLogin,
    getSignup: getSignup,
    postSignup: postSignup,
    getKhung_gio_san_sale: getKhung_gio_san_sale,
    getGi_cung_re_freeship: getGi_cung_re_freeship,
    getFlash_sale: getFlash_sale,
    getThoi_Trang_Nam: getThoi_Trang_Nam,
    getItem: getItem,
    getDaily_discover: getDaily_discover
}