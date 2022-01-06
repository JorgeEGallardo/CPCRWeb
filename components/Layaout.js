import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import H1 from "./H1";

export default function Layout(props) {
    return (
        <div className="min-h-screen">
            <Navbar>ssss</Navbar>
            <Header title={props.title}/>
            <main className="md:p-5 md:pt-10 md:mt-10">
        {props.children}
        </main>
        
        <Footer></Footer>
        </div>
    )
}