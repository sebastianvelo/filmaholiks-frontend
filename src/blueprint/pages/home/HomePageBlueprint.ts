import Page from "blueprint/types/Page";
import { ExplorePageBlueprintProps } from "client/views/pages/explore/ExplorePage";
import PageRoute from "shared/routes/PageRoute";
import { MovieExplorePageBlueprint } from "../explore/ExplorePageBlueprint";

export const HomePageBlueprint: Page<ExplorePageBlueprintProps> = {
    ...MovieExplorePageBlueprint,
    route: PageRoute.HOME,
};