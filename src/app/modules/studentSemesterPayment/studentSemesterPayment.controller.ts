import { NextFunction, Request, Response } from "express";
import { StudentSemesterPaymentService } from "./studentSemesterPayment.service";

const getMyPayment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await StudentSemesterPaymentService.getMyPayment(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

// const initiatePayment = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const result = await StudentSemesterPaymentService.initiatePayment(req);
//     res.send(result);;
//   } catch (error) {
//     next(error);
//   }
// };

// const completePayment = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const result = await StudentSemesterPaymentService.completePayment(req);
//     res.send(result);;
//   } catch (error) {
//     next(error);
//   }
// };

export const StudentSemesterPaymentController = {
  getMyPayment,
  // initiatePayment,
  // completePayment
};
