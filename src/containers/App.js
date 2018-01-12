import { h, Component } from "preact";
import { connect } from "preact-redux";
import { HashRouter, Route } from "react-router-dom";
import NavBar from "src/components/NavBar";

import StationPage from "src/modules/stations/containers/StationPage";
import ProfilePage from "src/modules/profile/containers/ProfilePage";

export class App extends Component {
  componentWillMount() {
    if (typeof this.props.user.apiToken === "undefined") {
    }
  }
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Route component={StationPage} path="/stations" />
            <Route component={ProfilePage} path="/profile" />
          </div>
        </HashRouter>
        <NavBar />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authentication.user
});

export default connect(mapStateToProps)(App);
