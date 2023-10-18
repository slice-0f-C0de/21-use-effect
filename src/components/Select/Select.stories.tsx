import {Rating, RatingValueType} from "../Rating/Rating";
import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: "Select stories",
    component: Select
}

export const WithValue = () => <Select onChange={action("value changed")}
                                         value={1}
                                         items={[
                                             {value: 1, title: "Moscow"},
                                             {value: 2, title: "Saint-Petersburg"},
                                             {value: 3, title: "Astrakhan"},
                                         ]}/>

export const WithoutValue = () => <Select onChange={action("value changed")}
                                         value={1}
                                         items={[
                                             {value: 1, title: "Moscow"},
                                             {value: 2, title: "Saint-Petersburg"},
                                             {value: 3, title: "Astrakhan"},
                                         ]}/>