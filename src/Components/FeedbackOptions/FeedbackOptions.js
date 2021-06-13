import React from 'react';
import styles from './FeedbackOptions.module.css';
import capitalize from '../Elements/capitalizator';

const FeedbackOptions = props => {
    
    return <div className={styles.list}>
        {props.options.map(option => {
            const capitalizedName = capitalize(option)
            return <button key={option} type='button' name={option} onClick={props.onLeaveFeedback} className={styles.listItem}>{capitalizedName}</button>
        })}
    </div>
};

export default FeedbackOptions;