import "./App.css";
import UseStatePractice from "./Components/UseStatePractice";
import UseEffectPractice from "./Components/UseEffectPractice";
import Excercise1 from "./Components/Excercise1";

function App() {
  return (
    <div className="App">
      <Excercise1 />

      {/* 

<UseStatePractice />
<hr />
<UseEffectPractice /> */}

      {/* <ul className="divide-y divide-gray-200">
        {people.map((person) => (
          <li key={person.email} className="py-4 flex">
            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{person.name}</p>
              <p className="text-sm text-gray-500">{person.email}</p>
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
