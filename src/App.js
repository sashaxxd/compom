import React from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import DeviceContainer from "./containers/DeviceContainer";


function App() {
  return (
      //Шаблон сайта
      <Layout>

         <DeviceContainer/>


      </Layout>
  );
}

export default App;
