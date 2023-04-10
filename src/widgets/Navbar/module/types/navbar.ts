export interface NavbarItemsType {
    path: string;
    text: string;
    Icon?: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    authOnly?: boolean;
}
