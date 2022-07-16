import { FC, useState } from "react";
import Cards from "react-credit-cards";
import clsx from "clsx";

import { api } from "../../api/api";
import {
  formatCreditCardNumber,
  formatExpirationDate,
} from "../../utils/fromat-card-data";

import "react-credit-cards/es/styles-compiled.css";
import styles from "./add-card-popup.module.scss";

type Props = {
  setPopup: (v: boolean) => void;
  addNewData: (v: boolean) => void;
};

export const AddCardPopup: FC<Props> = ({ setPopup, addNewData }) => {
  const [number, setNumber] = useState("");
  const [holderName, setHolderName] = useState("");
  const [limit, setLimit] = useState(0);
  const [expirationDate, setExpirationDate] = useState("");
  const [error, setError] = useState<string | null>(null);

  const addCard = async (e: React.FormEvent<EventTarget>) => {
    setError(null);
    e.preventDefault();
    try {
      await api.card.addCard({
        cardNumber: number,
        cardHolderName: holderName,
        limit,
        expirationDate,
      });
      addNewData(false);
    } catch (err) {
      setError("Card Data is Incorrect");
    }
  };

  return (
    <div className={clsx(styles.addCardController)}>
      <div className={clsx(styles.addCardPopup)}>
        <div className={clsx(styles.addCardHeader)}>
          <h3 className={clsx(styles.addCardTitle)}>Add Credit Card</h3>
          <button
            className={clsx(styles.closeBtn)}
            onClick={() => setPopup(false)}
          >
            X
          </button>
        </div>
        <div className={clsx(styles.addCardContent)}>
          <form
            id="card-from"
            className={clsx(styles.form)}
            onSubmit={(e: React.FormEvent<EventTarget>) => addCard(e)}
          >
            <div className={clsx(styles.formGroup)}>
              <label htmlFor="number">Card Number</label>
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="1234 5678 1234 5678"
                pattern="[\d| ]{16,22}"
                value={number}
                required={true}
                onChange={(e) =>
                  setNumber(formatCreditCardNumber(e.target.value))
                }
              />
            </div>
            <div className={clsx(styles.formGroup)}>
              <label htmlFor="name">Card Holder Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Full Name"
                required={true}
                onChange={(e) => setHolderName(e.target.value)}
              />
            </div>
            <div className={clsx(styles.formGroup)}>
              <label htmlFor="expiry">Expiry Date</label>
              <input
                type="tel"
                name="expiry"
                className="form-control"
                placeholder="Valid Thru"
                pattern="\d\d/\d\d"
                value={expirationDate}
                required={true}
                onChange={(e) =>
                  setExpirationDate(formatExpirationDate(e.target.value))
                }
              />
            </div>
            <div className={clsx(styles.formGroup)}>
              <label htmlFor="limit">Card Limit</label>
              <input
                type="tel"
                name="limit"
                className="form-control"
                placeholder="Limit"
                pattern="[0-9]*"
                value={limit || " "}
                required={true}
                onChange={(e) => setLimit(parseInt(e.target.value, 10))}
              />
            </div>
            <span className={styles.errorMessage}>{error}</span>
          </form>
          <div className={clsx(styles.rccsCard)}>
            <Cards
              cvc=""
              expiry={expirationDate}
              name={holderName}
              placeholders={{ name: "Card Holder Name" }}
              number={number}
              rccs-size={400}
            />
            <div className={clsx(styles.btnContainer)}>
              <button form="card-from" type="submit">
                Add New Card
              </button>
              <button type="button" onClick={() => setPopup(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
