import { Box, Text, Link, Octicon } from '@primer/react'
import {
    MarkGithubIcon,
    CheckIcon,
    CommentIcon,
    MortarBoardIcon,
} from '@primer/octicons-react'

import styles from './Playground.module.css'

import MonaLoadingImage from './images/mona-loading.gif'

function Playground() {
    /*
    WELCOME TO MONA's 😽🐙 PLAYGROUND
    Delete everything in here or play with the existing Mona playground code to get familiar with Primer React.
    You can style the elements through the `Playground.module.css` file.
    Documentation: https://primer.style/guides/react
  */

    return (
        <div className={styles.page}>
            <MarkGithubIcon size={24} />
            <ul className={styles.terminal}>
                <CodeLine
                    icon={CheckIcon}
                    iconColor="var(--display-green-fgColor)"
                >
                    Mona's playground successfully initialised...
                </CodeLine>
                <CodeLine
                    icon={CommentIcon}
                    iconColor="var(--display-blue-fgColor)"
                >
                    Visit <Text color="text.warning">src/Playground.js</Text>{' '}
                    and start building your own layouts using Primer.
                </CodeLine>
                <li className={styles.loader}>
                    <img
                        src={MonaLoadingImage}
                        alt="Loading animation"
                        width={48}
                        height={48}
                    />
                </li>
            </ul>
            <Footer />
        </div>
    )
}

function CodeLine({ icon, iconColor, children }) {
    return (
        <li className={styles.codeline}>
            <div className={styles.codelineIcon} style={{ color: iconColor }}>
                <Octicon icon={icon} size={16} />
            </div>
            <div className={styles.codelineText}>{children}</div>
        </li>
    )
}

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.tip}>
                <Octicon
                    icon={MortarBoardIcon}
                    size={16}
                    className={styles.tipIcon}
                />
                <span>Tip</span>
            </div>
            <Text>
                Before you get started check out our{' '}
                <Link href="https://primer.style/guides/react" target="_blank">
                    Primer React Documentation
                </Link>
            </Text>
        </footer>
    )
}

export default Playground
