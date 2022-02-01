import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import { useState } from "react";

const users = [
	{id:1, name: 'user1', surn: 'surn1', age: 30},
	{id:2, name: 'user2', surn: 'surn2', age: 31},
	{id:3, name: 'user3', surn: 'surn3', age: 32},
];
function App() {
  
  return (
    <div >
      <Header />
      <Main/>
      <Footer />
    
      
    </div>
  );
}

export default App;
