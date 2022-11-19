import appBlueprint from "blueprint/AppBlueprint";
import { AppProps } from "client/App";
import { useEffect, useState } from "react";
import useUserEntity from "./useUserEntity";

const useAppBlueprint = (): AppProps => {
    const { user } = useUserEntity();
    const [blueprint, setBlueprint] = useState(appBlueprint(user))

    useEffect(() => {
        setBlueprint(appBlueprint(user));
    }, [user?.email]);

    return blueprint;
};

export default useAppBlueprint;