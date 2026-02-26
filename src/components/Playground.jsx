import { Stack, Text, Link } from '@primer/react'
import {
    MarkGithubIcon,
    CheckIcon,
    CommentIcon,
    SmileyIcon
} from '@primer/octicons-react'

import MonaLoadingImage from '../images/mona-loading.gif'
import styles from './playground.module.css'

function Playground() {
    /*
    WELCOME TO MONA's 😽🐙 PLAYGROUND
    Delete everything in here or play with the existing Mona playground code to get familiar with Primer React.
    Documentation: https://primer.style/react
    Documentation colors: https://primer.style/primitives/colors
  */

    return (
        <div
            className={styles.container}
        >
            <MarkGithubIcon size={24} />
            <Stack
                padding="spacious"
                className={styles.contentBox}
            >
                <CodeLine icon={CheckIcon} iconColor="success.fg">
                    Mona's playground successfully initialised...
                </CodeLine>
                <CodeLine icon={CommentIcon} iconColor="accent.fg">
                    Visit <Text className={styles.warningText}>src/Playground.js</Text>{' '}
                    and start building your own layouts using Primer.
                </CodeLine>
                <div className={styles.monaWrapper}>
                    <img
                        src={MonaLoadingImage}
                        alt="mona"
                        width={48}
                        height={48}
                    />
                </div>
            </Stack>
            <Footer />
        </div>
    )
}

function CodeLine({ icon: IconComponent, iconColor, children }) {
    return (
        <Stack direction="horizontal" className={styles.codeLine}>
            <Stack className={styles.iconWrapper}>
                <IconComponent size={16} />
            </Stack>
            <Text
                as="p"
                className={styles.codeText}
            >
                {children}
            </Text>
        </Stack>
    )
}

function Footer() {
    return (
        <Stack gap="condensed">
            <Stack direction="horizontal" className={styles.footerHeader}>
                <SmileyIcon size={18} />
                <Text className={styles.tipsText}>Tips</Text>
            </Stack>
            <Text>
                Before you get started check out our
                {' '}
                <Link href="https://primer.style/react" target="_blank">
                    Primer React Documentation
                </Link>
                {' '}
                and
                {' '}
                <Link href="https://ui.githubapp.com/storybook/?path=/docs/templates-readme--docs&globals=viewport:narrow" target="_blank">
                    Primer Templates (staff only)
                </Link>
            </Text>
        </Stack>
    )
}

export default Playground