import { useTheme, SelectMenu, Button, Box } from "@primer/components";

interface Scheme {
  name: string;
  value: string;
}

const SCHEMES: Array<Scheme> = [
  {
    name: "Light",
    value: "light",
  },
  {
    name: "Dark",
    value: "dark",
  },
  {
    name: "Dark Dimmed",
    value: "dark_dimmed",
  },
];

function ColorModeSwitcher() {
  const { setDayScheme, setNightScheme, colorScheme } = useTheme();

  const setScheme = (schemeValue: string) => {
    setDayScheme(schemeValue);
    setNightScheme(schemeValue);
  };

  const currentScheme = SCHEMES.find(
    (scheme) => scheme.value === colorScheme
  );

  return (
    <Box position="absolute" top={0} right={0} p={3}>
      <Box position="relative" display="flex" justifyContent="flex-end">
        <SelectMenu css={{}}>
          <Button variant="small" as="summary">
            {currentScheme?.name || "Unknown"}
          </Button>
          <SelectMenu.Modal align="right">
            <SelectMenu.List>
              {SCHEMES.map((scheme) => (
                <SelectMenu.Item
                  key={scheme.value}
                  href="#"
                  selected={scheme.value === colorScheme}
                  onClick={() => setScheme(scheme.value)}
                >
                  {scheme.name}
                </SelectMenu.Item>
              ))}
            </SelectMenu.List>
          </SelectMenu.Modal>
        </SelectMenu>
      </Box>
    </Box>
  );
}

export default ColorModeSwitcher;
