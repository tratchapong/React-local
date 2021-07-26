function App() {
  const [counter, setCounter] = React.useState(0)
  return(
  <>
    <h1 className="title">React Playground Local</h1>
    <h1>Counter : <span> {counter} </span></h1>
    <div className = "btn">
      <button onClick={()=>setCounter(counter-1)}>-</button>
      <button onClick={()=>setCounter(0)}>0</button>
      <button onClick={()=>setCounter(counter+1)}>+</button>
    </div>
  </>
  )
}
  ReactDOM.render(<App />, document.querySelector('#root'))