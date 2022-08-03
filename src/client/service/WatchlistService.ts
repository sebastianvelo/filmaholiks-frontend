import { ItemProps } from "client/views/pages/watchlist/lists/list/actionable-item/item/Item";

class WatchlistService {
    private static ITEM_KEY = "item";

    private static COLUMN_KEY = "column";

    public static getItemFromEvent = (event: React.DragEvent<HTMLElement>): ItemProps | undefined =>
        event.dataTransfer.getData(WatchlistService.ITEM_KEY) && JSON.parse(event.dataTransfer.getData(WatchlistService.ITEM_KEY));

    public static getColumnFromEvent = (event: React.DragEvent<HTMLElement>): number | boolean =>
        event.dataTransfer.getData(WatchlistService.COLUMN_KEY) !== "" && +event.dataTransfer.getData(WatchlistService.COLUMN_KEY);

    public static setItemFromEvent = (event: React.DragEvent<HTMLElement>, item: ItemProps): void => {
        event.dataTransfer.setData("item", JSON.stringify(item))
    }

    public static setColumnFromEvent = (event: React.DragEvent<HTMLElement>, idx: number): void => {
        if (!WatchlistService.getItemFromEvent(event))
            event.dataTransfer.setData(WatchlistService.COLUMN_KEY, String(idx))
    };

    public static handleAddCard = (event: React.DragEvent<HTMLElement>, addCard: (item: ItemProps) => void) => {
        const card = WatchlistService.getItemFromEvent(event);
        if (card) addCard(card);
    }


    public static handleSwapColumns = (event: React.DragEvent<HTMLElement>, swap: (target: number) => void) => {
        const column = WatchlistService.getColumnFromEvent(event);
        if (typeof column === 'number') swap(column);
    }

}

export default WatchlistService;