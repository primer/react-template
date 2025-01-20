import { Box, Text, Octicon } from '@primer/react'

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

export default CodeLine