export type Card = {
  _id: string;
  cardNumber: string;
  cardHolderName: string;
  expirationDate: string;
  balanace: number;
  limit: number;
};

export type AddCard = {
  cardNumber: string;
  cardHolderName: string;
  expirationDate: string;
  limit: number;
};
