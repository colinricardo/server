import { Request, Response } from "express";
import prisma from "../prisma";
import { generateRandomId } from "../utils/utils";

const createUser = async (req: Request, res: Response) => {
  const { body } = req;
  const { email } = body;
  const id = generateRandomId();
  await prisma.user.create({ data: { id, email } });
  return res.status(200).send({ id });
};

const getUser = async (req: Request, res: Response) => {
  const { query } = req;
  const email = query.email as string;

  if (!email) {
    return res.status(400).send({ message: "Please provide an email." });
  }
  console.log({ email });

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return res
      .status(400)
      .send({ message: "Could not find a user with that email." });
  }

  return res.status(200).send({ user });
};

export default { createUser, getUser };
