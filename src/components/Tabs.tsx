import {Dispatch, SetStateAction} from "react";
import {StaticImageData} from "next/image";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/outline";


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


export interface TabItem {
    title: string
    content: string
    image: StaticImageData

}


export default function Tabs({items, current, setCurrent}: {items: TabItem[], current: TabItem, setCurrent: Dispatch<SetStateAction<TabItem>> }) {

    const prev = () => {
        if (items.indexOf(current) === 0) {
            setCurrent(items[items.length - 1])
            return
        }
        setCurrent(items[items.indexOf(current) - 1])
    }
    const next = () => {
        if (items.indexOf(current) === items.length - 1) {
            setCurrent(items[0])
            return
        }
        setCurrent(items[items.indexOf(current) + 1])
    }


    return (
        <div>
            <div className="">
                <nav aria-label="Tabs" className="flex space-x-4 overflow-x-auto no-scrollbar justify-between px-4 items-center">
                    <button onClick={prev}>
                        <ChevronLeftIcon className={'h-8 stroke-gray-500'}/>
                    </button>
                        <button
                            onClick={() => setCurrent(current)}
                            key={current.title}
                            aria-current={current === current  ? 'page' : undefined}
                            className={classNames(
                                current === current ? '  text-stepnex-blue' : 'text-gray-500 hover:text-gray-700',
                                'rounded-md px-3 py-2 text-md font-medium  text-nowrap',
                            )}
                        >
                            {current.title}
                        </button>
                    <button onClick={next}>
                        <ChevronRightIcon  className={'h-8 stroke-gray-500'}/>
                    </button>
                </nav>
            </div>
        </div>
    )
}
