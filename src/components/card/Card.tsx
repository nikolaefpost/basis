import React, { FC, PropsWithChildren } from 'react';
import {CardType, CardVariant} from '../../types';
import styles from "./card.module.scss"



const Card: FC<PropsWithChildren<CardType>> = ({width , variant, children}) => {
    return (
        <div
            style={{width,
                border: variant === CardVariant.outlined ? "1px solid grey": "none",
                background: variant === CardVariant.primary ? "Lightgray": "transparent"
            }}
            className={styles.card}
        >
            {children}
        </div>
    );
};

export default Card;