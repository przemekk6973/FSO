import { useState } from 'react'

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td> 
  </tr>
)

const Statistics = (props) => {
  const { good, neutral, bad } = props.data; // Destructuring props
  const all = good + neutral + bad;
  const average = all === 0 ? 0 : (good - bad) / all;
  const positive = all === 0 ? 0 : (good / all) * 100;

  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
      <StatisticLine text ="good" value={good}/>
      <StatisticLine text ="neutral" value={neutral}/>
      <StatisticLine text ="bad" value={bad}/>
      <StatisticLine text ="all" value={all}/>
      <StatisticLine text ="average" value={average.toFixed(2)}/>
      <StatisticLine text="positive" value={`${positive.toFixed(2)} %`} />
        </tbody>
      </table>

    </div>
  );
};

// Main App component
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="bad"/>

      {/* Passing props as a single object */}
      <Statistics data={{ good, neutral, bad }} />
    </div>
  );
};


export default App