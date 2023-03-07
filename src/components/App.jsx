import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';


export  function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const onLeaveFeedback = event => {
    switch (event.currentTarget.name) {
      case 'good':
        setGood(prevGood => prevGood + 1)
        break;
       case 'bad':
        setBad(prevBad => prevBad + 1)
        break;
       case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1)
        break;
    
      default:
        break;
      
    }
  };
     const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percentage = (good / total) * 100;
    return Math.round(percentage);
  };

  return (
    <Layout>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback :)" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Layout>
    );
} 




// export class App extends Component {
//   static propTypes = {};

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = event => {
//     const { name } = event.currentTarget;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };
//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const { good } = this.state;
//     const percentage = (good / total) * 100;
//     return Math.round(percentage);
//   };
//   render() {
//     return (
//       <Layout>
//         <GlobalStyle />
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() === 0 ? (
//             <Notification message="There is no feedback :)" />
//           ) : (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </Layout>
//     );
//   }
// }
//export default App;
