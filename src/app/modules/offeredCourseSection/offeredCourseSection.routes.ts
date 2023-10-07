import express from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import validateRequest from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import { OfferedCourseSectionController } from "./offeredCourseSection.controller";
import { OfferedCourseSectionValidation } from "./offeredCourseSection.validation";

const router = express.Router();

router.get("/", OfferedCourseSectionController.getAllFromDB);
router.get("/:id", OfferedCourseSectionController.getByIdFromDB);

router.post(
  "/create",
  validateRequest(OfferedCourseSectionValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseSectionController.insertIntoDB
);

router.put(
  "/update/:id",
  validateRequest(OfferedCourseSectionValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseSectionController.updateOneInDB
);

router.delete(
  "/delete/:id",
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseSectionController.deleteByIdFromDB
);

export const offeredCourseSectionRoutes = router;
