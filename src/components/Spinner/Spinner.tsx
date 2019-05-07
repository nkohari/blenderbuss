import * as React from 'react';
import * as classnames from 'classnames';
import SvgImage from 'assets/spinner.svg';
import * as styles from './Spinner.scss';

interface SpinnerProps {
  className?: string;
}

const Spinner = (props: SpinnerProps) => (
  <div className={classnames(styles.spinner, props.className)}>
    <SvgImage className={styles.image} />
  </div>
);

export default Spinner;
