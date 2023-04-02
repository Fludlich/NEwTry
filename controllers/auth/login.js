const { login } = require("../../services/authService");

const loginController = async (request, response) => {
  const { email, password } = request.body;
  const result = await login(email, password);
  const [token, user] = result.splice(" ");
  response.status(200).json({
    token: token,
    user: {
      email: user.email,
      login: user.login,
      avtar: user.avatar,
      // data: user
    },
  });
};

module.exports = { loginController };
