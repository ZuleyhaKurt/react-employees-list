import data from "../helper/data";


const Card = (props) => {
    return (
        (data.slice(props.count, props.count + 5).map((item, index) => {
            const {name, age, image, email } = item;
            return (
                <div className="card">
          <div className="img"><img  src={image} alt="" /></div>
          <div className="content">
              <p><b>{name}</b></p>
              <p className="email">{email}</p>
              <p className="age">{age}</p>
          </div>   
        </div>
               
           )
       }))
   )
    
 
}

export default Card