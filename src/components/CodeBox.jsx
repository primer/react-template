import { Box, Text, Octicon } from '@primer/react'

function CodeBox({ icon, iconColor, children }) {
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
          <Box sx={{ display: 'flex', color: 'fg.onEmphasis', mb: 2 }}>
              {icon &&
                <Box sx={{ display: 'flex', mt: '2px', width: 20, minWidth: 20 }}>
                  <Octicon icon={icon} size={16} sx={{ color: iconColor }} />
                </Box>
              }
              <Text
                  as="p"
                  sx={{ flex: 1, fontSize: 1, fontFamily: 'mono', ml: 2 }}
              >
                  {children}
              </Text>
          </Box>
        </Box>
    </Box>  
  )
}

export default CodeBox