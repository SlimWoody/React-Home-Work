import './App.css';
import Message from './components/Message';

function App() {
  let myName = ['Pavel', 'Vasy', 'Kiril'];
  let myMessage = ['Мы рады видеть Вас', 'Хорошая погода что-бы прогулятся', 'Что-то пошло не так....']
  return (
    <div className="App">
      <header className="App-header">
        <div className='my-massage'>
          <Message userName={myName[0]} message={myMessage[0]} />
          <Message userName={myName[1]} message={myMessage[1]} />
          <Message userName={myName[2]} message={myMessage[2]} />
        </div>
      </header>
    </div>
  );
}

export default App;
