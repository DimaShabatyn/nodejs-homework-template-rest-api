const { Router } = require("express");

const ctrl = require("../../controllers/contacts-controller");

const { schemas } = require("../../models/contact");

const { validateBody, isValidId } = require("../../middlewares");
const { authenticate } = require("../../middlewares");

const router = Router();
// router.use(authenticate);

router.get("/", authenticate, ctrl.getAllContacts);

router.get("/:id", authenticate, isValidId, ctrl.getContactById);

router.post("/", authenticate, validateBody(schemas.contactAddSchema), ctrl.addContact);

router.delete("/:id", authenticate, isValidId, ctrl.removeContact);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.contactAddSchema),
  ctrl.updateContact
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
