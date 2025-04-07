import {NavList} from '@primer/react'
import {IssueOpenedIcon, SmileyIcon, PersonIcon, MentionIcon} from '@primer/octicons-react'

const defaultNav = [
  { icon: IssueOpenedIcon, label: 'Open issues', url: '#' },
  { icon: SmileyIcon, label: 'Your issues', url: '#' },
  { icon: PersonIcon, label: 'Assigned to you', url: '#', current: true },
  { icon: MentionIcon, label: 'Mentioning you', url: '#' }
]

export default function SidebarNavigation({ items = defaultNav }) {
  return (
    <NavList aria-label="Issues">
      {items.map((item) => (
        <NavList.Item 
          key={item.label}
          href={item.url}
          aria-current={item.current ? 'page' : undefined}
        >
          <NavList.LeadingVisual>
            <item.icon />
          </NavList.LeadingVisual>
          {item.label}
        </NavList.Item>
      ))}
    </NavList>
  )
}