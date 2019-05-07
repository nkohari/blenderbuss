import * as React from 'react';
import { Icon } from 'src/components';
import * as styles from './Button.scss';

interface ButtonProps {
  children?: React.ReactNode;
  icon: string;
  onClick?: (event: React.MouseEvent) => any;
}

const Button = (props: ButtonProps) => (
  <button tabIndex={0} className={styles.button} onClick={props.onClick}>
    {props.icon && <Icon name={props.icon} className={styles.icon} />}
    {props.children}
  </button>
);

export default Button;
