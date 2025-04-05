function toUserResponse(userModel) {
    return {
      userId: userModel.userId,
      name: userModel.name,
      email: userModel.email,
    };
  }
  
  function toUserResponseList(userModels) {
    return userModels.map(toUserResponse);
  }
  
  module.exports = {
    toUserResponse,
    toUserResponseList
  };