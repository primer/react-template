import { Box, Text, Link, Octicon } from '@primer/react'
import { CheckIcon } from '@primer/octicons-react'
import Application from '../templates/Application/Application.jsx'

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
  SmileyIcon,
  PersonIcon,
  MentionIcon
} from '@primer/octicons-react'

const topnav = [
  { icon: CodeIcon, label: 'Code', url: '/', current: true },
  { icon: IssueOpenedIcon, label: 'Issues', counter: 10, url: '#issues' },
  { icon: GitPullRequestIcon, label: 'Pull Requests', counter: 3 },
  { icon: CommentDiscussionIcon, label: 'Discussions' },
  { icon: PlayIcon, label: 'Actions' },
  { icon: ProjectIcon, label: 'Projects', counter: 7 },
  { icon: ShieldIcon, label: 'Security', counter: 12 },
  { icon: GraphIcon, label: 'Insights' }
];

function Code() {
    return (
      <Application title="Primer" subtitle="React" topnav={topnav}>
          This is the code page
      </Application>
    )
}

export default Code
