import * as React from 'react';
import { useEffect } from 'react';
import posed from 'react-pose';
import { connect } from 'react-redux';
import { HoverTarget, Icon } from 'src/components';
import { ImageGroup, loadImages, ReduxState, saveSmoothie, Smoothie } from 'src/data';
import * as styles from './SplashImage.scss';

interface SplashImageDeclaredProps {
  smoothie: Smoothie;
}

interface SplashImageConnectedProps {
  loadImages: (query: string) => Promise<void>;
  imageGroup: ImageGroup;
  query: string;
  saveSmoothie: (smoothie: Smoothie) => Promise<void>;
}

const SwapButton = posed.a({
  normal: { opacity: 0 },
  hover: { opacity: 1 },
});

const Backdrop = posed.div({
  normal: { opacity: 1 },
  hover: { opacity: 0.75 },
});

const SplashImage = (props: SplashImageDeclaredProps & SplashImageConnectedProps) => {
  useEffect(() => {
    props.loadImages(props.query);
  }, [props.query]);

  const swapImage = async () => {
    if (!props.imageGroup) return;
    const urls = props.imageGroup.imageUrls;
    const index = Math.floor(Math.random() * urls.length);
    props.saveSmoothie({
      ...props.smoothie,
      imageUrl: urls[index],
    });
  };

  return (
    <HoverTarget className={styles.splashImage}>
      <Backdrop className={styles.backdrop} style={{ backgroundImage: `url(${props.smoothie.imageUrl})` }} />
      <div className={styles.content}>
        <SwapButton onClick={swapImage} className={styles.swapButton}>
          <Icon name="rotate" />
        </SwapButton>
      </div>
    </HoverTarget>
  );
};

export default connect(
  (state: ReduxState, props: SplashImageDeclaredProps) => {
    const query = props.smoothie.ingredients.length === 0 ? '' : props.smoothie.ingredients[0].name;
    return {
      imageGroup: state.images.get(query),
      query,
    };
  },
  { loadImages, saveSmoothie }
)(SplashImage);
