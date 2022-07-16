import { FC } from "react";
import clsx from "clsx";

import { LeftNavbar } from "../left-navbar/left-navbar";

import styles from "./layout.module.scss";

type Props = {
  pageTitle?: string;
  setPopup: (v: boolean) => void;
};

export const Layout: FC<Props> = ({ children, pageTitle, setPopup }) => {
  return (
    <div className={clsx(styles.layout)}>
      <div className={clsx(styles.navbar)}>
        <LeftNavbar />
      </div>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.topHeader)}></div>
        <div className={clsx(styles.content)}>
          <div className={clsx(styles.headerContainer)}>
            <h2 className={clsx(styles.pageTitle)}>{pageTitle}</h2>
            <button
              className={clsx(styles.addBtn)}
              onClick={() => setPopup(true)}
            >
              Add a New Card
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
