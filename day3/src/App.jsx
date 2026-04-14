import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function fun(){
  return "This is fun"
}
function sum(c,d){
  return c+d;
}

function calc(e,f,op){
  return <>
  <h1>sum {e+f}</h1>
  <h1>sub {e-f}</h1>
  <h1>divide {e/f}</h1>
  <h1>multiply{e*f}</h1>
</>
}

function App() {

   let x = 50
   let y = 50

   const a = 45
   const b = 45
   const name = "Vs Code"

   var n = 69
   var l = 69

  return (
    <>
      <h1>first line of code</h1>
      <h2>second line of code</h2>
      <p>hi i am {name}</p>

    <h3>sum X and Y is by using let {x+y} </h3>
    <h3>sum A and B is by using Const {a+b} </h3>
    <h3>sum N and L is by using Var {n+l} </h3>
    <h1>{fun()}</h1>
    <h1>Parametrized function {sum(76,89)}</h1>
    </>
  )
}

export default App
