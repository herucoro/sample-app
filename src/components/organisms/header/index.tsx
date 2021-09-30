import React from "react";
import { useForm, Controller } from "react-hook-form"
import { Grid, FormLabel, InputBase, makeStyles, TextField } from "@material-ui/core";
import DatePicker from "react-datepicker"

const useStyles = makeStyles({
    root: {
    },
    labelStyles: {
        
    },
    inputStyles: {
        
    },


})

function SampleHeader () {
    const classes = useStyles()

    const { control, handleSubmit } = useForm({
        defaultValues: {
            orderNumber: "",
            manageNumber: "",
            // manageCaption: "",
            orderDate: "2021-09-16",
            employeeCode: "",
            // orderRemake: "",
        },
    });
    return (
        <Grid container>
            <Grid sm={2}/>
            <form>
                <Grid container spacing={2}>         
                    <Grid item>       
                        <Controller
                            control={control}
                            name="orderNumber"
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    label="伝票番号"
                                    placeholder="伝票番号を入力して下さい"
                                    InputLabelProps={{style: {fontSize: 20}}}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item>
                        <Controller
                            control={control}
                            name="manageNumber"
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    label="管理番号"
                                    placeholder="管理番号を入力して下さい"
                                    InputLabelProps={{style: {fontSize: 20}}}                       
                                />
                            )}
                        />
                    </Grid>
                </Grid>                                
                <Grid container spacing={6}>
                    <Grid item>
                        <Controller
                            control={control}
                            name="orderDate"
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    label="依頼日"
                                    type="date"
                                    placeholder=""
                                    InputLabelProps={{style: {fontSize: 20}}}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item>
                        <Controller
                            control={control}
                            name="employeeCode"
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    label="依頼者"
                                    placeholder="社員番号を入力して下さい"
                                    InputLabelProps={{style: {fontSize: 20}}}
                                />
                            )}
                        />
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
}

export default SampleHeader