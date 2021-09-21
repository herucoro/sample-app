import { FormLabel, InputBase } from "@material-ui/core";
import React from "react";

function CustomLabelInput(props:any) {
    return (
        <div>
            <FormLabel >{props.labelCaption}</FormLabel>
            <InputBase type="text" placeholder={props.placeholder} />
        </div>
    )
}

export default CustomLabelInput