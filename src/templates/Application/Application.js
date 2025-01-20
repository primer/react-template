import React from 'react'
import GlobalNavigation from '../../components/GlobalNavigation.jsx'
import SidebarNavigation from '../../components/SidebarNavigation.jsx'

import styles from "./application.module.css";

function Application({ children }) {
    return (
      <>
      <GlobalNavigation />
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
