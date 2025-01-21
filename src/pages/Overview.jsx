import { Box, Text, Link, Octicon, Button } from '@primer/react'
import { CheckIcon } from '@primer/octicons-react'
import Application from '../templates/Application/Application.jsx'
import styles from "./overview.module.css";

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
  MentionIcon,
  HomeIcon
} from '@primer/octicons-react'

const topnav = [
  { icon: HomeIcon, label: 'Overview', url: '/', current: true },
  { icon: IssueOpenedIcon, label: 'Organizations', url: '#issues' },
  { icon: GitPullRequestIcon, label: 'People' },
  { icon: CommentDiscussionIcon, label: 'Policies' },
  { icon: PlayIcon, label: 'GitHub Connect' },
  { icon: ProjectIcon, label: 'Code Security', counter: 7 },
  { icon: ShieldIcon, label: 'Billing & Licensing', counter: 12 },
  { icon: GraphIcon, label: 'Settings' },
  { icon: GraphIcon, label: 'Compliance' }
];

const text = true

function Overview() {
    return (
      <Application title="Primer" subtitle="React" topnav={topnav}>
        // condition ? thing : other thing
          
          {text && <Text as="h1" className={styles.title} fontSize="larger">Overview</Text>}

          {/* You could also do it as:
              text ? <Text as="h1" className={styles.title} fontSize="larger">Overview</Text> : ''
              
              Which means:
              (If text is true) ? then render <Text...> : otherwise render '' 
          */}

            <Box className={styles.card}>
            <Button variant="danger">Edit</Button>
          </Box>
        </Application>
    )
}

export default Overview
