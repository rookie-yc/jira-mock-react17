module.exports = (err, req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    console.log("走了这里");
    if (req.body.username === "jack" && req.body.password === "123456") {
      return req.json({
        user: {
          token: "123",
        },
      });
    } else {
      return res.status(400).json({ message: "用户名或者密码错误" });
    }
  }
  next();
};