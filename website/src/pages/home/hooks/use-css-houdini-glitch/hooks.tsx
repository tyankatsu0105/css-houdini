import worklet from 'raw-loader!../../../../../../dist/packages/css-houdini-glitch/worklet';
import * as React from 'react';

import Img from '~static/media//glitch.jpg';

import styles from './style.module.scss';

const name = 'css-houdini-glitch' as const;

export const useCSSHoudiniGlitch = () => {
  React.useEffect(() => {
    const workletBlob = URL.createObjectURL(
      new Blob([worklet], { type: 'application/javascript' })
    );

    window.CSS.paintWorklet.addModule(workletBlob);
  }, []);

  const Component = () => (
    <div className={`${styles['wrap']}`}>
      <p className={`${styles['text']}`}>Glitch Text</p>
    </div>
  );

  return { Component, name };
};
