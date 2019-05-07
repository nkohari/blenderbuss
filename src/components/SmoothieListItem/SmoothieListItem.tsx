import * as React from 'react';
import posed from 'react-pose';
import { Link } from '@reach/router';
import { HoverTarget } from 'src/components';
import { Smoothie } from 'src/data';
import * as styles from './SmoothieListItem.scss';

interface SmoothieListItemProps {
  smoothie: Smoothie;
}

const Container = posed.li({
  enter: { x: 0, opacity: 1 },
  exit: { x: -50, opacity: 0 },
});

const Backdrop = posed.div({
  normal: { scale: 1, rotate: 0 },
  hover: { scale: 1.2, rotate: -5 },
});

const SmoothieListItem = (props: SmoothieListItemProps) => (
  <HoverTarget>
    <Container className={styles.smoothieListItem}>
      <Backdrop className={styles.backdrop} style={{ backgroundImage: `url(${props.smoothie.imageUrl})` }} />
      <Link className={styles.content} to={`/smoothies/${props.smoothie.id}`}>
        <div className={styles.text}>{props.smoothie.name}</div>
      </Link>
    </Container>
  </HoverTarget>
);

export default SmoothieListItem;
