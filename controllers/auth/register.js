const {User} = require('../../models/User');
const bcryptjs = require('bcryptjs');
const welcomeEmail = require('../../utils/welcomeEmail');
const randomstring = require('randomstring');

const createNewUser = async (req, res, next) =>{
    try{
        let {email, username, password} = req.body;
        if(!email || !username || !password) return res.status(400).json({success:false, msg: 'All fields are required'});

        let newUsername = username.toLowerCase().replace(/ /g, '');

        const user_name = await User.findOne({username: newUsername});
        if(user_name) return res.status(400).json({success:false, msg: 'Username already exists'});

        const user_email = await User.findOne({email});
        if(user_email) return res.status(400).json({success: false, msg: 'Email already exists'});

        let hashedPassword = bcryptjs.hashSync(password, 12);

        let secretToken = randomstring.generate();
        // console.log(hashedPassword)
        const newUser = new User({
            username: newUsername,
            email,
            password: hashedPassword,
            secretToken
        });

        await newUser.save();
        if(!newUser) return res.status(500).json({msg: 'An error has occurred'});

        await welcomeEmail(req, newUser.username, newUser.email, newUser.secretToken);

        res.status(201).json({
            success:true,
            msg: 'User saved successfully',
            user: newUser
        })



        // console.log(req.body);
    } catch (err){
        res.status(500).json({msg: err.message});
    }
}
module.exports = createNewUser;