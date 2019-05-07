import * as React from 'react';
import * as classnames from 'classnames';
import * as styles from './Icon.scss';

export interface IconProps {
  className?: string;
  name: string;
}

const Icon = (props: IconProps) => {
  let SvgImage;

  try {
    SvgImage = require(`assets/icons/${props.name}.svg`);
  } catch (error) {
    throw new Error(`No icon found with the name "${props.name}"`);
  }

  return (
    <i className={classnames(styles.icon, props.className)}>
      <SvgImage className={styles.image} />
    </i>
  );
};

export default Icon;
