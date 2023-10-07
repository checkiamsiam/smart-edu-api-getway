import express from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import validateRequest from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import { OfferedCourseClassScheduleValidation } from "./offeredCourseClassSchedule.validation";
import { OfferedCourseClassScheduleController } from "./offeredCourseClassSchedule.controller";

const router = express.Router();

router.get("/", OfferedCourseClassScheduleController.getAllFromDB);
router.get("/:id", OfferedCourseClassScheduleController.getByIdFromDB);

router.post(
  "/create",
  validateRequest(OfferedCourseClassScheduleValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseClassScheduleController.insertIntoDB
);

router.put(
  "/update/:id",
  validateRequest(OfferedCourseClassScheduleValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseClassScheduleController.updateOneInDB
);

router.delete(
  "/delete/:id",
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseClassScheduleController.deleteByIdFromDB
);

export const offeredCourseClassScheduleRoutes = router;
