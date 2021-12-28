// mobile
import { RouterType } from "./types";
import LazyLoad from "src/components/Lazyload";
type PackageRouter = Array<RouterType>;

// 移动端会将describe字段渲染到document.title中
const pcRouter: PackageRouter = [
  {
    path: "/home",
    catch: false,
    describe: "主页",
    components: LazyLoad(() => import(/* webpackChunkName: "pcRouter" */ "src/containers/pc/Home")),
  },
];

export default pcRouter;
