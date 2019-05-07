import * as React from 'react';
import posed from 'react-pose';
import { Link } from '@reach/router';
import { HoverTarget, Icon } from 'src/components';
import * as styles from './BackButton.scss';

interface BackButtonProps {
  url: string;
}

const Container = posed.div({
  normal: { background: 'rgba(0, 0, 0, 0)' },
  hover: { background: 'rgba(0, 0, 0, 0.15)' },
});

const BackButton = (props: BackButtonProps) => (
  <HoverTarget className={styles.backButton}>
    <Container className={styles.container}>
      <Link to={props.url}>
        <Icon name="back" />
      </Link>
    </Container>
  </HoverTarget>
);

BackButton.defaultProps = {
  text: 'Back',
};

export default BackButton;
