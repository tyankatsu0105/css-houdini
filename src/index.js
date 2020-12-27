import worklet from 'raw-loader!./worklet.js';

const workletBlob = URL.createObjectURL(
  new Blob([worklet], { type: "application/javascript" })
);

export default workletBlob