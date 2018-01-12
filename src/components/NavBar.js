import { h } from "preact";
import { Link } from "preact-router/match";
import styles from "./NavBar.scss";
import I18n from "src/config/i18n";

import planningIcon from "src/assets/icons/nav/calendar.svg";
import mapIcon from "src/assets/icons/nav/placeholder.svg";
import profileIcon from "src/assets/icons/nav/home-button.svg";
import informationIcon from "src/assets/icons/nav/question-speech-bubble.svg";

export const NavBar = () => {
  return (
    <nav class={styles.navBar}>
      <div class={styles.nav}>
        <Link href="/planning">
          <div class={styles.navButton}>
            <img src={planningIcon} />
            <span>{I18n.t("nav.planning")}</span>
          </div>
        </Link>
        <Link href="/stations">
          <div class={styles.navButton}>
            <img src={mapIcon} />
            <span>{I18n.t("nav.map")}</span>
          </div>
        </Link>
        <Link href="/info">
          <div class={styles.navButton}>
            <img src={informationIcon} />
            <span>{I18n.t("nav.info")}</span>
          </div>
        </Link>
        <Link href="/profile">
          <div class={styles.navButton} id="profile">
            <img src={profileIcon} />
            <span>{I18n.t("nav.profile")}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
