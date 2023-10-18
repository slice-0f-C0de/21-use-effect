import React from "react";
import {RatingValueType} from "../Rating/Rating";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const selectedItem = props.items.find(i => i.value === props.value)

    return <div>
        <select>
            <option value="">Moscow</option>
            <option value="">Saint-Petersburg</option>
            <option value="">Astrakhan</option>
        </select>
       <h3>{selectedItem && selectedItem.title}</h3>
        {props.items.map(i => <div>{i.title}</div>)}
    </div>
}