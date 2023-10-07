import { NextFunction, Request, Response } from "express";
import { RoomService } from "./course.service";

const getAllFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await RoomService.getAllFromDB(req);
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
    const result = await RoomService.getByIdFromDB(req);
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
    const result = await RoomService.insertIntoDB(req);
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
    const result = await RoomService.updateOneInDB(req);
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
    const result = await RoomService.deleteByIdFromDB(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const CourseController = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB,
};
