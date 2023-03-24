import "./App.css";
import Header from "./components/Header/Header";
import Total from "./components/Total/Total";
import Content from "./components/Content/Content";

function App() {
  const course = [
    {
      id: 1,
      name: "IT-RUN React Web Dev",
      tasks: [
        {
          part: "Вводный курс по React",
          task: 7,
        },
        {
          part: "Состояние компонента",
          task: 15,
        },
        {
          part: "Декомпозиция компонентов",
          task: 10,
        },
      ],
    },
    {
      id: 2,
      name: "IT-RUN Python Web Dev",
      tasks: [
        {
          part: "Вводный курс по Python",
          task: 5,
        },
        {
          part: "Переменные циклы Python",
          task: 12,
        },
        {
          part: "Фреймворк Django",
          task: 17,
        },
      ],
    },
  ];
  return (
    <div className="App">
      {course.map((c) => {
        return (
          <>
            <Header course = {c} />
            <Content tasks = {c.tasks} />
            <Total tasks = {c.tasks}/>
          </>
        );
      })}
    </div>
  );
}

export default App;


