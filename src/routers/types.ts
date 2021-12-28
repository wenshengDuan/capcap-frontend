import { RouteComponentProps } from "react-router";

export type RouterType = {
  path: string;
  catch: boolean;
  describe: string;
  components: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  isMobile?: boolean;
};
