import Head from "./head";
import Menu from "./menu";
import Navbar from "./navbar";



export default function Header ({cartItem}) {

    return (
        <>
          <Head />
          <Navbar cartItem={cartItem} />
          <Menu />
        </>
      )
}

