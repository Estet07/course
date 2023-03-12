import './App.css';
import Header from './components/Header/Header';
import Total from './components/Total/Total';
import Conten from './components/Content/Content';

function App() {
  const course = "IT-RUN React Web Dev";
  const part1 = "Вводный курс по React"
  const task1 = 7
  const part2 = "Состояние компонента"
  const task2 = 10
  const part3 = "Декомпозиция компонента"
  const task3 = 5
  return (
    
    <div className='App'>
      <Header course = {course}/>
      <Conten 
      task1 = {task1} part1 = {part1}
      task2 = {task2} part2 = {part2}
      task3 = {task3} part3 = {part3}
      />
      <Total task1 = {task1} task2 = {task2} task3 = {task3}/>
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
