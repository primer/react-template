import React from 'react'
import { useState, useEffect } from 'react'
import styles from './index.module.css'
import { AnimatePresence } from 'motion/react'
import AgentsTaskListItem from '../components/AgentsTaskListItem'

const mockTaskData = {
  randomTaskTitles: [
    'Fix memory leak in authentication service',
    'Implement dark mode theme',
    'Add unit tests for payment module',
    'Optimize database queries',
    'Update API documentation',
    'Refactor legacy code components',
    'Add error handling for file uploads',
    'Implement user preferences',
    'Fix responsive design issues',
    'Add logging to critical functions',
    'Improve error handling in API calls',
    'Add integration tests for checkout flow',
    'Implement role-based access control',
    'Optimize image loading performance',
    'Add keyboard navigation support',
  ],

  // Default story items
  defaultItems: [
    {
      id: 1,
      title: 'ns_eclipse: Delete block in study hall',
      state: 'open',
      sessionState: 'in_progress',
      merged: false,
      revisionCount: 2,
      comments: 0,
      lastSessionStartDate: '2023-10-01T12:00:00Z',
    },
    {
      id: 2,
      title: 'ns_veil: Add new alien spawn location',
      state: 'open',
      sessionState: 'completed',
      merged: false,
      revisionCount: 1,
      comments: 0,
      lastSessionStartDate: '2023-10-01T12:00:00Z',
    },
    {
      id: 3,
      title: 'Add konami code easter egg to main menu',
      state: 'merged',
      sessionState: 'completed',
      merged: true,
      revisionCount: 1,
      comments: 0,
      lastSessionStartDate: '2023-10-01T12:00:00Z',
    },
  ],

  // Grouped sections data
  groupedSections: {
    inProgress: [
      {
        id: 101,
        title: 'Implement real-time notifications system',
        state: 'open',
        sessionState: 'in_progress',
        merged: false,
        revisionCount: 3,
        comments: 5,
        lastSessionStartDate: '2023-10-05T15:30:00Z',
        created_at: '2023-10-05T09:00:00Z',
        updated_at: '2023-10-05T15:30:00Z',
      },
      {
        id: 102,
        title: 'Fix authentication timeout issues',
        state: 'open',
        sessionState: 'in_progress',
        merged: false,
        revisionCount: 1,
        comments: 2,
        lastSessionStartDate: '2023-10-05T14:00:00Z',
        created_at: '2023-10-05T11:00:00Z',
        updated_at: '2023-10-05T14:00:00Z',
      },
    ],
    waitingForReview: [
      {
        id: 201,
        title: 'Add dark mode theme support',
        state: 'open',
        sessionState: 'completed',
        merged: false,
        revisionCount: 2,
        comments: 8,
        lastSessionStartDate: '2023-10-04T16:00:00Z',
        created_at: '2023-10-04T10:00:00Z',
        updated_at: '2023-10-04T16:00:00Z',
      },
      {
        id: 202,
        title: 'Optimize database query performance',
        state: 'open',
        sessionState: 'completed',
        merged: false,
        revisionCount: 1,
        comments: 3,
        lastSessionStartDate: '2023-10-04T18:00:00Z',
        created_at: '2023-10-04T14:00:00Z',
        updated_at: '2023-10-04T18:00:00Z',
      },
    ],
    inactive: [
      {
        id: 301,
        title: 'Update API documentation',
        state: 'open',
        sessionState: 'completed',
        merged: false,
        revisionCount: 1,
        comments: 1,
        lastSessionStartDate: '2023-10-03T12:00:00Z',
        created_at: '2023-10-03T09:00:00Z',
        updated_at: '2023-10-03T12:00:00Z',
        isDraft: true,
      },
    ],
    merged: [
      {
        id: 401,
        title: 'Implement user preferences system',
        state: 'merged',
        sessionState: 'completed',
        merged: true,
        revisionCount: 4,
        comments: 12,
        lastSessionStartDate: '2023-10-02T17:00:00Z',
        created_at: '2023-10-02T08:00:00Z',
        updated_at: '2023-10-02T17:00:00Z',
        merged_at: '2023-10-02T17:00:00Z',
      },
      {
        id: 402,
        title: 'Add comprehensive error handling',
        state: 'merged',
        sessionState: 'completed',
        merged: true,
        revisionCount: 2,
        comments: 7,
        lastSessionStartDate: '2023-10-01T16:00:00Z',
        created_at: '2023-10-01T10:00:00Z',
        updated_at: '2023-10-01T16:00:00Z',
        merged_at: '2023-10-01T16:00:00Z',
      },
      {
        id: 403,
        title: 'Refactor legacy authentication module',
        state: 'merged',
        sessionState: 'completed',
        merged: true,
        revisionCount: 1,
        comments: 4,
        lastSessionStartDate: '2023-09-30T18:00:00Z',
        created_at: '2023-09-30T14:00:00Z',
        updated_at: '2023-09-30T18:00:00Z',
        merged_at: '2023-09-30T18:00:00Z',
      },
    ],
  },
}

// Helper function to convert mock data to AgentsTaskListItemProps
const createTaskItem = (data) => ({
  merged: data.merged,
  revisionCount: data.revisionCount,
  pullRequest: {
    id: data.id,
    number: data.id,
    title: data.title,
    state: data.state,
    reviewable_state: data.isDraft ? 'draft' : 'ready',
    url: `https://github.com/octoarcade/invaders/pull/${data.id}`,
    labels: [],
    comments: data.comments,
    created_at: data.created_at || '2023-10-01T12:00:00Z',
    updated_at: data.updated_at || '2023-10-01T12:00:00Z',
    author: 'octoarcade',
    head_sha: `sha${data.id.toString().padStart(10, '0')}`,
    repository_nwo: 'octoarcade/invaders',
    ...(data.isDraft && { isDraft: true }),
    ...(data.merged_at && { merged_at: data.merged_at }),
  },
  state: data.sessionState,
  lastSessionStartDate: data.lastSessionStartDate,
  onTitleClick: () => { },
})

function Playground() {
  const initialItems = mockTaskData.defaultItems.map(createTaskItem)
  const [items, setItems] = useState(initialItems)
  const [itemCounter, setItemCounter] = useState(initialItems.length)

  useEffect(() => {
    const timer = setInterval(() => {
      const randomTitle =
        mockTaskData.randomTaskTitles[Math.floor(Math.random() * mockTaskData.randomTaskTitles.length)]
      const randomRevisions = Math.floor(Math.random() * 5) + 1
      const states = ['open', 'closed', 'merged']
      const randomState = states[Math.floor(Math.random() * states.length)]
      const randomMerged = randomState === 'merged' && Math.random() > 0.5
      const randomMissionState = Math.random() > 0.5 ? 'in_progress' : 'completed'

      setItemCounter(prev => prev + 1)

      const newTaskData = {
        id: itemCounter + 1,
        title: randomTitle,
        state: randomState,
        sessionState: randomMissionState,
        merged: randomMerged,
        revisionCount: randomRevisions,
        comments: Math.floor(Math.random() * 10),
        lastSessionStartDate: new Date().toISOString(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }

      const newItem = createTaskItem(newTaskData)

      setItems(prev => {
        const newItems = [...prev, newItem]
        if (newItems.length > 5) {
          return newItems.slice(1)
        }
        return newItems
      })
    }, 3000)

    return () => clearInterval(timer)
  }, [itemCounter])

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <AnimatePresence initial={false}>
          {items.map(item => (
            <AgentsTaskListItem key={item.pullRequest.id} {...item} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Playground
