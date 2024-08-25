import { MoonIcon, SunIcon } from '@primer/octicons-react'
import { ActionList, ActionMenu, Box, useTheme } from '@primer/react'

const ColorModeSwitcher = () => {
    const { setDayScheme, setNightScheme, colorScheme } = useTheme()

    const setScheme = (schemeValue: string) => {
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
            value: 'light_colorblind',
            icon: SunIcon,
        },
        {
            name: 'Dark',
            value: 'dark',
            icon: MoonIcon,
        },
        {
            name: 'Dark colorblind',
            value: 'dark_colorblind',
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
        <Box sx={{ position: 'absolute', top: 0, right: 0, p: 3 }}>
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
            >
                <ActionMenu>
                    <ActionMenu.Button size="small">
                        {current && (
                            <>
                                <current.icon />
                                <Box sx={{ display: 'inline-block', ml: 2 }}>
                                    {' '}
                                    {current.name}
                                </Box>
                            </>
                        )}
                    </ActionMenu.Button>
                    <ActionMenu.Overlay align="end">
                        <ActionList showDividers>
                            <ActionList.Group selectionVariant="single">
                                {schemes.map((scheme) => (
                                    <ActionList.Item
                                        key={scheme.value}
                                        selected={scheme.value === colorScheme}
                                        onSelect={() => setScheme(scheme.value)}
                                    >
                                        {scheme.name}
                                    </ActionList.Item>
                                ))}
                            </ActionList.Group>
                        </ActionList>
                    </ActionMenu.Overlay>
                </ActionMenu>
            </Box>
        </Box>
    )
}

export default ColorModeSwitcher
