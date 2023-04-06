const express = require("express");
const router = new express.Router();
const controllWrapper = require("../../helpers/controllWrapper");
const { authMiddleware } = require("../../middlewares");
const { createPostController, getOwnPostsController, postsListController } = require("../../controllers/posts");

const { uploadMiddleware } = require("../../helpers/multerConfig");


router.post(
  "/create",
    uploadMiddleware.single("post"),
  authMiddleware,
  controllWrapper(createPostController)
);
// router.post("/login", controllWrapper(loginController));
router.get("/my", authMiddleware, controllWrapper(getOwnPostsController));
router.get("/news", authMiddleware, controllWrapper(postsListController));
// router.get("/logout", authMiddleware, controllWrapper(logout));
// router.get("/verify/:token", controllWrapper(verifaingEmailController));
// router.post("/verify", controllWrapper(resendVerifyingEmailController));
// router.patch(
//   "/avatars",
//   authMiddleware,
//   uploadMiddleware.single("avatar"),
//   controllWrapper(uploadController)
// );
// router.patch("/", authMiddleware, controllWrapper(updateUserInfoController));



module.exports = { postRouter: router };
