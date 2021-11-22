const { User } = require('../../models/User');


const confirmUserEmail = async (req, res, next)=>{
    let {secretToken}= req.body;

    if(!secretToken) return res.status(400).json({success:false, msg: 'Please enter a secret token'});

    const userWithToken = await User.findOne({secretToken});
    if(!userWithToken) return res.status(404).json({success:false, msg: 'Invalid token, no user with this secret token'});

    userWithToken.confirmed = true;
    await userWithToken.save();

    return res.status(200).json({success:true, msg: 'User account confirmed'});

}

module.exports = confirmUserEmail;