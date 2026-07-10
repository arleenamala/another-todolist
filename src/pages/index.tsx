import { Link } from '@primer/react'
import {
    MarkGithubIcon,
    CheckIcon,
    CommentIcon,
    MortarBoardIcon,
    Icon,
} from '@primer/octicons-react'

import MonaLoadingImage from '../images/mona-loading.gif'

import styles from './index.module.css'

function Playground() {


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
                        Todo list is in development
                    </CodeLine>
                    <CodeLine
                        icon={CommentIcon}
                        iconColor="var(--fgColor-accent)"
                    >
                        Check back again later
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

interface CodeLineProps {
    icon: Icon,
    iconColor: string,
    children: React.ReactNode,
}

function CodeLine({ icon, iconColor, children }: CodeLineProps) {
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
