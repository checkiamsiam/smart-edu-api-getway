import express from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import validateRequest from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import { ManagementDepartmentValidation } from "./managementDepartment.validations";
import { ManagementDepartmentController } from "./managementDepartment.controller";

const router = express.Router();

router.get("/", ManagementDepartmentController.getAllFromDB);
router.get("/:id", ManagementDepartmentController.getByIdFromDB);

router.post(
  "/create",
  validateRequest(ManagementDepartmentValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  ManagementDepartmentController.insertIntoDB
);

router.put(
  "/update/:id",
  validateRequest(ManagementDepartmentValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  ManagementDepartmentController.updateOneInDB
);

router.delete(
  "/delete/:id",
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  ManagementDepartmentController.deleteByIdFromDB
);

export const managementDepartmentRoutes = router;
