import { Link } from '@primer/react'
import {
    MarkGithubIcon,
    CheckIcon,
    CommentIcon,
    MortarBoardIcon,
} from '@primer/octicons-react'

import MonaLoadingImage from '../images/mona-loading.gif'

import styles from './index.module.css'

function Playground() {
    /*
    WELCOME TO MONA's 😽🐙 PLAYGROUND
    Delete everything in here or play with the existing Mona playground code to get familiar with Primer React.
    Documentation: https://primer.style/product/getting-started/react/
    Documentation vars: https://primer.style/primitives/
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
                        Mona&apos;s playground successfully initialised...
                    </CodeLine>
                    <CodeLine
                        icon={CommentIcon}
                        iconColor="var(--fgColor-accent)"
                    >
                        Visit{' '}
                        <span className={styles.fileName}>
                            src/pages/index.jsx
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
    const Icon = icon
    return (
        <li className={styles.codeline}>
            <div className={styles.codelineIcon} style={{ color: iconColor }}>
                <Icon size={16} />
            </div>
            <div className={styles.codelineText}>{children}</div>
        </li>
    )
}

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.tip}>
                <MortarBoardIcon size={16} className={styles.tipIcon} />
                <span>Tip</span>
            </div>

            <div className={styles.tipText}>
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
            </div>
        </footer>
    )
}

export default Playground
