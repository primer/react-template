import { useTheme, SelectMenu, Button, Box } from '@primer/components'
import { SunIcon, MoonIcon } from '@primer/octicons-react'

function ColorModeSwitcher() {
    const { setDayScheme, setNightScheme, colorScheme, theme } = useTheme()

    const setScheme = (schemeValue) => {
        setDayScheme(schemeValue)
        setNightScheme(schemeValue)
    }

    const schemes = [
        {
            name: 'Light',
            value: 'light',
            icon: SunIcon,
        },
        {
            name: 'Light colorblind',
            value: 'light_protanopia',
            icon: SunIcon,
        },
        {
            name: 'Dark',
            value: 'dark',
            icon: MoonIcon,
        },
        {
            name: 'Dark colorblind',
            value: 'dark_protanopia',
            icon: MoonIcon,
        },
        {
            name: 'Dark high contrast',
            value: 'dark_high_contrast',
            icon: MoonIcon,
        },
        {
            name: 'Dark Dimmed',
            value: 'dark_dimmed',
            icon: MoonIcon,
        },
    ]

    const current = schemes.find((scheme) => scheme.value === colorScheme)

    return (
        <Box position="absolute" top={0} right={0} p={3}>
            <Box position="relative" display="flex" justifyContent="flex-end">
                <SelectMenu>
                    <Button as="summary" variant="small">
                        <current.icon />
                        <Box display="inline-block" ml={2}>
                            {' '}
                            {current.name}
                        </Box>
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
    )
}

export default ColorModeSwitcher
