import { NextFunction, Request, Response } from "express";
import { StudentEnrolledCourseService } from "./studentEnrolledCourse.service";

const getAllFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await StudentEnrolledCourseService.getAllFromDB(req);
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
    const result = await StudentEnrolledCourseService.getByIdFromDB(req);
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
    const result = await StudentEnrolledCourseService.insertIntoDB(req);
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
    const result = await StudentEnrolledCourseService.updateOneInDB(req);
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
    const result = await StudentEnrolledCourseService.deleteByIdFromDB(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const StudentEnrolledCourseController = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB,
};
