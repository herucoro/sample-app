import React from "react";
import { FormLabel } from "@material-ui/core";

function CustomLabel(props:any) {
    return (
        <div>
            <FormLabel>{props.name}</FormLabel>
        </div>
    )
}

export default CustomLabel