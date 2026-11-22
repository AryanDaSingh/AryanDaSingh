import { useState, type ChangeEvent } from 'react';
import './App.css';

function FormGeneral() {
  // const [isEditable, setEditable] = useState(false);


  return(
    <fieldset>
      <legend>General info</legend>
      <label htmlFor='firstName'>First name: <br />
        <input type="text" placeholder="John" name='firstName' id='firstName' />
      </label>
      <br />
      <label htmlFor='lastName'>Last name: <br/>
        <input type="text" placeholder="Doe" name='lastName' id='lastName' />
      </label>
      <br />
      <label htmlFor="email">Email: <br />
        <input type="email" placeholder='you@example.com' name="email" id="email" />
      </label>
      <br />
      <label htmlFor="phone">Phone: <br />
        <input type="tel" placeholder='+1 555 234 5678' />
      </label>
      </fieldset>
  );
}

function FormEducation() {
  const [eduLevel, setEduLevel] = useState('');

  const handleLevelChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setEduLevel(e.target.value);
  };

  return(
    <fieldset>
      <legend>Education</legend>
      <label htmlFor="schoolName">University: <br />
        <input type="text" placeholder='Name' id='schoolName' name='schoolName' />
      </label>
      <br />
      <label htmlFor="degree">Field: <br />
        <input type="text" placeholder='Bachelors, masters, PhD' id='degree' name='degree' />
      </label>
      <br />
      <label htmlFor="eduLevel">Latest level of education: <br />
        <select name="level" id="eduLevel" value={eduLevel} onChange={handleLevelChange}>
          <option value="">-- Select --</option>
          <optgroup label='K-12'>
            <option value="K">K</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </optgroup>
          <optgroup label='Others'>
            <option value="university">University</option>
          </optgroup>
        </select>
        {eduLevel === "university" && (
          <>
            <br />
            <label htmlFor="years">Years in further education: <br />
              <input type="number" placeholder='Years' id='years' name='years'/>
            </label>
          </>
        )}
      </label>
      <br />
    </fieldset>
  );
}

function FormExperience() {
  return(
    <fieldset>
      <legend>Experience</legend>
      <label htmlFor="jobName">Previous job company: <br />
        <input type="text" placeholder='John Stone Inc' id='jobName' name='jobName' />
      </label>
      <br />
      <label htmlFor="title">Previous title: <br />
        <input type="text" placeholder='Asset Manager' id='title' name='title' />
      </label>
      <br />
      <label htmlFor="responsibilities">Responsiblilties: <br />
        <textarea placeholder='Your responsibilities...' name="responsibilities" id="responsibilities"></textarea>
      </label>
      <br />
      <label htmlFor="experience">Years of total experience: <br />
        <input type="number" placeholder='Years' id='experience' name='experience' />
      </label>
    </fieldset>
  );
}

// interface FormBtnsProps {
//   isDisabled: boolean;
//   setIsDisabled;
// }

// function FormBtns({isDisabled, setIsDisabled}: FormBtnsProps) {
//   return(
//     <>
//       <button type="button" onClick={() => setIsDisabled((prev) => !prev)}>
//         {isDisabled ? 'Edit': 'Close'}
//       </button>
//       <button type='submit' disabled={isDisabled}>Submit</button>
//     </>
//   );
// }

function CVForm() {
  return (
    <form>
      <h1>J*b Application</h1>
      <FormGeneral />
      <FormEducation />
      <FormExperience />
      <br />

    </form>
  );
}

function App() {
  return(
    <CVForm />
  );
}

export default App;
