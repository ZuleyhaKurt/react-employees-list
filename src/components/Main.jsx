import Card from "./Card"
import Button from "./Button";
import Header from "./Header";
import { useState } from "react"

const Main = () => {
    const [count, setCount] = useState(0)
    const onClick = (e)=>{
        if (e.target.value === "Next") {
            if (count >= 0 && count < 11){
            setCount(count+5)
            }
            else if (count >= 15) {
                setCount(0)
                 }
        }

        if (e.target.value === "Prew") {
            if (count >= 0) {
            setCount(count-5)
            }
            if (count <= 0) {
                setCount(15)
            }
        }
}




  return (
    <div className="container">
        <div className="head">
            <p className="header">Employee List</p>
              <Header count={count} />
              <hr/>
        </div>
        <div className="card-container">
              <Card count={count} />
        </div>
        <div>
            <Button f={onClick} />
        </div>
    </div>
  )
}

export default Main




