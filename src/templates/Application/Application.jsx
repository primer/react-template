import React from 'react'
import GlobalNavigation from '../../components/GlobalNavigation.jsx'
import SidebarNavigation from '../../components/SidebarNavigation.jsx'
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

import styles from "./application.module.css";

const nav = [
  { icon: CodeIcon, label: 'Code', current: true, url: '/' },
  { icon: IssueOpenedIcon, label: 'Issues', counter: 10, url: '#settings' },
  { icon: GitPullRequestIcon, label: 'Pull Requests', counter: 3 },
  { icon: CommentDiscussionIcon, label: 'Discussions' },
  { icon: PlayIcon, label: 'Actions' },
  { icon: ProjectIcon, label: 'Projects', counter: 7 },
  { icon: ShieldIcon, label: 'Security', counter: 12 },
  { icon: GraphIcon, label: 'Insights' }
];

function Application({ children }) {
    return (
      <>
      <GlobalNavigation title="primer" subtitle="react" items={nav} />
      <div className={styles.wrapper}>
        <aside className={styles.navigation}>
          <SidebarNavigation />
        </aside>
        <main>
          {children}
        </main>
      </div>
      </>
    )
}

export default Application
