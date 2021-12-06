import { lazy } from "react";

const Header    = lazy(() => import('./view/Components/Header'));
const Card      = lazy(() => import('./view/Components/GoogleTranslator'));

const routes = [
    { payh: '/', exact:true, name: "Header", component: Header},
    { path: '/', exact: true, name: "Card", component: Card }
];

export default routes;