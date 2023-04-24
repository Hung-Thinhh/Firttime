import db from '../models/index';
import CRUDServices from '../services/CRUD-services';
let getHomePage = async (req, res) => {
    try{
        let data = await db.User.findAll()
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    }catch(err){
        console.log(err);
    }
    
}

let getCRUD =  (req, res) => {
    return res.render('crud.ejs')
}
let postCRUD = async (req, res) => {
    let message = await CRUDServices.createNewUsers( req.body)
    console.log(message)
    return res.send('crud-ejs')
}

let displayGetCRUD = async (req, res) => {

    let data = await CRUDServices.getAllUser();
    console.log('===============----------')
    console.log(data)
    return res.render('displayCRUD.ejs', {
        dataTable: data
    })
}

let getEditCRUD = async (req, res) => {

    let userid = req.query.id;
    if(userid){
        let userdata = await CRUDServices.getUserInfoById(userid);
        console.log('===============')
        console.log(userdata)
        return res.render('EditCRUD.ejs', {
            user: userdata
        })

    }else{
        return res.send('data is found')
    }
}
let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDServices.updateUserData(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    })
    return res.send('update done')
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if(id){
        await CRUDServices.deleteUserById(id);
        return res.send('delete done')
    }else{
        return res.send('No delete')

    }
   

}

module.exports = {
    getHomePage : getHomePage,
    getCRUD : getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD:getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD:deleteCRUD
}