import React from 'react'
import GlobalNavigation from '../../components/GlobalNavigation.jsx'
import SidebarNavigation from '../../components/SidebarNavigation.jsx'

import styles from "./application.module.css";

function Application({ children, title, subtitle, topnav, sidenav }) {
    return (
      <>
      <GlobalNavigation title={title} subtitle={subtitle} items={topnav} />
      <div className={styles.wrapper}>
      {sidenav &&
        <aside className={styles.navigation}>
           <SidebarNavigation sidenav={sidenav} />
        </aside>
      }
        <main>
          {children}
        </main>
      </div>
      </>
    )
}

export default Application
