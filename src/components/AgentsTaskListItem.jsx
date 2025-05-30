import { useMemo, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { RelativeTime } from '@primer/react'
import styles from './AgentsTaskListItem.module.css'
import { GitPullRequestIcon, GitPullRequestDraftIcon, CheckCircleFillIcon, GitMergeIcon } from '@primer/octicons-react'

export function AgentsTaskListItem({ pullRequest, state, merged, revisionCount, onTitleClick }) {
  const divRef = useRef < HTMLDivElement > (null)
  const [hasAnimated, setHasAnimated] = useState(true)

  const getLeadingVisualIcon = () => {
    if (pullRequest.reviewable_state === 'draft') {
      return <GitPullRequestDraftIcon color="fg.onEmphasis" aria-label='icon-draft' />
    }

    if (merged) {
      return <GitMergeIcon color="fg.onEmphasis" aria-label='icon-merged' />
    }

    if (state === 'in_progress') {
      return <svg fill="none" color='attention.fg' viewBox="0 0 16 16" className="anim-rotate" aria-hidden="true" role="img" aria-label='icon-in-progress'>
        <path opacity=".5" d="M8 15A7 7 0 108 1a7 7 0 000 14v0z" stroke="#dbab0a" strokeWidth="2" />
        <path d="M15 8a7 7 0 01-7 7" stroke="#dbab0a" strokeWidth="2" />
        <path d="M8 12a4 4 0 100-8 4 4 0 000 8z" fill="#dbab0a" />
      </svg>
    }

    if (state === 'completed') {
      return <CheckCircleFillIcon color="fg.onEmphasis" aria-label='icon-completed' />
    }

    return <GitPullRequestIcon color="fg.onEmphasis" aria-label='icon-pr' />
  }

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -2,
          filter: 'blur(2px)',
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        }}
        exit={{
          opacity: 0,
          y: 2,
          filter: 'blur(2px)',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={hasAnimated ? 'bgColor-transparent' : 'bgColor-muted'}
        onAnimationStart={() => setHasAnimated(false)}
        onAnimationComplete={() => setHasAnimated(true)}
        style={{
          transition: 'background-color 0.2s ease-in-out',
        }}
        // ref={divRef}
        layout
      >
        {/* <ListItem
          className={styles.ListItemOverride}
          title={
            <ListItemTitle
              containerClassName={`${styles.titleContainerOverride} ${styles.pullRequest}`}
              headingClassName={styles.titleOverride}
              value={pullRequest.title}
              href={pullRequest.url}
              onClick={onTitleClick}
            />
          }
          metadata={
            <>
              <ListItemMetadata>
                <RelativeTime format={'micro'} datetime={pullRequest.updated_at} />
              </ListItemMetadata>
            </>
          }
        >
          <ListItemLeadingContent>
            <ListItemLeadingVisual className={styles.leadingVisualOverride} {...leadingVisualIconAttributes} />
          </ListItemLeadingContent>
          <ListItemMainContent>
            <ListItemDescription>{`${pullRequest.repository_nwo}#${pullRequest.number} · ${revisionCount} revision${revisionCount > 1 ? 's' : ''
              }`}</ListItemDescription>
          </ListItemMainContent>
        </ListItem> */}
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={`${styles.leftLeading}`}>
              {getLeadingVisualIcon()}
            </div>
            <div className={styles.leftText}>
              <div className={styles.leftTextTitle}>
                {pullRequest.title}
              </div>
              <div className={styles.leftTextDescription}>
                {`${pullRequest.repository_nwo}#${pullRequest.number} · ${revisionCount} revision${revisionCount > 1 ? 's' : ''
                  }`}
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <RelativeTime format={'micro'} datetime={pullRequest.updated_at} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default AgentsTaskListItem