import { AddCard } from "../../types/card";
import { ApiMethodDeclaration } from "../types";

type ParamsData = AddCard;

type ResponseData = AddCard;

export const addCard: ApiMethodDeclaration<ParamsData, ResponseData> = (
  data
) => ({
  url: "/card",
  method: "POST",
  data: {
    ...data,
  },
});
