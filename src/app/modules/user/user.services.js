const User = require("./user.model");

const creatUserIntoDB = async (payload) => {
  const result = await User.create(payload);
  return result;
};

// get all all

const getAllUsersFromDB = async () => {
  const result = await User.find();
  return result;
};

const updateUserIntoDB = async (id, payload) => {
  const result = await User.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

module.exports = {
  UsersSerivces: {
    creatUserIntoDB,
    getAllUsersFromDB,
    updateUserIntoDB,
  },
};
