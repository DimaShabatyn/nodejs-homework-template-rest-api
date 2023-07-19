const { Router } = require("express");

const { schemas } = require("../../models/user");
const { validateBody } = require("../../middlewares");
const AuthCtrl = require("../../controllers/auth-controller");
const { authenticate } = require("../../middlewares");

const router = Router();

router.post("/register", validateBody(schemas.registerSchema), AuthCtrl.register);

router.post("/login", validateBody(schemas.loginSchema), AuthCtrl.login);

router.get("/current", authenticate, AuthCtrl.getCurrent);

router.post("/logout", authenticate, AuthCtrl.logout);

router.patch(
  "/",
  authenticate,
  validateBody(schemas.updateSubscriptionSchema),
  AuthCtrl.updateSubscription
);

module.exports = router;