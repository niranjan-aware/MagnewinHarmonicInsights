const User = require('../../Models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postLogin = async (req, res) => {

  try {

    const { username, password } = req.body;
    const user = await User.findOne({ username: username.toLowerCase() });

    if (user && (await bcrypt.compare(password, user.password))) {
// Token generation using jsonwebtoken
      const token=jwt.sign(
      {
        userId:user._id,
        username
      },
        process.env.TOKEN_KEY, {
        expiresIn:"24h"
      }
      )

      // console.log("IF ENTERED");
      return res.status(200).json({
        userDetails: {
          username: user.username,
          email: user.email,
          user_id:user._id,
          token: token
        }
      });
    } else {
      // Invalid credentials
      return res.status(400).json({ error: 'Invalid Credentials, try again' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error occurred, try again' });
  }
};

module.exports = postLogin;
