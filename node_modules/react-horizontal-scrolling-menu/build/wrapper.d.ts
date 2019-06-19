import React from 'react';
import { Data, RefObject, Void } from './types';
interface ArrowWrapperProps {
    className: string;
    onClick: Function;
    children: JSX.Element;
    isDisabled: boolean;
    disabledClass?: string;
}
export declare class ArrowWrapper extends React.PureComponent<ArrowWrapperProps> {
    static defaultProps: {
        disabledClass: string;
    };
    render(): React.ReactNode;
}
interface InnerStyleProps {
    translate: number;
    dragging: boolean;
    mounted: boolean;
    transition: number;
    inertiaScrolling: boolean;
}
export declare const innerStyle: ({ translate, dragging, mounted, transition, inertiaScrolling, }: InnerStyleProps) => React.CSSProperties;
interface InnerWrapperProps {
    data: Data;
    setRef: (ref: RefObject) => Void;
    setMenuInnerRef: (arg0: any) => Void;
    onClick: Function;
    translate: number;
    dragging: boolean;
    mounted: boolean;
    transition: number;
    selected: string | number;
    innerWrapperStyle: object;
    innerWrapperClass: string;
    itemStyle: object;
    itemClass: string;
    itemClassActive: string;
    inertiaScrolling: boolean;
    useButtonRole: boolean;
}
export declare class InnerWrapper extends React.PureComponent<InnerWrapperProps, {}> {
    static defaultProps: {
        data: never[];
        dragging: boolean;
        mounted: boolean;
        selected: string;
        transition: number;
        translate: number;
    };
    setMenuInnerRef: (value: HTMLDivElement | null) => Void;
    setRef: (key: string, elKey: string, index: number, value: HTMLDivElement | null) => Void;
    isElementActive: (itemId: string | number | null, selected: React.ReactText) => boolean;
    setItems: (arr: JSX.Element[], selected: React.ReactText) => JSX.Element[];
    forwardClickHandler: (key: any, onClick?: Function) => () => Void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=wrapper.d.ts.map