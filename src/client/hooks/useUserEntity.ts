import UserRequest from "api/request/user/UserRequest";
import SessionUserHelper from "client/helper/SessionUserHelper";
import { useEffect, useState } from "react";
import { useUser } from "reactfire";
import UserEntity from "shared/entity/user/UserEntity";

export interface UseUserEntity {
  user: UserEntity | null;
  signOut: () => void;
}

const useUserEntity = (): UseUserEntity => {
  const reactfireUser = useUser();
  const [user, setUser] = useState<UserEntity | null>(null);

  useEffect(() => {
    if (reactfireUser?.data?.email) {
      UserRequest.getByEmail(reactfireUser.data.email).then(u => {
        setUser(u);
        SessionUserHelper.setUser(u);
      });
    } else {
      setUser(null);
    }
  }, [reactfireUser?.data?.email]);

  const signOut = () => {
    setUser(null);
  }

  return { user, signOut };
}

export default useUserEntity;