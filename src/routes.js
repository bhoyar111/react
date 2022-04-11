import { lazy } from "react";

const Header    = lazy(() => import('./view/Components/Header'));
const DemoComp  = lazy(() => import('./view/Components/Registration'));

const routes = [
    { payh: '/', exact:true, name: "Header", component: Header},
    { path: '/', exact: true, name: "DemoComp", component: DemoComp }
];

export default routes;