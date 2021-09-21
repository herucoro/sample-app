import React from "react";
import { ButtonBase } from "@material-ui/core";

function CustomButton(props:any) {
    return (
        <div>
            <ButtonBase type="button">{props.name}</ButtonBase>
        </div>
    )
}
