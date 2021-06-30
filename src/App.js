import arrow from './icon-arrow-down.svg';
import illustrationBox from './illustration-box-desktop.svg';
import './App.css';
import { useState } from 'react';
const faq = [
  {
    active:false,
    question: 
    "How many team members can I invite?",
    answer:
  "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",

  },
{
  active:false,
  question: "What is the maximum file upload size?",
  answer: "No more than 2GB. All files in your account must fit your allotted storage space."
}, 
 { 
  active:false,
  question:"How do I reset my password?",
  answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
},
 { 
  active:false,
  question:'Can I cancel my subscription?',
 answer: 'Yes! Send us a message and we’ll process your request no questions asked.'
},
 { 
  active:false,
   question: 'Do you provide additional support?',
   answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
}
  
]
function App() {
  const[state, setState] = useState([...faq]);
  const handleClick = (index) => {
    console.log(index);
    const clone = faq.map(f => ({...f}));
    clone[index].active = !state[index].active;
    setState(clone);
  }
  return (
    <div className="App">
      <div className="Card">
        <img className="illustrationBox" src={illustrationBox} alt="box with @ sign"/>

        <div className="Container">
          <h1>FAQ</h1>
          <div>
          {state.map((item, index) => (
              <div key={index} className="Accordion">
                <div onClick={() => handleClick(index)} className="Question">
                  <span className={`Title ${item.active && 'Active'}`} >{item.question}</span>
                  <img src={arrow} className={`Arrow ${item.active&& 'Active'}`} alt="arrow" />
                </div>
                {item.active && <div className="Answer">
                  {item.answer}
                </div>}
              </div>
            ))
          }
        </div>
        
      </div>
      
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded by <a href="github.com/yabets">Yabets</a>.
      </div>
    </div>
  );
}

export default App;
