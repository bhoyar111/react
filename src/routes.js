import { lazy } from "react";

const Nav   = lazy(() => import('./view/Components/Header'));
const Cards = lazy(() => import('./view/Components/ApiSaveData'));

const routes = [
    { payh: '/', exact:true, name: "Nav", component: Nav},
    { path: '/', exact: true, name: "Cards", component: Cards }
];

export default routes;