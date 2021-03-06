import { h, Component } from "preact";
import { connect } from "preact-redux";
import { route } from "preact-router";
import { Page } from "src/components/Page";
import GoogleButton from "../components/GoogleButton";
import I18n from "src/config/i18n";

import styles from "./LoginPage.scss";

export class LoginPage extends Component {
  componentWillMount() {
    if (typeof this.props.user.apiToken !== "undefined") {
      route("/", true);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.user.apiToken !== "undefined") {
      route("/", true);
    }
  }

  render({ requestApiToken, handleGoogleLoginFailure }) {
    return (
      <Page>
        <main class={styles.main}>
          <div class={styles.logo} />
          <h3>Mobiliteit</h3>
          <div class={styles.login}>
            <GoogleButton
              requestApiToken={requestApiToken}
              handleGoogleLoginFailure={handleGoogleLoginFailure}
            />
          </div>
          <div class={styles.disclaimer}>
            <span>{I18n.t("login.disclaimer")}</span>
          </div>
        </main>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authentication.user
});

export default connect(mapStateToProps)(LoginPage);
