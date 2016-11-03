import * as React from "react";
import { Shape } from "./shape";

export const Square = (props: { size: number }) =>
    <Shape>Square: { props.size}</Shape>;