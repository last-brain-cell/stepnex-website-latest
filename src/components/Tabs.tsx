import {Dispatch, SetStateAction} from "react";
import {StaticImageData} from "next/image";


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export interface TabItem {
    title: string
    content: string
    image: StaticImageData

}


export default function Tabs({items, current, setCurrent}: {items: TabItem[], current: string, setCurrent: Dispatch<SetStateAction<string>> }) {
    return (
        <div>
            <div className={'block lg:hidden'}>
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    defaultValue={current}
                    className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                >
                    {items.map((tab) => (
                        <option key={tab.title}>{tab.title}</option>
                    ))}
                </select>
            </div>
            <div className="">
                <nav aria-label="Tabs" className="flex space-x-4">
                    {items.map((tab) => (
                        <button
                            onClick={() => setCurrent(tab.title)}
                            key={tab.title}
                            aria-current={current === tab.title  ? 'page' : undefined}
                            className={classNames(
                                tab.title === current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                                'rounded-md px-3 py-2 text-sm font-medium',
                            )}
                        >
                            {tab.title}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    )
}
