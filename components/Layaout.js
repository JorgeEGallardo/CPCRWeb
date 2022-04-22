import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import H1 from "./H1";
import Head from "next/head";

export default function Layout(props) {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Caja Popular Cristo Rey</title>
      </Head>
      <Navbar></Navbar>
      <Header title={props.title} />
      <main className="md:p-5 md:pt-1 md:mt-10">{props.children}</main>

      <Footer></Footer>
    </div>
  );
}
