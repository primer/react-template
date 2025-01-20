import { Box, Text, Link, Octicon } from '@primer/react'
import { CheckIcon } from '@primer/octicons-react'
import CodeLine from '../components/CodeLine.js'

function Settings() {
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
            <Box
                sx={{
                    maxWidth: 600,
                    width: '100%',
                    height: 300,
                    bg: 'neutral.emphasisPlus',
                    borderRadius: 2,
                    p: 4,
                    my: 6
                }}
            >
                <CodeLine icon={CheckIcon} iconColor="success.fg">
                    This is the index page!
                </CodeLine>
            </Box>
        </Box>
    )
}

export default Settings
