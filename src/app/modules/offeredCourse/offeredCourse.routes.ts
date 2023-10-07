import express from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import validateRequest from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import { OfferedCourseController } from "./offeredCourse.controller";
import { OfferedCourseValidation } from "./offeredCourse.validation";

const router = express.Router();

router.get("/", OfferedCourseController.getAllFromDB);
router.get("/:id", OfferedCourseController.getByIdFromDB);

router.post(
  "/create",
  validateRequest(OfferedCourseValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseController.insertIntoDB
);

router.put(
  "/update/:id",
  validateRequest(OfferedCourseValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseController.updateOneInDB
);

router.delete(
  "/delete/:id",
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseController.deleteByIdFromDB
);

export const offeredCourseRoutes = router;
