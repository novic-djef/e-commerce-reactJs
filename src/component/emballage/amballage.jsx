import './style.css'


export default function Amballage(){
    const data = [
        {
          cover: <i class="fa fa-reply-all" aria-hidden="true"></i>,
          title: "Worldwide Delivery",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class="fa fa-address-card" aria-hidden="true"></i>,
          title: "Safe Payment",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='fa fa-shield'></i>,
          title: "Shop With Confidence ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class="fa fa-line-chart" aria-hidden="true"></i>,
          title: "24/7 Support ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
      ]
    return(
        <>
         <section className="amballage background">
            <div className="container d_flex ">
               {
                data.map((nov, index) => {
                    return(
                        <>
                        <div className="product " key={index}>
                        <div className="img icon_circle">
                            <i>{nov.cover}</i>
                        </div>
                        <h3>{nov.title}</h3>
                        <p>{nov.decs}</p>
                    </div>
                    </>
                    )
                  
                })
               }
            </div>
         </section>
        </>
    )
}