import {UnderlineNav, Box, IconButton, Text} from '@primer/react'
// import { Octicon } from '@primer/react/deprecated'

import {
  IssueOpenedIcon,
  ThreeBarsIcon,
  CodeIcon,
  GitPullRequestIcon,
  CommentDiscussionIcon,
  ShieldIcon,
  PlayIcon,
  ProjectIcon,
  GraphIcon,
  MarkGithubIcon,
} from '@primer/octicons-react'

// 🚨 Note: This is a fake component mimicking our global navigation.

export default function GlobalNavigation() {
  return (
    <Box as="header" sx={{bg: 'canvas.inset', width: '100%', maxWidth: '100%'}}>
      <Box
        sx={{
          px: 3,
          pt: 3,
          pb: 2,
          display: 'flex',
          gap: 3,
          alignItems: 'center',
        }}
      >
        <IconButton icon={ThreeBarsIcon} aria-label="Open global navigation menu" unsafeDisableTooltip />
        <MarkGithubIcon size={32} />
        <Box sx={{display: 'flex', gap: 2, fontSize: 1}}>
          <span>primer</span>
          <Text sx={{color: 'fg.muted'}}>/</Text>
          <Text sx={{fontWeight: 'bold'}}>react</Text>
        </Box>
      </Box>
      <UnderlineNav aria-label="Repository">
        <UnderlineNav.Item icon={CodeIcon}>Code</UnderlineNav.Item>
        <UnderlineNav.Item aria-current="page" icon={IssueOpenedIcon} counter={30}>
          Issues
        </UnderlineNav.Item>
        <UnderlineNav.Item icon={GitPullRequestIcon} counter={3}>
          Pull Requests
        </UnderlineNav.Item>
        <UnderlineNav.Item icon={CommentDiscussionIcon}>Discussions</UnderlineNav.Item>
        <UnderlineNav.Item icon={PlayIcon}>Actions</UnderlineNav.Item>
        <UnderlineNav.Item icon={ProjectIcon} counter={7}>
          Projects
        </UnderlineNav.Item>
        <UnderlineNav.Item icon={ShieldIcon} counter={12}>
          Security
        </UnderlineNav.Item>
        <UnderlineNav.Item icon={GraphIcon}>Insights</UnderlineNav.Item>
      </UnderlineNav>
    </Box>
  )
}