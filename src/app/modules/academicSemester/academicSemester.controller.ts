import { NextFunction, Request, Response } from "express";
import { AcademicSemesterService } from "./academicSemester.service";

const insertIntoDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await AcademicSemesterService.insertIntoDB(req);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const getAllFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await AcademicSemesterService.getAllFromDB(req);
    res.send(result);
  } catch (err) {
    next(err);
  }
};
const updateOneIntoDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await AcademicSemesterService.updateOneIntoDB(req);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const getByIdFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await AcademicSemesterService.getByIdFromDB(req);
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
    const result = await AcademicSemesterService.deleteByIdFromDB(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = {
  insertIntoDB,
  getAllFromDB,
  updateOneIntoDB,
  getByIdFromDB,
  deleteByIdFromDB,
};
