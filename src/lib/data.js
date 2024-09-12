import { Post, User } from "./models";
import { connectDB } from "./utils";

export const getPosts = async () => {
  try {
    await connectDB();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log("Error getting posts: ", error); 
  }
};

export const getPost = async (slug) => {
  try {
    await connectDB();
    const post = await Post.find({ slug });
    return post;
  } catch (error) {
    console.log("Error getting post: ", error); 
  }
};

export const getUser = async (id) => {
  try {
    await connectDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log("Error getting user: ", error); 
  }
};

export const getUsers = async (id) => {
  try {
    await connectDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log("Error getting users: ", error); 
  }
};
