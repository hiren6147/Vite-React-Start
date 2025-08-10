import { Provider } from "react-redux";

import { mainStore } from "../store";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={mainStore}>{children}</Provider>;
};
