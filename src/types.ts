import { FunctionComponent } from "react";
import { RouteProps as RouterDomRouteProps } from "react-router-dom";

export interface RouteStateCoreProps {
  title: string;
}

export type RouteStateProps = Partial<RouteStateCoreProps>;

export interface RouteProps<S = RouteStateProps>
  extends Omit<
    RouterDomRouteProps,
    | "component"
    | "children"
    | "path"
    | "render"
    | "strict"
    | "sensitive"
    | "location"
  > {
  path: string;
  state?: S;
}

export interface RouteConfigProps extends RouteProps {
  children?: RouteConfigProps[];
  component: FunctionComponent;
}
