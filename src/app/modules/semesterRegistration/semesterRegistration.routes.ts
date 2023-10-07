import express from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { SemesterRegistrationController } from "./semesterRegistration.controller";
import { SemesterRegistrationValidation } from "./semesterRegistration.validation";

const router = express.Router();

router.get("/", SemesterRegistrationController.getAllFromDB);

router.get(
  "/get-my-registration",
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.getMyRegistration
);

router.get(
  "/get-my-semester-courses",
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.mySemesterRegistrationCourses
);

router.get("/:id", SemesterRegistrationController.getByIdFromDB);

router.post(
  "/create",
  validateRequest(SemesterRegistrationValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  SemesterRegistrationController.insertIntoDB
);

router.post(
  "/enroll-into-course",
  validateRequest(SemesterRegistrationValidation.enrollIntoCourse),
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.enrollIntoCourse
);

router.post(
  "/withdraw-from-course",
  validateRequest(SemesterRegistrationValidation.withdrawFromCourse),
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.withDrawFromCourse
);

router.post(
  "/confirm-my-registration",
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.confirmRegistration
);

router.post(
  "/start-registration",
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.startRegistration
);

router.post(
  "/start-new-semester/:id",
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  SemesterRegistrationController.startNewSemester
);

router.put(
  "/update/:id",
  validateRequest(SemesterRegistrationValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  SemesterRegistrationController.updateOneInDB
);

router.delete(
  "/delete/:id",
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  SemesterRegistrationController.deleteByIdFromDB
);

export const semesterRegistrationRoutes = router;
