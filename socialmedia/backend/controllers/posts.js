const pool = require("../models/db");


const getUserPosts=(req,res)=>{
const userId =req.query.userId
const query =`SELECT posts FROM users WHERE users.id=${userId} AND users.is_deleted = 0 `
pool.query(query)
.then((result)=>{
    res.status(200).json({
        success: true,
        massage: "All Posts",
        result: result.rows,
    });
})
.catch ((err) => {
    res.status(500).json({
      success: false,
      massage: "Server error",
      err: err,
    });
  });
}

 
const addPost= (req,res)=>{
const userId= req.params.userId
    const {posts}=req.body

 
const query =`UPDATE users SET posts = array_append(posts, '${posts}') WHERE users.id=${userId} AND users.is_deleted = 0 RETURNING * `
pool.query(query)
.then((result)=>{
    res.status(200).json({
        success: true,
        massage: "Post created",
        result: result.rows,
    });
})
.catch ((err) => {
    res.status(500).json({
      success: false,
      massage: "Server error",
      err: err,
    });
  });
}


const removePost=(req,res)=>{
    const userId=req.params.userId
    const {posts} =req.body
    const query =`UPDATE users SET posts = array_remove(posts, '${posts}') WHERE users.id=${userId} AND users.is_deleted = 0 RETURNING * `
    pool.query(query)
    .then((result)=>{
        res.status(200).json({
            success: true,
            massage: "Post created",
            result: result.rows,
        });
    })
    .catch ((err) => {
        res.status(500).json({
          success: false,
          massage: "Server error",
          err: err,
        });
      });
}


const updatePost=(req,res)=>{

    const userId=req.params.userId
    const {posts , postNum} =req.body
    const query =`UPDATE users SET posts[${postNum}]='${posts}'  WHERE users.id=${userId} AND users.is_deleted = 0 RETURNING * `
    pool.query(query)
    .then((result)=>{
        res.status(200).json({
            success: true,
            massage: "Post created",
            result: result.rows,
        });
    })
    .catch ((err) => {
        res.status(500).json({
          success: false,
          massage: "Server error",
          err: err,
        });
      });

}

module.exports={getUserPosts,addPost,removePost,updatePost}