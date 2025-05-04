import { Box, Text, Link, Octicon } from '@primer/react'
import {
    MarkGithubIcon,
    CheckIcon,
    CommentIcon,
    MortarBoardIcon,
    SmileyIcon,
} from '@primer/octicons-react'

import MonaLoadingImage from '../images/mona-loading.gif'

import styles from './index.module.css'

function Playground() {
    /*
    WELCOME TO MONA's 😽🐙 PLAYGROUND
    Delete everything in here or play with the existing Mona playground code to get familiar with Primer React.
    Documentation: https://primer.style/react
    Documentation colors: https://primer.style/primitives/colors
  */

    return (
        <div className={styles.page}>
            <header>
                <MarkGithubIcon size={24} />
            </header>
            <main>
                <ul className={styles.terminal}>
                    <CodeLine
                        icon={CheckIcon}
                        iconColor="var(--fgColor-success)"
                    >
                        Mona's playground successfully initialised...
                    </CodeLine>
                    <CodeLine
                        icon={CommentIcon}
                        iconColor="var(--fgColor-accent)"
                    >
                        Visit{' '}
                        <span className={styles.fileName}>
                            src/Playground.js
                        </span>{' '}
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
            </main>
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

            <span>
                Check out our{' '}
                <Link
                    href="https://primer.style/product/getting-started/react/"
                    target="_blank"
                >
                    Primer React docs
                </Link>{' '}
                or our{' '}
                <Link
                    href="https://ui.githubapp.com/storybook/?path=/docs/templates-readme--docs"
                    target="_blank"
                >
                    internal templates
                </Link>{' '}
                before starting.
            </span>
        </footer>
    )
}

export default Playground
