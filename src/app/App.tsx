import { Suspense } from "react";

import { AppRouter, StoreProvider } from "./providers";

function App() {
  return (
    <Suspense fallback={<></>}>
      <StoreProvider>
        <AppRouter />
      </StoreProvider>
    </Suspense>
  );
}

export default App;
