import worklet from 'raw-loader!../src/worklet';

const workletBlob = URL.createObjectURL(
  new Blob([worklet], { type: "application/javascript" })
);

window.CSS.paintWorklet.addModule(workletBlob);