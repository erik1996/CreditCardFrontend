import { Card } from "../../types/card";
import { ApiMethodDeclaration } from "../types";

type ParamsData = undefined;

type ResponseData = Card[];

export const getCard: ApiMethodDeclaration<ParamsData, ResponseData> = () => ({
  url: "/card",
  method: "GET",
});
