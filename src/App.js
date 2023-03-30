import "./App.css";
// import Header from "./components/Header/Header";
// import Total from "./components/Total/Total";
// import Content from "./components/Content/Content";
import { useState, useEffect } from "react";
import axios from "axios";

const getPersons = () => {
  return axios.get('http://localhost:3001/persons')
}

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
  // const [persons, setPerson] = useState ([
  //   {
  //     id: 1,
  //     name: "Alexandr Piskorskii",
  //     number: "996 555 75 94 55" 
  //   },
  //   {
  //     id:2,
  //     name: "Kenan Aliev",
  //     number: "996 555 00 00 00"
  //   },
  //   {
  //     id:3,
  //     name: "Arsen Yusupov",
  //     number: "996 555 11 11 11"
  //   }
    
    
  // ])
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')

  useEffect(() => {
    getPersons()
    .then(res => 
      setPersons(res.data))
  }, [])

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase())
    };
    const foundPerson = persons.find(person => person.name === personObject.name);
  if (foundPerson) {
    alert("такой пользователь уже существует");
  } else {
    setPersons(persons.concat(personObject));
    setNewName('');
  }
  }

  return (
    <div className="App">
      <h1>Контакты</h1>
      <form onSubmit={addPerson}>
        <input 
          type="text" 
          value={newName}
          onChange={event => setNewName(event.target.value)}
            />
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
            <div className="person" key={person.id}>
              <p className="name"><span>Пользователь - </span> {person.name}</p>
              <p className="number"><span>Номер телефона - </span> {person.number}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;


