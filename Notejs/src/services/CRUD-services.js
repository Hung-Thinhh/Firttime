import bcrypt from 'bcryptjs';
import db from '../models/index';
const salt = bcrypt.genSaltSync(10);


let createNewUsers = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordfrombcrypt = await hashUserPassword(data.password)
            await db.User.create({
                LoginName: data.LoginName,
                password: hashPasswordfrombcrypt,
                UserName: data.Name,
                address: data.address,
                email: data.Email,
                PhoneNumber: data.PhoneNumber,
                gender: data.sex === '1' ? 'male' : 'female',
                Date: data.date
            })

            resolve('ok created successfully');
        }catch (error) {
            reject(error);
        }
    })
   

}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try{
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        }catch(err){
            reject(err);
        }

    })
}

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw: true
            });
            resolve(users)
        } catch (error) {
            reject(error);
        }
    })
}

let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {id: userId},
                raw: true
            })
            if(user){
                resolve(user)
            }else{
                resolve({})
            }
        } catch (error) {
            reject(error)
        }
    })
}
let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {id: data.id},
            })
            if(user){
                user.email = data.email;
                user.UserName = data.UserName;
                user.address = data.address;
                user.PhoneNumber = data.PhoneNumber;
                user.gender = data.gender;

                await user.save();

                let  allUsers = await db.User.findAll();
                resolve(allUsers);
            }else{
                resolve()
            }
        } catch (error) {
            console.log(error)
        }
    })
}

let deleteUserById = (Userid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {id: Userid},
            })
            if(user){
            

                await user.destroy();

                
                resolve();
            }else{
                resolve()
            }
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createNewUsers: createNewUsers,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUserData: updateUserData,
    deleteUserById: deleteUserById
}