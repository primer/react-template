import {UnderlineNav, Box, IconButton, Text} from '@primer/react'
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

const defaultNav = [
  { icon: CodeIcon, label: 'Code', current: true },
  { icon: IssueOpenedIcon, label: 'Issues', counter: 30 },
  { icon: GitPullRequestIcon, label: 'Pull Requests', counter: 3 },
  { icon: CommentDiscussionIcon, label: 'Discussions' },
  { icon: PlayIcon, label: 'Actions' },
  { icon: ProjectIcon, label: 'Projects', counter: 7 },
  { icon: ShieldIcon, label: 'Security', counter: 12 },
  { icon: GraphIcon, label: 'Insights' }
];

export default function GlobalNavigation({ items, title, subtitle }) {
  const resolvedNav = items ? items : defaultNav
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
          <span>{title ? title : 'title'}</span>
          {subtitle && (
            <>
              <Text sx={{color: 'fg.muted'}}>/</Text>
              <Text sx={{fontWeight: 'bold'}}>{subtitle ? subtitle : 'subtitle'}</Text>
            </>
          )}
          
          
        </Box>
      </Box>
      <UnderlineNav aria-label="Repository">
        {resolvedNav.map((item) => (
          <UnderlineNav.Item 
            key={item.label}
            icon={item.icon}
            aria-current={item.current ? 'page' : undefined}
            counter={item.counter}
            href={item.url}
          >
            {item.label}
          </UnderlineNav.Item>
        ))}
      </UnderlineNav>
    </Box>
  )
}