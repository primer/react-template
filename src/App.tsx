import { ThemeProvider } from "@primer/components";
import { BaseStyles } from "@primer/components";

import Playground from "./Playground";
import ColorModeSwitcher from "./ColorModeSwitcher";
function App() {
  return (
    <ThemeProvider colorMode="auto">
      <BaseStyles>
        <Playground />
        <ColorModeSwitcher />
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
