import { h, Component } from "preact";
import { connect } from "preact-redux";
import { Page } from "src/components/Page";
import { Header } from "src/components/Header";
import { Route, Link } from "react-router-dom";
import I18n from "src/config/i18n";
import styles from "./StationPage.scss";

import listIcon from "src/assets/icons/nav/listing-option.svg";
import mapIcon from "src/assets/icons/nav/map.svg";

import ListPage from "./ListPage";
import MapPage from "./MapPage";

export class StationPage extends Component {
  render({ match }) {
    return (
      <Page id="mapPage">
        <Header>
          <h1>{I18n.t("map.title")}</h1>
        </Header>
        <div class={styles.switch}>
          <Link
            class={match.url == "/stations/" ? styles.active : styles.link}
            to={`/stations/`}
          >
            <svg viewBox="0 0 32 32">
              <use xlinkHref={mapIcon} />
            </svg>
          </Link>
          <Link
            class={match.url == "/stations" ? styles.active : styles.link}
            to={`/stations/list`}
          >
            <svg viewBox="0 0 32 32">
              <use xlinkHref={listIcon} />
            </svg>
          </Link>
        </div>
        <main class={styles.main}>
          <div class={styles.mapContainer}>
            <Route path={`/stations/list`} component={ListPage} />
            <Route exact path={`/stations/`} component={MapPage} />
          </div>
        </main>
      </Page>
    );
  }
}

export default connect()(StationPage);
