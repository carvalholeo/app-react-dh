import React, {useState} from 'react';
import axios from 'axios'
import './app.css';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')

  async function trazerDados() {
    const dados ={
      title,
      price,
      description,
      category,
      image
    }
    const result = await axios.post('https://fakestoreapi.com/products', dados);
    const transformedResult = await result.data;

    console.log(transformedResult);
  }

  async function cuidaDoFormulario(event) {
    event.preventDefault();
    await trazerDados();

    setTitle('')
    setPrice(0)
    setDescription('')
    setImage('')
    setCategory('')

  }

  return (
    <div className="App" id="wrapper" >
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <form id="form-principal" onSubmit={(event) => cuidaDoFormulario(event)}>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <input
              type="number"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
            <input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <input
              type="text"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
            <input
              type="text"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />

            <button>Enviar</button>
          </form>
        </div>
        <Footer />
      </div>

    </div>
  );
}

export default App;
