import { useTheme, ActionMenu, ActionList } from '@primer/react'
import { SunIcon, MoonIcon, Icon } from '@primer/octicons-react'

import styles from './ColorModeSwitcher.module.css'

interface Scheme {
    name: string,
    value: string,
    icon: Icon,
}

function ColorModeSwitcher() {
    const { setDayScheme, setNightScheme, colorScheme } = useTheme()

    const setScheme = (schemeValue:string) => {
        setDayScheme(schemeValue)
        setNightScheme(schemeValue)
    }

    const schemes:Array<Scheme> = [
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

    const current:Scheme = schemes.find((scheme) => scheme.value === colorScheme) || schemes[0];

    return (
        <div className={styles.switcher}>
            <ActionMenu>
                <ActionMenu.Button size="medium">
                    <current.icon />
                    <div className={styles.btnText}> {current.name}</div>
                </ActionMenu.Button>
                <ActionMenu.Overlay align="end">
                    <ActionList>
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
        </div>
    )
}

export default ColorModeSwitcher
