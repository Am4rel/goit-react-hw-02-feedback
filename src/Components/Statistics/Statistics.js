import React, { Component } from 'react';
import capitalize from '../Elements/capitalizator';
import styles from './Statistics.module.css';

class Statistics extends Component {

    makeListItem = (key, content) => {
        return <li key={key} className={styles.listItem}><p className={styles.text}>{content}: </p><p className={styles.text}>{this.props[key]}</p></li>
    };

    makeList = keys => {
        return keys.map(key => {
            const capitalizedKey = capitalize(key);
            return key === "positivePercentage" ? this.makeListItem(key, "Positive feedback") : this.makeListItem(key, capitalizedKey)})
    };

    render() {
        const keys = Object.keys(this.props);
        const markUp = this.props.total ? <ul className={styles.list}>{this.makeList(keys)}</ul> : <h4>No feedbacks given yet...</h4>
        return markUp;
    }
}

export default Statistics;