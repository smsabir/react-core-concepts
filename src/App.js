import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const actor = ['Anwar', 'Jafor', 'Alamgir', 'Salman', 'Robert', 'Sabir'];
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price:'$60.99'},
    {name:'PDF reader', price: '$6.99'},
    {name: 'Adobe Premiere', price: '$150.99'}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>My first React Paragraph</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            actor.map(actor => <li>{actor}</li>)
          }
          {
            products.map(products => <li>{products.name}</li> )
          }
        </ul>
        {
          products.map(product => <Product product={product}>{}</Product> )
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}


        {/* <Person name="Munna" job="Footballer"></Person>
        <Person name="Rafiq" job="Cricketer"></Person> */}
        
      </header>
    </div>
  );
}

function Counter(){
  const[count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return(
    <div>
      <h3>Dynamic users: {users.length}</h3>
      {
        users.map(user => <li>{user.email}</li>)
      }
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;

  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

// function Person(props){

//   return(
//     <div style={{border: '2px solid gold', width: '400px', margin: '20px'}}>
//       <h3>My Name: {props.name}</h3>
//       <p>My Profession: {props.job} </p>
//     </div>
//   )
// }
  

export default App;
