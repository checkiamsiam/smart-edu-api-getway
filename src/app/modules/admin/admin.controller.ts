import { NextFunction, Request, Response } from "express";
import { AdminService } from "./admin.service";

const getAllFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await AdminService.getAllFromDB(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const getByIdFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await AdminService.getByIdFromDB(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const updateOneInDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await AdminService.updateOneInDB(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const AdminController = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
};
