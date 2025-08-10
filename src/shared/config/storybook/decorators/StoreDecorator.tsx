import type { Decorator } from "@storybook/react-vite";

import { StoreProvider } from "@/app/providers";

export const StoreDecorator: Decorator = (Story, context) => {
  return (
    <StoreProvider>
      <Story {...context} />
    </StoreProvider>
  );
};
