import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";
import enUS from "antd/es/calendar/locale/en_US";
import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";

const token = {
  components: {
    Menu: {
      itemActiveBg: "#ffffff",
    },
    Table: {
      headerBg: "#F4F6FA",
      headerBorderRadius: "14px",
      headerColor: "#27549E",
    },
  },
  token: {
    colorPrimary: "#27549E",
    // colorBgContainerDisabled: "rgba(23, 140, 69, 0.30)"
    borderRadius: "8px",
  },
};

function App() {
  return (
    <ConfigProvider theme={token} locale={enUS}>
      <StyleProvider hashPriority="high">
        <Provider store={store}>
          <RouterProvider router={routes} />
        </Provider>
      </StyleProvider>
    </ConfigProvider>
  );
}
export default App;
