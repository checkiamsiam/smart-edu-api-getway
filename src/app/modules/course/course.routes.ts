import express from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { CourseController } from "./course.controller";
import { CourseValidation } from "./course.validation";

const router = express.Router();

router.get("/", CourseController.getAllFromDB);
router.get("/:id", CourseController.getByIdFromDB);

router.post(
  "/create",
  validateRequest(CourseValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CourseController.insertIntoDB
);

router.put(
  "/update/:id",
  validateRequest(CourseValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CourseController.updateOneInDB
);

router.delete(
  "/delete/:id",
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CourseController.deleteByIdFromDB
);

export const courseRoutes = router;
