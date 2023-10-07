import { Request } from "express";
import { IGenericResponse } from "../../../interfaces/common";
import { CoreService } from "../../../shared/axios";

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(
    "/offered-course-sections",
    {
      params: req.query,
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.get(
    `/offered-course-sections/${id}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/offered-course-sections/create`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.put(
    `/offered-course-sections/update/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.delete(
    `/offered-course-sections/delete/${id}`,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    }
  );
  return response;
};

export const OfferedCourseSectionService = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB,
};
