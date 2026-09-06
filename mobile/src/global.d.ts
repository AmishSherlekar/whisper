declare module "*.css" {
  const _: undefined;
  export default _;
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}