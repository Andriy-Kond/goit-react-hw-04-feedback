// todo: Рефакторінг затримок за допомогою useMemo
// import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

import { useState, useReducer } from 'react';

// refactoring to hooks:
export const App = () => {
  const [feedbackObj, setFeedbackObj] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = feedbackObj;

  const handleClick = currentBtnName => {
    setFeedbackObj({
      ...feedbackObj,
      [currentBtnName]: feedbackObj[currentBtnName] + 1,
    });
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = total => {
    return total && Math.round((100 / total) * good);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbackObj)}
          onLeaveFeedback={handleClick}
        ></FeedbackOptions>
      </Section>
      {good || neutral || bad ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          ></Statistics>
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = currentBtnName => {
//     this.setState(prevState => {
//       return { [currentBtnName]: prevState[currentBtnName] + 1 };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = total => {
//     return total && Math.round((100 / total) * this.state.good);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleClick}
//           ></FeedbackOptions>
//         </Section>
//         {good || neutral || bad ? (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback}
//               positivePercentage={this.countPositiveFeedbackPercentage}
//             ></Statistics>
//           </Section>
//         ) : (
//           <Notification message="There is no feedback"></Notification>
//         )}
//       </div>
//     );
//   }
// }
