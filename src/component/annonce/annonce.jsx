

export default function Annonce() {
    const mystyle = {
        width:  "30%",
        height: "340px",
    }
    const mystyle1 = {
        width:  "70%",
        height: "340px",
    }
    return(
        <>
        <section className="annonce background">
            <div className="container d_flex">
                <div className="img" style={mystyle}>
                    <img src="./images/banner-1.png" alt="" />
                </div>
                <div className="img" style={mystyle1}>
                    <img src="./images/banner-2.png" alt="" />
                </div>
            </div>
        </section>
        </>
    )
}