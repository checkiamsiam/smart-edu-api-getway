import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await UserService.createStudent(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const createFaculty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await UserService.createFaculty(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.createAdmin(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createStudent,
  createFaculty,
  createAdmin,
};
