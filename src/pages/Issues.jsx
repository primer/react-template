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
  { icon: CodeIcon, label: 'Code', url: '/' },
  { icon: IssueOpenedIcon, label: 'Issues', counter: 10, url: '#issues', current: true },
  { icon: GitPullRequestIcon, label: 'Pull Requests', counter: 3, url: '/overview' },
  { icon: CommentDiscussionIcon, label: 'Discussions' },
  { icon: PlayIcon, label: 'Actions' },
  { icon: ProjectIcon, label: 'Projects', counter: 7 },
  { icon: ShieldIcon, label: 'Security', counter: 12 },
  { icon: GraphIcon, label: 'Insights' }
];

const sidenav = [
  { icon: IssueOpenedIcon, label: 'Open issues', url: '' },
  { icon: SmileyIcon, label: 'Your issues', url: '' },
  { icon: PersonIcon, label: 'Assigned to you', url: '', current: true },
  { icon: MentionIcon, label: 'Mentioning you', url: '' }
]
function Issues() {
    return (
      <Application title="Primer" subtitle="React" topnav={topnav} sidenav={sidenav}>
          This is the issues page
      </Application>
    )
}

export default Issues
