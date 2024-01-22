const User = require("../models/user.model");
const Order = require("../models/order.model");
const Post = require("../models/post.model")
const Product = require("../models/product.model")

const getCounts = async (req, res) => {
  try {
    const user_result = await User.aggregate([
      {
        $group: {
          _id: "$role",
          count: { $sum: 1 },
        },
      },
    ]);

    if (!user_result) {
      return res.status(400).json("error");
    }

    const orders_result = await Order.aggregate([
        {
          $group: {
            _id: null,
            count: { $sum: 1 },
          },
        },
      ]);
  
      if (!orders_result) {
        return res.status(400).json("error");
      }

    return res.status(200).json({user_result, orders_result});
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getAllUsers = async (req,res) => {
  try{
    const users = await User.find({});
    if(!users) return res.status(400).json({message: "error"});
    res.status(200).json(users);
  }
  catch(error){
    return res.status(500).json(error);
  }
}

const getAllPosts = async (req,res) => {
  try{
    const posts = await Post.find({}).populate({
      path: "user",
      select: ["name", "profile_picture"],
    });
    if(!posts) return res.status(400).json({message: "error"});
    res.status(200).json(posts);
  }
  catch(error){
    return res.status(500).json(error);
  }
}

const deletePost = async (req,res) => {
  try{
    const postId = req.params.postId;
    const isDeleted = await Post.findOneAndDelete({ _id: postId });

    if(!isDeleted){
      return res.status(400).json({ message: "Error Deleting Post" });
    }
    console.log(isDeleted)
    return res.status(200).json({ message: "Post Deleted" });
  }
  catch(error){
    return res.status(500).json(error);
  }
}

const deleteProduct = async (req,res) => {
  try{
    const productId = req.params.productId;
    const isDeleted = await Product.findOneAndDelete({ _id: productId });

    if(!isDeleted){
      return res.status(400).json({ message: "Error Deleting Product" });
    }
    console.log(isDeleted)
    return res.status(200).json({ message: "Product Deleted" });
  }
  catch(error){
    return res.status(500).json(error);
  }
}

module.exports = {
  getCounts,
  getAllUsers,
  getAllPosts,
  deletePost,
  deleteProduct
};
