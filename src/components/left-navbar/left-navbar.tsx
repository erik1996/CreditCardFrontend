import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

import { AppRoutes } from "../../routes";

import styles from "./left-navbar.module.scss";

export const LeftNavbar: FC = () => {
  const location = useLocation().pathname;
  return (
    <div className={clsx(styles.leftNavbar)}>
      <h1 className={clsx(styles.title)}>Creditted</h1>
      <div className={clsx(styles.navbarContainer)}>
        <Link
          className={clsx(
            styles.navbarItem,
            location === AppRoutes.HOME && styles.navbarItemActive
          )}
          to={AppRoutes.HOME}
        >
          Credit Cards
        </Link>
      </div>
    </div>
  );
};
