declare module '*.module.scss' {
  const styles: any;
  export default styles;
}

declare module 'raw-loader!*' {
  const path: string;
  export default path;
}
