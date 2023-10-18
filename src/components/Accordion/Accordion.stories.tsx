import React, {useState} from "react";
import {Story} from "@storybook/react";
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: "Accordion stories",
    component: Accordion
}

const callback = action("accordion mode changed event fired")
const onClickCallback = action("some item was clicked")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback}/>

export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback}
                                                     items={[{title: "Daniil", value: 1}, {title: "Ksenia", value: 2},
                                                         {title: "Diamond", value: 3}, {title: "Peach", value: 4}]} onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue="Users" collapsed={value} onChange={() => setValue(!value)} items={[{title: "Daniil", value: 1}, {title: "Ksenia", value: 2},
        {title: "Diamond", value: 3}, {title: "Peach", value: 4}]} onClick={(value) => {alert(`user with ${value} be happy!`)}}/>
}