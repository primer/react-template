import { useTheme, ActionMenu, ActionList, Stack } from '@primer/react'
import { SunIcon, MoonIcon } from '@primer/octicons-react'

import styles from './ColorModeSwitcher.module.css'

function ColorModeSwitcher() {
    const { setDayScheme, setNightScheme, colorScheme } = useTheme()

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
        <Stack padding="normal" className={styles.container}>
            <Stack
                className={styles.buttonWrapper}
            >
                <ActionMenu>
                    <ActionMenu.Button size="small">
                        <current.icon />
                        <Stack className={styles.label}>
                            {' '}
                            {current.name}
                        </Stack>
                    </ActionMenu.Button>
                    <ActionMenu.Overlay align="right">
                        <ActionList showDividers>
                            <ActionList.Group selectionVariant="single">
                                {schemes.map((scheme) => (
                                    <ActionList.Item
                                        key={scheme.value}
                                        href="#"
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
            </Stack>
        </Stack>
    )
}

export default ColorModeSwitcher