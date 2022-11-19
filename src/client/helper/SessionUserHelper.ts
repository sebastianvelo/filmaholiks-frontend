import UserEntity from "shared/entity/user/UserEntity";

class SessionUserHelper {
    private static KEY = "user";

    public static setUser(user: UserEntity): void {
        sessionStorage.setItem(SessionUserHelper.KEY, JSON.stringify(user));
    }

    public static getUser(): UserEntity | null {
        const user = sessionStorage.getItem(SessionUserHelper.KEY);
        if (user)
            return JSON.parse(user) as UserEntity;
        return null;
    }

    public static signOut(): void {
        sessionStorage.removeItem(SessionUserHelper.KEY);
    }
}

export default SessionUserHelper;