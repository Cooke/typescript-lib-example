import * as React from "react";

export const Shape = (props: { children?: React.ReactNode}) =>
    <div className="shape">{props.children}</div>;