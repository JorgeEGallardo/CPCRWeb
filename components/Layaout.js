import Footer from "./Footer";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import H1 from "./H1";

export default function Layout(props) {
    return (
        <div className="min-h-screen">
            <Navbar>ssss</Navbar>
            <Jumbo  size="h-1"/>
            <main className="min-h-screen">
        <H1  >{props.title}</H1>
        {props.children}
        </main>
        
        <Footer></Footer>
        </div>
    )
}