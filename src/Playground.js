import { Box, Text, Link, StyledOcticon } from '@primer/react'
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
            bg="canvas.default"
            width="100%"
            minHeight="100vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={5}
        >
            <MarkGithubIcon size={24} />
            <Box
                maxWidth={600}
                width="100%"
                height={300}
                bg="neutral.emphasisPlus"
                borderRadius={2}
                p={4}
                my={6}
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
        <Box display="flex" color="fg.onEmphasis" mb={2}>
            <Box display="flex" mt="2px" width={20} minWidth={20}>
                <StyledOcticon icon={icon} size={16} color={iconColor} />
            </Box>
            <Text as="p" flex={1} fontSize={1} fontFamily="mono" ml={2}>
                {children}
            </Text>
        </Box>
    )
}

function Footer() {
    return (
        <Box textAlign="center">
            <Box mr={2} display="inline-block">
                <StyledOcticon
                    icon={MortarBoardIcon}
                    size={16}
                    color="attention.fg"
                    sx={{ mr: 1 }}
                />
                <Text color="attention.fg">Tip</Text>
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
