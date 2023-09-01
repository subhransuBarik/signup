const { User } = require("../model/user");
const jwt = require("jsonwebtoken");
const fakeData = require('../data')

const register = async (req, res) => {
  try {
    const { name, dob, email, password } = req.body;
    if (!name || !dob || !email || !password)
      return res.status(400).json({ error: "all fields are required" });

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email))
      return res.status(400).json({ message: "enter a valid email." });

    const user = await User.findOne({ email: email });
    if (user) return res.status(400).json({ message: "user already exist" });

    await new User({ name, dob, email, password }).save();
    return res.status(200).json({ status: "success" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "failed to register" });
  }
};

const login = async (req,res)=>{
    try{
        const {email,password}= req.body;

        const user = await User.findOne({ email: email });
        if(!user)  return res.status(404).json({ message: "user needs to register first" });

        if(user.password === password){
            const token = jwt.sign({ email, password }, "USER");
            return res.status(200).json({ message: "Login successful", token });
        }else{
            return res.status(400).json({ error: "Invalid password" });
        }
    }catch(error){
        console.error(error);
        return res.status(500).json({ message: "failed to login" });
    }

}

const home = (req,res)=>{
    return res.status(200).json(fakeData);
}

module.exports = {
  register,
  login,
  home,
};
