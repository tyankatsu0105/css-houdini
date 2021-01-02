import worklet from 'raw-loader!../../../../../../dist/packages/css-houdini-stripe/worklet';
import * as React from 'react';

import Img from '~static/media//stripe.jpg';

import styles from './style.module.scss';

const name = 'css-houdini-stripe' as const;

export const useCSSHoudiniStripe = () => {
  React.useEffect(() => {
    const workletBlob = URL.createObjectURL(
      new Blob([worklet], { type: 'application/javascript' })
    );

    window.CSS.paintWorklet.addModule(workletBlob);
  }, []);

  const Component = () => (
    <div className={`${styles['wrap']}`}>
      <p className={`${styles['text']}`}>Stripe Text</p>
    </div>
  );

  return { Component, name };
};
