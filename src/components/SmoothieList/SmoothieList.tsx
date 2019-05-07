import * as React from 'react';
import posed from 'react-pose';
import { SmoothieListItem } from 'src/components';
import { Smoothie } from 'src/data';
import * as styles from './SmoothieList.scss';

interface SmoothieListProps {
  smoothies: Smoothie[];
}

const Container = posed.ul({
  enter: { staggerChildren: 150 },
});

const SmoothieList = (props: SmoothieListProps) => (
  <Container className={styles.smoothieList} initialPose="exit" pose="enter">
    {props.smoothies.map(smoothie => (
      <SmoothieListItem key={smoothie.id} smoothie={smoothie} />
    ))}
  </Container>
);

export default SmoothieList;
