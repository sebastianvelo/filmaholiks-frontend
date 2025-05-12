import appBlueprint from "blueprint/AppBlueprint";
import { AppProps } from "client/App";
import { useEffect, useState } from "react";
import useFirebaseUser from "./useFirebaseUser";

const useAppBlueprint = (): AppProps => {
    const { user } = useFirebaseUser();
    const [blueprint, setBlueprint] = useState(appBlueprint(user))

    useEffect(() => {
        setBlueprint(appBlueprint(user));
    }, [user?.email]);

    return blueprint;
};

export default useAppBlueprint;