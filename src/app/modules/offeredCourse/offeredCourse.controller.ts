import { NextFunction, Request, Response } from "express";
import { OfferedCourseService } from "./offeredCourse.service";

const getAllFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await OfferedCourseService.getAllFromDB(req);
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
    const result = await OfferedCourseService.getByIdFromDB(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
const insertIntoDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await OfferedCourseService.insertIntoDB(req);
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
    const result = await OfferedCourseService.updateOneInDB(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const deleteByIdFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await OfferedCourseService.deleteByIdFromDB(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseController = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB,
};
