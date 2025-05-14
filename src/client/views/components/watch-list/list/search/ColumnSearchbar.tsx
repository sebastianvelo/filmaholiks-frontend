import { CardHorizontalProps } from "@components/card-horizontal/CardHorizontal";
import Input from "@components/form/input/Input";
import useFetch from "@hooks/useFetch";
import Tailwind from "@tailwind-helper/Tailwind";
import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { ActionableCardProps } from "../../cards/actionable-card/ActionableCard";
import ListSearchResults from "./results/ListSearchResults";

export interface ColumnSearchbarProps {
    title?: string;
    addItem: (item: CardHorizontalProps) => void
    deleteItemOfOtherList: (listIdx: number, itemId: string | number, requiresConfirmation?: boolean) => void;
    searchItems: (query: string) => AxiosRequestConfig<any>;
}

const ColumnSearchbar: React.FC<ColumnSearchbarProps> = (props: ColumnSearchbarProps) => {
    const [query, setQuery] = useState('');

    // Crear la configuración de la petición directamente usando el query actual
    const [response, executeFetch] = useFetch<ActionableCardProps[]>(
        props.searchItems(query),
        { lazy: true }
    );

    // Efecto para ejecutar la búsqueda cuando el query cambia y tiene suficiente longitud
    useEffect(() => {
        if (query.length > 3) {
            executeFetch();
        } else if (response?.data) {
            // Limpiar los resultados si el query es muy corto
            response.data = null;
        }
    }, [query, executeFetch]);

    const handleSearch = (value: string) => {
        setQuery(value);
    };

    const addItem = (item: CardHorizontalProps) => {
        setQuery(''); // Limpiar el query después de agregar un ítem
        props.addItem(item);
    };

    const deleteItem = (listIdx: number, itemId: string | number, requiresConfirmation?: boolean) => {
        setQuery(''); // Limpiar el query después de eliminar un ítem
        props.deleteItemOfOtherList(listIdx, itemId, requiresConfirmation);
    }

    const inputClassName = Tailwind.builder()
        .add('px-4 py-4 transition-color duration-500 cursor-pointer w-full')
        .add('dark:bg-tertiary-900 bg-tertiary-200 dark:placeholder-opacity-50 placeholder-tertiary-900 dark:placeholder-primary-100')
        .add('focus:outline-none')
        .add("rounded-sm")
        .add('dark:text-white text-black')
        .build();

    return (
        <form className="group relative w-full">
            <Input
                revert
                className={inputClassName}
                placeholder={`Search...`}
                onChange={(e) => handleSearch(e.target.value)}
                value={query} // Controlar el input
            />
            <ListSearchResults
                items={response?.data}
                loading={response?.loading}
                addItem={addItem}
                deleteItem={deleteItem}
            />
        </form>
    );
}

export default ColumnSearchbar;