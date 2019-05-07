import * as React from 'react';
import { forwardRef, useState } from 'react';
import posed from 'react-pose';

interface HoverTargetProps {
  children: React.ReactNode;
  className?: string;
}

const Container = posed.div();

const HoverTarget = forwardRef((props: HoverTargetProps, ref) => {
  const [hovering, setHovering] = useState<boolean>();

  return (
    <Container
      ref={ref}
      className={props.className}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
      initialPose="normal"
      pose={hovering ? 'hover' : 'normal'}
    >
      {props.children}
    </Container>
  );
});

export default HoverTarget;
