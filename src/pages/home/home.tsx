import { FC, useEffect, useState } from "react";
import clsx from "clsx";

import { api } from "../../api/api";
import { AddCardPopup } from "../../components/add-card-popup/add-card-popup";
import { Layout } from "../../components/layout/layout";
import { Card } from "../../types/card";

import styles from "./home.module.scss";

export const Home: FC = () => {
  const [popup, setPopup] = useState(false);
  const [cards, setCards] = useState<Card[] | null>(null);

  const getCardList = async () => {
    const { data } = await api.card.getCard();
    setCards(data);
  };

  const addNewData = () => {
    getCardList();
    setPopup(false);
  };

  useEffect(() => {
    getCardList();
  }, []);

  return (
    <Layout pageTitle="Credit Cards" setPopup={setPopup}>
      <div className={clsx(styles.table)}>
        <div className={clsx(styles.tableHeeader)}>
          <div className={clsx(styles.tableHeeaderColumn)}>Card Number</div>
          <div className={clsx(styles.tableHeeaderColumn)}>Card Holder</div>
          <div className={clsx(styles.tableHeeaderColumn)}>Expiry Date</div>
          <div className={clsx(styles.tableHeeaderColumn)}>Card Limit</div>
          <div className={clsx(styles.tableHeeaderColumn)}>Balance</div>
        </div>
        <div className={clsx(styles.tableContent)}>
          {cards?.map((item) => (
            <div className={clsx(styles.tableContentRow)} key={item._id}>
              <div className={clsx(styles.tableContentColumn)}>
                {item.cardNumber}
              </div>
              <div className={clsx(styles.tableContentColumn)}>
                {item.cardHolderName}
              </div>
              <div className={clsx(styles.tableContentColumn)}>
                {item.expirationDate}
              </div>
              <div className={clsx(styles.tableContentColumn)}>
                {item.limit}
              </div>
              <div className={clsx(styles.tableContentColumn)}>
                {item.balanace}
              </div>
            </div>
          ))}
        </div>
      </div>
      {popup && <AddCardPopup setPopup={setPopup} addNewData={addNewData} />}
    </Layout>
  );
};
