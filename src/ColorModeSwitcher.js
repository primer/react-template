import { useTheme, SelectMenu, Button, Box } from "@primer/components";

function ColorModeSwitcher() {
  const { setDayScheme, setNightScheme, colorScheme } = useTheme();

  const setScheme = (schemeValue) => {
    setDayScheme(schemeValue);
    setNightScheme(schemeValue);
  };

  const schemes = [
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

  const currentName = schemes.find(
    (scheme) => scheme.value === colorScheme
  ).name;

  return (
    <Box position="absolute" top={0} right={0} p={3}>
      <Box position="relative" display="flex" justifyContent="flex-end">
        <SelectMenu>
          <Button variant="small" as="summary">
            {currentName}
          </Button>
          <SelectMenu.Modal align="right">
            <SelectMenu.List>
              {schemes.map((scheme) => (
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
