import { MarkGithubIcon } from "@primer/octicons-react";
import { Header, Octicon } from "@primer/react";

import styles from "./header.module.css";

export const AppHeader = () => {
  return (
    <Header className={styles.header}>
      <Header.Item full>
        <Header.Link href="#" fontSize={2} className={styles.headerLink}>
          <Octicon icon={MarkGithubIcon} size={32} className={styles.octicon} />
          Issues
        </Header.Link>
      </Header.Item>
    </Header>
  );
};
