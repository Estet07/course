import "./App.css";
import Header from "./components/Header/Header";
import Total from "./components/Total/Total";
import Content from "./components/Content/Content";
import { useState } from "react";

function App() {
  // const course = [
  //   {
  //     id: 1,
  //     name: "IT-RUN React Web Dev",
  //     tasks: [
  //       {
  //         part: "Вводный курс по React",
  //         task: 7,
  //       },
  //       {
  //         part: "Состояние компонента",
  //         task: 15,
  //       },
  //       {
  //         part: "Декомпозиция компонентов",
  //         task: 10,
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "IT-RUN Python Web Dev",
  //     tasks: [
  //       {
  //         part: "Вводный курс по Python",
  //         task: 5,
  //       },
  //       {
  //         part: "Переменные циклы Python",
  //         task: 12,
  //       },
  //       {
  //         part: "Фреймворк Django",
  //         task: 17,
  //       },
  //     ],
  //   },
  // ];
  const [persons, setPerson] = useState ([
    {name: "Alexandr Piskorskii"},
    {name: "Kenan Aliev"}
    
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase())
    };
    const foundPerson = persons.find(person => person.name === personObject.name);
  if (foundPerson) {
    alert("такой пользователь уже существует");
  } else {
    setPerson(persons.concat(personObject));
    setNewName('');
  }
  }

  return (
    <div className="App">
      <h1>Пользователи</h1>
      <form onSubmit={addPerson}>
        <input 
          type="text" 
          value={newName}
          onChange={event => setNewName(event.target.value)}
            />
        <input type="submit" value="Добавить пользователя"/>
      </form>
      <div>
        {persons.map((person) => {
          return (
          <p className="person" key={person.name}><span>Пользователь - </span> {person.name}</p>
          );
        })}
      </div>
    </div>
  );
}

export default App;


