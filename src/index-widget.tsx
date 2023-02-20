import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { WidgetProvider } from './widget/WidgetContext';
import Widget from "./widget/index";
import './assets/index.css';
import store from "./app/store";
import './i18n';
import { isDarkMode } from "./common/utils";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const hostId = new URLSearchParams(location.search).get("host") || 1;
// dark mode
if (isDarkMode()) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
root.render(
  hostId ? <Provider store={store}>
    <WidgetProvider>
      <Widget hostId={Number(hostId)} />
    </WidgetProvider>
  </Provider> : null
);