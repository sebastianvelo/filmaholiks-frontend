import appBlueprint from "blueprint/AppBlueprint";
import { AppProps } from "client/App";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useAppBlueprint = (): AppProps => {
    const { user } = useAuth();
    const [blueprint, setBlueprint] = useState(appBlueprint(user))

    useEffect(() => {
        setBlueprint(appBlueprint(user));
    }, [user?.email]);

    return blueprint;
};

export default useAppBlueprint;