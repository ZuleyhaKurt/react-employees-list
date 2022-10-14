

const Button = (props) => {
  return (<div className="button-container">
      <button value="Prew" onClick={props.f}>Prew </button>
      <button value="Next" onClick={props.f}>Next</button>
      </div>
  )
}

export default Button