import { NextFunction, Request, Response } from "express";
import { OfferedCourseSectionService } from "./offeredCourseSection.service";

const getAllFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await OfferedCourseSectionService.getAllFromDB(req);
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
    const result = await OfferedCourseSectionService.getByIdFromDB(req);
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
    const result = await OfferedCourseSectionService.insertIntoDB(req);
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
    const result = await OfferedCourseSectionService.updateOneInDB(req);
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
    const result = await OfferedCourseSectionService.deleteByIdFromDB(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseSectionController = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB,
};
