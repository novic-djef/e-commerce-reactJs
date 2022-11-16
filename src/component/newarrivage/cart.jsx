import Ndata from './Ndata'



export default function Cart() {
    return(
        <>
            <div className="content grid product">
                {Ndata.map((nov, index) => {
                  return(
                    <div className="box"  key={index}>
                        <div className="img">
                           <figure><img src={nov.cover} alt={nov.name} /></figure>  
                        </div>
                        <h4>{nov.name}</h4>
                        <span>{nov.price}</span>
                    </div>
                  )
                })}
            </div>
                
        </>
    )
}