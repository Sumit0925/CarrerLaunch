// import express from "express"
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const Post = require("./models/Post.model");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST","DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

mongoose.connect(
  "mongodb+srv://db01dinesh:ckVfDFqPuw28qjRC@cluster0.yibblrq.mongodb.net/"
);

const varifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json("Token Not available");
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json("token is wrong");
      } else {
        if (decoded.role === "admin") {
          next();
        } else {
          return res.json("not admin");
        }
      }
    });
  }
};

app.get("/dashboard", varifyUser, (req, res) => {
  res.json("success");
});

// app.get('/check-admin', varifyUser, (req, res) => {
//   if (req.user.role === 'admin') {
//       res.json({ isAdmin: true });
//       console.log(isAdmin)
//   } else {
//       res.json({ isAdmin: false });
//   }
// });

app.delete("/deleteUser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await UserModel.findByIdAndDelete({ _id: id });
    res.json({ message: "deleted successfully" });
  } catch (err) {
    console.error(err);
    res.json({ message: "failed" });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          const token = jwt.sign(
            { email: user.email, role: user.role },
            "jwt-secret-key",
            { expiresIn: "1d" }
          );
          res.cookie("token", token);
          return res.json({ Status: "success", role: user.role, token });
        } else {
          return res.json("the password is incorrect ");
        }
      });
    } else {
      return res.json("No record existed");
    }
  });
});

// Logout route
app.post("/logout", (req, res) => {
  // Destroy the session or perform any other logout logic if needed
  res.clearCookie("token"); // Clear the JWT token cookie
  return res.json({ Status: "success" });
});

app.post("/addPost", async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = new Post({
      title,
      content,
    });
    await newPost.save();
    res.json({
      message: "Post saved successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err,
    });
  }
});

app.get("/post", async (req, res) => {
  const posts = await Post.find({});
  res.json({
    allPosts: posts,
    message: "done successfully",
  });
});

app.delete("/post/:id", async (req, res) => {
  const id = req.params.id;
  if (id) {
    try {
      await Post.findByIdAndDelete(id);
      res.json({
        message: "post delete success",
      });
    } catch (err) {
      res.status(500).json({
        message: "Post deleted",
      });
    }
  }
});

app.get("/getUsers", (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getone/:id", async (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/register", async (req, res) => {
  const { name, email, password, rollno, branch } = req.body;
  try {
    const existingStudent = await UserModel.findOne({ rollno: rollno });
    if (existingStudent) {
      try {
        const hash = await bcrypt.hash(password, 10);

        existingStudent.name = name;
        existingStudent.email = email;
        existingStudent.branch = branch;
        existingStudent.password = hash;

        const updatedStudent = await existingStudent.save();
        return res.json({ status: "ok", data: updatedStudent });
      } catch (saveError) {
        console.error("Error saving student:", saveError);
        return res.json({
          status: "error",
          message: "Failed to update student",
        });
      }
    } else {
      return res.json({ status: "error", message: "No record existed" });
    }
  } catch (findError) {
    console.error("Error finding student:", findError);
    return res
      .status(500)
      .json({ status: "error", message: "Failed to find student" });
  }
});

// // Nodemailer setup
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',//smptp service
//   auth: {
//     user: 'your_email@gmail.com',//your email
//     pass: 'your_email_password',//password of email
//   },
// });

// // Function to send email notifications
// const sendEmailNotification = async (newPost) => {
//   const users = await User.find({});
//   const emails = users.map(user => user.email);

//   const mailOptions = {
//     from: 'your_email@gmail.com',//your email
//     to: emails,
//     subject: 'New Post Added',
//     text: `A new post titled "${newPost.title}" has been added. Check it out!`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// };


app.listen(3001, () => {
  console.log("running");
});
