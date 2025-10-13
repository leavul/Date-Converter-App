import { store } from "@/src/redux/store";
import DateConverterScreen from "@/src/screens/date-converter-screen";
import React from "react";
import { Provider } from "react-redux";

export default function Index() {
  return (
    <Provider store={store}>
      <DateConverterScreen />
    </Provider>
  );
}
