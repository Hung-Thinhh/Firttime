import db from "../models/index"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

let handleUserLogin = (PhoneNumber, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}

            let isExist = await checkUserPhoneNumber(PhoneNumber)
            if (isExist) {
                let userPhone = await db.User.findOne({
                    where: { phoneNumber: PhoneNumber },
                    attributes: ['phoneNumber', 'email', 'password', 'id'],
                    raw: true
                })
                let userName = await db.User.findOne({
                    where: { LoginName: PhoneNumber },
                    attributes: ['phoneNumber', 'email', 'password', 'id'],
                    raw: true
                })
                let user = userPhone || userName
                if (user) {
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
                        const token = jwt.sign({
                            id: user.id
                        }, 'mk');
                        userData.errcode = 0;
                        userData.errMessage = 'ok';
                        userData.token = token;

                        delete user.password;
                        userData.user = user;
                        console.log(userData);

                    } else {
                        userData.errcode = 3;
                        userData.errMessage = 'Wrong password'
                    }
                } else {
                    userData.errcode = 2;
                    userData.errMessage = 'User not found'
                }
            } else {
                userData.errcode = 1;
                userData.errMessage = 'your phone number is not in system database'
            }
            resolve(userData)

        } catch (error) {
            reject(error)
        }
    })
}

let checkUserPhoneNumber = (yourPhoneNumber) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userPhone = await db.User.findOne({
                where: { PhoneNumber: yourPhoneNumber }
            })
            let userName = await db.User.findOne({
                where: { LoginName: yourPhoneNumber }
            })
            let user = userPhone || userName
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (error) {
            reject(error)
        }
    })
}

let handleGetInfoUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}

            let isExist = await checkUserid(userId)
            if (isExist) {
                let user = await db.User.findOne({
                    where: { id: userId },
                    attributes: ['LoginName', 'phoneNumber', 'UserName', 'email', 'gender', 'Date'],
                    raw: true
                })
                if (user) {
                    userData.errcode = 0;
                    userData.errMessage = 'ok';
                    userData.user = user;
                    console.log(userData);


                } else {
                    userData.errcode = 2;
                    userData.errMessage = 'User not found'
                }
            } else {
                userData.errcode = 1;
                userData.errMessage = 'error'
            }
            resolve(userData)

        } catch (error) {
            reject(error)
        }
    })
}
let checkUserid = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin,
    checkUserPhoneNumber: checkUserPhoneNumber,
    handleGetInfoUser: handleGetInfoUser
}