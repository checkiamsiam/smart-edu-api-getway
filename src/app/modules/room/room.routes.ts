import express from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import validateRequest from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import { RoomController } from "./room.controller";
import { RoomValidation } from "./room.validation";

const router = express.Router();

router.get("/", RoomController.getAllFromDB);
router.get("/:id", RoomController.getByIdFromDB);

router.post(
  "/create",
  validateRequest(RoomValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  RoomController.insertIntoDB
);

router.put(
  "/update/:id",
  validateRequest(RoomValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  RoomController.updateOneInDB
);

router.delete(
  "/delete/:id",
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  RoomController.deleteByIdFromDB
);

export const roomRoutes = router;
