import * as React from 'react';
import classnames from 'classnames';
import { BackButton, Icon, Spinner } from 'src/components';
import * as styles from './Page.scss';

interface PageProps {
  backUrl?: string;
  children: () => React.ReactNode;
  className?: string;
  icon: string;
  isLoading: boolean;
  title: React.ReactNode;
}

const Page = (props: PageProps) => {
  let icon;
  let content;
  if (props.isLoading) {
    icon = <Spinner className={styles.spinner} />;
  } else {
    icon = <Icon name={props.icon} className={styles.icon} />;
    content = props.children();
  }

  return (
    <div className={classnames(styles.page, props.className)}>
      <div className={styles.gutter}>{props.backUrl && <BackButton url={props.backUrl} />}</div>
      <div className={styles.content}>
        <header>
          <h1>
            {icon}
            {props.title}
          </h1>
        </header>
        <main>{content}</main>
      </div>
    </div>
  );
};

export default Page;
