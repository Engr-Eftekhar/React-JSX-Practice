import react,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';
import ProductList from './components/ProductList.js';
import Footer from './components/Footer.js';



function App() {
  const products= [
    {
      price: 99999,
      name:"Iphone xs max",
      quantity: 0,
    },
    {
      price: 9999,
      name:"Redmi note 10s",
      quantity: 0,
    },
    {
    price: 999,
    name: "Walton button phone",
    quantity: 0,
    },
    {
      price: 9009,
      name: "symphony FT10",
      quantity: 0,
      },
  ]
   let [productList ,setProductList] = useState(products) 

   const increamentQuantity = (index) =>{
    let newProductList = [...productList]
    newProductList[index].quantity++
  setProductList(newProductList);
  }

  return(
    <>
    <Navbar/>
    <main className='container mt-5'>
    <ProductList productList={productList} increamentQuantity={increamentQuantity}/> 
    </main>
    

    <Footer/>

    </>
    
  );
}

export default App;
