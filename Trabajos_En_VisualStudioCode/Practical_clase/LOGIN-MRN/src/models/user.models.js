import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const login = async (req, res) => {
  const { email, password } = req.body;
  //console.log(email,password,username)
  //res.send('registrando')

  try {
    const userFound = await User.findOne({ email });
    if (!userFound)
      return res.status(400).json({
        message: "User not found",
      });
    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Error in Credentiales" });

    const token = await createTokenAccess({ id: userFound._id });
    res.cookie("token", token);
    res.status(201).json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};

export default mongoose.model("User", userSchema);
