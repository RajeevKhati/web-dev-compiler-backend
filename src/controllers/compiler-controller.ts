import { Request, Response } from "express";
import { Code } from "../models/code-model";

export const saveCode = async (req: Request, res: Response) => {
  try {
    const { fullCode } = req.body;
    const newCode = await Code.create({
      fullCode,
    });
    if (!newCode) {
      return res.status(500).send({ error: "Error saving code" });
    }
    return res.status(201).send({ data: newCode._id });
  } catch (error) {
    return res.status(500).send({ error: "Something went wrong" });
  }
};

export const loadCode = async (req: Request, res: Response) => {
  try {
    const { urlId } = req.body;
    const codeById = await Code.findById(urlId);
    if (!codeById) {
      return res.status(400).send({ error: "Incorrect Id" });
    }
    return res.status(201).send({ data: codeById.fullCode });
  } catch (error) {
    return res.status(500).send({ error: "Error retrieving code" });
  }
};
