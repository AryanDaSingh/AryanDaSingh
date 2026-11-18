const course = 'Half Stack application development';
const part1 = 'Fundamentals of React';
const exercises1 = 10;
const part2 = 'Using props to pass data';
const exercises2 = 7;
const part3 = 'State of a component';
const exercises3 = 14;

function Header() {
  return(
    <h1>{course}</h1>
  );
}

function Content() {
  return(
    <>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </>
  );
}

function Total() {
  const total = exercises1 + exercises2 + exercises3;

  return(
    <p>Number of exercises: {total}</p>
  );
}

function App() {

  return(
    <>
      <Header />
      <Content />
      <Total />
    </>
  );
}

export default App;