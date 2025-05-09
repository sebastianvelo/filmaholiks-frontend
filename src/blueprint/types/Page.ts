import PageRoute from "shared/routes/PageRoute";

type Page<Props> = {
    route: PageRoute;
    component: React.FC<any>;
    props?: Props;
}

export default Page;