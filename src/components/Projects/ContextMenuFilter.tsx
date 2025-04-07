import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

export const ContextMenuFilter = ({
    title,
    items,
    selected,
    setSelected,
    isOpen,
    setIsOpen,
} : {
    title: string;
    items: string[];
    selected: string[];
    setSelected: (val: string[]) => void;
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
}) => {
    const toggleSelection = (item: string) => {
        if (selected.includes(item)) {
            setSelected(selected.filter((i) => i !== item));
        } else {
            setSelected([...selected, item]);
        }
    };

    return (
        <div className="relative w-auto">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-auto px-4 py-2 border rounded bg-white text-left shadow-sm hover:bg-gray-50 cursor-pointer"
            >
                {title} {selected.length > 0 && `(${selected.length})`}
                {isOpen ? (
                    <ChevronUpIcon className="h-5 w-5 inline-block ml-2" />
                ) : (
                    <ChevronDownIcon className="h-5 w-5 inline-block ml-2" />
                )}
            </button>

            {isOpen && (
                <div className="absolute z-10 max-h-60 overflow-y-auto bg-white border rounded shadow-md p-2 w-100">
                    <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                            <div
                                key={item}
                                onClick={() => toggleSelection(item)}
                                className={`flex items-center gap-2 py-1 px-3 cursor-pointer rounded-full w-auto
                                    ${selected.includes(item) ? `bg-(--secondary-200) text-(--primary-600)` : `bg-gray-100 text-gray-800`} 
                                    hover:bg-(--secondary-200) hover:text-(--primary-600)`}
                            >
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
