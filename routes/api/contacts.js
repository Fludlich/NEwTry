const express = require("express");
const { authMiddleware } = require("../../middlewares");

const controller = require("../../controllers/contacts");
const { validateBody } = require("../../middlewares");
const { addSchema, updateFavoriteSchema } = require("../../schemas/contacts");
const { controllWrapper } = require("../../helpers");

const router = new express.Router();
router.use(authMiddleware);

router.get("/", controllWrapper(controller.listContactsController));
router.get("/:id", controllWrapper(controller.getContactByIDController));
router.post(
  "/",
  validateBody(addSchema),
  controllWrapper(controller.addContactController)
);
router.put(
  "/:id",
  validateBody(addSchema),
  controllWrapper(controller.updateByIDController)
);
router.delete("/:id", controllWrapper(controller.removeContactController));
router.patch(
  "/:id/favorite",
  validateBody(updateFavoriteSchema),
  controllWrapper(controller.updateFavoriteController)
);

module.exports = { postRouter: router };
