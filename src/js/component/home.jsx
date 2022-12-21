import React from "react";
import Card from "./card";
import Navbar from "./navbar";
import Footer from "./footer";
import Topp from "./header";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
<>	
	<Navbar/>
	<Topp/>
		<div className="row">
		
		<Card url = "https://i.pinimg.com/564x/0b/b5/cb/0bb5cb1e111819be1cece12d0d9eaae3.jpg"/>
		<Card url = "https://images2-mega.cdn.mdstrm.com/etcetera/2020/01/22/9658_4_5e28a4502980b.jpg?d=500x500"/>
		<Card url = "https://images2-mega.cdn.mdstrm.com/etcetera/2022/12/01/19811_7_638913fb9b074.jpg?d=500x500"/>
		<Card url = "https://images2-mega.cdn.mdstrm.com/etcetera/2018/04/17/5818_1_5ad5fdbdc700a.jpg?d=500x500"/>
			
		</div>
	<Footer/>

		</>
	);
};

export default Home;