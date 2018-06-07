import React from 'react';
import './index.scss';

export const Container = ({children, }) => (
    <div className="container-fluid">{children}</div>
);

export const Row = ({children, head, tail, justify, }) => {
    const variationsArray = ['row', ];

    if (head) {
        variationsArray.push('row--head');
    }

    if (tail) {
        variationsArray.push('row--tail');
    }

    if (justify) {
        variationsArray.push(`row justify-content-${justify}`);
    }

    return (
        <div className={variationsArray.join(' ')}>{children}</div>
    );
};

export const Column = ({children, columns, xs, sm, md, lg, xl, offsetSm, offsetMd, offsetLg, offsetXl, }) => {
    const variationsArray = ['col', ];

    if (columns) {
        variationsArray.push(`col-${columns}`);
    }

    if (xs) {
        variationsArray.push(`col-xs-${xs}`);
    }

    if (sm) {
        variationsArray.push(`col-sm-${sm}`);
    }

    if (md) {
        variationsArray.push(`col-md-${md}`);
    }

    if (lg) {
        variationsArray.push(`col-lg-${lg}`);
    }

    if (xl) {
        variationsArray.push(`col-xl-${xl}`);
    }

    if (offsetSm) {
        variationsArray.push(`offset-sm-${offsetSm}`);
    }

    if (offsetMd) {
        variationsArray.push(`offset-md-${offsetMd}`);
    }

    if (offsetLg) {
        variationsArray.push(`offset-lg-${offsetLg}`);
    }

    if (offsetXl) {
        variationsArray.push(`offset-xl-${offsetXl}`);
    }


    return (
        <div className={variationsArray.join(' ').trim()}>{children}</div>
    );
};
