import {NavList} from '@primer/react'
import {IssueOpenedIcon, SmileyIcon, PersonIcon, MentionIcon} from '@primer/octicons-react'

export default function SidebarNavigation() {
  return (
    <NavList aria-label="Issues">
      <NavList.Item href="#">
        <NavList.LeadingVisual>
          <IssueOpenedIcon />
        </NavList.LeadingVisual>
        Open issues
      </NavList.Item>
      <NavList.Item href="#">
        <NavList.LeadingVisual>
          <SmileyIcon />
        </NavList.LeadingVisual>
        Your issues
      </NavList.Item>
      <NavList.Item href="#" aria-current="page">
        <NavList.LeadingVisual>
          <PersonIcon />
        </NavList.LeadingVisual>
        Assigned to you
      </NavList.Item>
      <NavList.Item href="#">
        <NavList.LeadingVisual>
          <MentionIcon />
        </NavList.LeadingVisual>
        Mentioning you
      </NavList.Item>
    </NavList>
  )
}