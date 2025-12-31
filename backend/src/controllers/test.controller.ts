import { Request, Response } from "express";

export const fetchTestData = async (req: Request, res: Response) => {
  const data = {
    name: "Test Data",
    status: "Passed!",
  };

  return res.status(200).send({ message: "Success!", data });
};
