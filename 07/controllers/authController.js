const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if(!user || !pwd) return res.status(400).json({'message': 'User and password are required.'});

    const foundUser = User.findOne({ username: user }).exec();
    if(!foundUser) return res.sendStatus(401); //Unauthorized
    // Evaluate password
    const match = await bcrypt.compare(pwd, foundUser.password);
    if(match) {
        const roles = Object.values(foundUser.roles);
        // create JWTs
        const accessToken = jwt.sign(
          { 
            "UserInfo": {
              "username": foundUser.username,
              "roles": roles
            }            
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '30s' }
        );
        const refreshToken = jwt.sign(
          { "username": foundUser.username },
          process.env.REFRESH_TOKEN_SECRET,
          { expiresIn: '1d' }
        );
        // Saving refreshToken with current user
        try {
          foundUser.refreshToken = refreshToken;
          const result = await foundUser.save();
          console.log(result);
          
          res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000, sameSite: 'None', secure: true });
          res.json({ accessToken });
        } catch(err) {
          console.log(err);
          res.sendStatus(401);
        }

    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin }