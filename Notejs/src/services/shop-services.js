import bcrypt from "bcryptjs";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);



let getAllGroupType = async() => {

  try {
      let group_type = await db.Group_Type.findAll({
          attributes: ['id', 'name'],
      raw: true,
      });
    return group_type;
  } catch (error) {
    console.log(error);
  }
};
let getAllTypeSp = async() => {

  try {
      let group_type = await db.Type_Sp.findAll({
          attributes: ['id','id_group_loai', 'name','children_type'],
      raw: true,
      });
    return group_type;
  } catch (error) {
    console.log(error);
  }
};

let getUserInfoById = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: userId },
        raw: true,
      });
      if (user) {
        resolve(user);
      } else {
        resolve({});
      }
    } catch (error) {
      reject(error);
    }
  });
};
let updateUserData = async(data) => {
    try {
      let user = await db.User.findOne({
        where: { id: data.id },
      });
      if (user) {
          user.userName= data.Name,
          user.address= data.address,
          user.gender= data.sex === "1" ? "1" : "0",
          user.birthDay= data.date,

        await user.save();
        return {
          EM: 'update user success',
          EC: 0,
          DT: []
      }
      } else {
        return {
          EM: 'the user is not found',
          EC: 0,
          DT: []
      }
      }
    } catch (error) {
      console.log(error);
    }

};

let deleteUserById = async(Userid) => {
  try {
      console.log(Userid);
      let user = await db.User.findOne({
        where: { id: Userid },
      });
      console.log(user);
      if (user) {
        await user.destroy();

        return {
          EM: 'delete user success',
          EC: 0,
          DT: []
        }
      } else {
        return {
          EM: 'the user is not found',
          EC: -1,
          DT: []
        }
      }
    } catch (error) {
      return {
        EM: 'the user is not found',
        EC: -1,
        DT: []
      }
    }

};

module.exports = {
    getAllGroupType: getAllGroupType,
  getUserInfoById: getUserInfoById,
  updateUserData: updateUserData,
  deleteUserById: deleteUserById,
  getAllTypeSp:getAllTypeSp
};
