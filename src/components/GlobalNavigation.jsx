import {UnderlineNav, Stack, IconButton, Text} from '@primer/react'
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

import styles from './globalNavigation.module.css'

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

export default function GlobalNavigation({ items = defaultNav, title, subtitle }) {
  return (
    <Stack as="header" className={styles.header}>
      <div
        className={styles.headerContent}
      >
        <IconButton icon={ThreeBarsIcon} aria-label="Open global navigation menu" unsafeDisableTooltip />
        <MarkGithubIcon size={32} />
        <Stack direction="horizontal" gap="condensed" className={styles.titleWrapper}>
          <span>{title ? title : 'title'}</span>
          {subtitle && (
            <>
              <Text className={styles.separator}>/</Text>
              <Text className={styles.subtitle}>{subtitle ? subtitle : 'subtitle'}</Text>
            </>
          )}
          
          
        </Stack>
      </div>
      <UnderlineNav aria-label="Repository">
        {items.map((item) => (
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
    </Stack>
  )
}