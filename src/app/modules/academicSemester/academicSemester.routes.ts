import express from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicSemesterController } from "./academicSemester.controller";
import { AcademicSemesterValidation } from "./academicSemester.validations";

const router = express.Router();

router.get("/", AcademicSemesterController.getAllFromDB);
router.get("/:id", AcademicSemesterController.getByIdFromDB);

router.post(
  "/create",
  validateRequest(AcademicSemesterValidation.create),
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicSemesterController.insertIntoDB
);

router.put(
  "/update/:id",
  validateRequest(AcademicSemesterValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicSemesterController.updateOneIntoDB
);

router.delete(
  "/delete/:id",
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicSemesterController.deleteByIdFromDB
);

export const academicSemesterRoutes = router;
