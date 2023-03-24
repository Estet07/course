import './App.css';
import Header from './components/Header/Header';
import Total from './components/Total/Total';
import Content from './components/Content/Content';

function App() {
  const course = [ 
    {  
      id: 1, 
      name: "IT-RUN React Web Dev", 
      tasks : [ 
        { 
          part: "Вводный курс по React", 
          task: 7 
        }, 
        { 
          part: "Состояние компонента", 
          task: 15 
        }, 
        { 
          part: "Декомпозиция компонентов", 
          task: 10 
        }, 
      ] 
    }, 
    {  
      id: 2, 
      name: "IT-RUN Python Web Dev", 
      tasks : [ 
        { 
          part: "Вводный курс по Python", 
          task: 5 
        }, 
        { 
          part: "Переменные циклы Python", 
          task: 12 
        }, 
        { 
          part: "Фреймворк Django", 
          task: 17 
        }, 
      ] 
    } 
  ]
  return (
    
    <div className='App'>
      <Header course = {course}/>
      <Content tasks = {tasks}/>
      <Total />
    </div>
    
  );
}

export default App;

// Декомпозировать компонент App таким образом, чтобы внутри было 3 компонента, при этом все переменные остаются в компоненте App()
// В компонент Header положить название курса. Внутри Header должен быть h1
// Внутри компонента Content должно три компонента <Part />
// Внутри компонента Total должен быть <p> с общим количеством задач. 
// function App() { 

//  return ( 
//    <div>
//     <Header course={course} />
//     <Content ... />
//     <Total ... />
//    </div>
// )

// }

// Компонент, который находится внутри Content должен состоять из <p> {part} {tasks}<p/>
// const Content = () => {
//    return (
//      <>
//        <Part ... />
//        <Part ... />
//        <Part ... />
//     </>
//   )
// } 
// Создать новый репозиторий для данного проекта. Синхронизировать его с папкой course на вашем компьютере. После выполнения ДЗ выложить его в репозиторий.
