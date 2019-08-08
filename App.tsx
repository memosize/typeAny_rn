import React from "react";
import Navigator from "./src/container/root/StackNavigator";
import { YellowBox } from "react-native";
import NavigationService from "./src/container/root/NavigationServices";
import thunk from 'redux-thunk'
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import reducers from './src/reducer'
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader",
  "Require cycle:",
  "Setting a timer",
  "Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?"
]);
const store = createStore(reducers,compose(
  applyMiddleware(thunk),
)) 
export default class App extends React.Component {
  render() {
    return (
     <Provider store={store}>
        <Navigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
     </Provider>
    );
  }

  /** 组件加载完成，加载数据*/
  componentDidMount() {
   
  }
}
