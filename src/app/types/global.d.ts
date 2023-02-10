declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";

declare module "*.svg" {
  const svg: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  export default svg;
}
