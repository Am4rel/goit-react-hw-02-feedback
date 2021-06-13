import React, { Component } from 'react';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Section from './Components/Section/Section';
import Statistics from './Components/Statistics/Statistics'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = e => {
    e.preventDefault();
    const name = e.currentTarget.name;

    this.setState(prevState => {
      return { [name]: prevState[name] + 1 }
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const sumMarks = good + neutral + bad;
    const goodPercentage = sumMarks ? Math.floor(good / sumMarks * 100) + "%" : 0;
    return <>
      <Section title="Please, leave feedback.">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} total={sumMarks} positivePercentage={goodPercentage}></Statistics>
      </Section>
      </>
  }
}

export default App;