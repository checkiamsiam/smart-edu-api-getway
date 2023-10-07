import { NextFunction, Request, Response } from "express";
import { SemesterRegistrationService } from "./semesterRegistration.service";

const getAllFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await SemesterRegistrationService.getAllFromDB(req);
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
    const result = await SemesterRegistrationService.getByIdFromDB(req);
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
    const result = await SemesterRegistrationService.insertIntoDB(req);
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
    const result = await SemesterRegistrationService.updateOneInDB(req);
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
    const result = await SemesterRegistrationService.deleteByIdFromDB(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const getMyRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await SemesterRegistrationService.getMyRegistration(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const startRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await SemesterRegistrationService.startRegistration(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const mySemesterRegistrationCourses = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result =
      await SemesterRegistrationService.mySemesterRegistrationCourses(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const enrollIntoCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await SemesterRegistrationService.enrollIntoCourse(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const withDrawFromCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await SemesterRegistrationService.withDrawFromCourse(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const confirmRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await SemesterRegistrationService.confirmRegistration(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const startNewSemester = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await SemesterRegistrationService.startNewSemester(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const SemesterRegistrationController = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB,
  getMyRegistration,
  startRegistration,
  mySemesterRegistrationCourses,
  enrollIntoCourse,
  withDrawFromCourse,
  confirmRegistration,
  startNewSemester,
};
