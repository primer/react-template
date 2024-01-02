import { Box, Text, Link, Octicon } from '@primer/react'
import {
    MarkGithubIcon,
    CheckIcon,
    CommentIcon,
    MortarBoardIcon,
} from '@primer/octicons-react'

import MonaLoadingImage from './images/mona-loading.gif'

function Playground() {
    /*
    WELCOME TO MONA's 😽🐙 PLAYGROUND
    Delete everything in here or play with the existing Mona playground code to get familiar with Primer React.
    Documentation: https://primer.style/react
    Documentation colors: https://primer.style/primitives/colors
  */

    return (
        <Box
            sx={{
                bg: 'canvas.default',
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                p: 5,
            }}
        >
            <MarkGithubIcon size={24} />
            <Box
                sx={{
                    maxWidth: 600,
                    width: '100%',
                    height: 300,
                    bg: 'neutral.emphasisPlus',
                    borderRadius: 2,
                    p: 4,
                    my: 6,
                }}
            >
                <CodeLine icon={CheckIcon} iconColor="success.fg">
                    Mona's playground successfully initialised...
                </CodeLine>
                <CodeLine icon={CommentIcon} iconColor="accent.fg">
                    Visit <Text color="text.warning">src/Playground.js</Text>{' '}
                    and start building your own layouts using Primer.
                </CodeLine>
                <Box display="inline-block" ml={3} mt={2}>
                    <img
                        src={MonaLoadingImage}
                        alt="mona"
                        width={48}
                        height={48}
                    />
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}

function CodeLine({ icon, iconColor, children }) {
    return (
        <Box sx={{ display: 'flex', color: 'fg.onEmphasis', mb: 2 }}>
            <Box sx={{ display: 'flex', mt: '2px', width: 20, minWidth: 20 }}>
                <Octicon icon={icon} size={16} sx={{ color: iconColor }} />
            </Box>
            <Text
                as="p"
                sx={{ flex: 1, fontSize: 1, fontFamily: 'mono', ml: 2 }}
            >
                {children}
            </Text>
        </Box>
    )
}

function Footer() {
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Box sx={{ mr: 2, display: 'inline-block' }}>
                <Octicon
                    icon={MortarBoardIcon}
                    size={16}
                    sx={{ mr: 1, color: 'attention.fg' }}
                />
                <Text sx={{ color: 'attention.fg' }}>Tip</Text>
            </Box>
            <Text>
                Before you get started check out our{' '}
                <Link href="https://primer.style/react" target="_blank">
                    Primer React Documentation
                </Link>
            </Text>
        </Box>
    )
}

export default Playground
