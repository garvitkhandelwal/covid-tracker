import React from 'react';
import {
    Card,
    CardContent,
    Typography
} from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({title, cases, isRed, active, total, ...props}) {
    return (
        <Card className={`infoBox && ${active && 'infoBox-selected'} && ${isRed && 'infoBox-red'}`} onClick={props.onClick}>
            <CardContent>
                <Typography className="infoBox-title" color="textSecondary">{title}</Typography>
                <h2 className={`infoBox-cases && ${!isRed && 'infoBox-text-green'}`}>{cases}</h2>
                <Typography className="infoBox-total" color="textSecondary">{total} Total</Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox;
