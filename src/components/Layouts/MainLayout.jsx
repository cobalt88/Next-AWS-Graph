import Footer from "@components/PageSections/Footer";
import Head from "next/head";
import NavBar from "@/components/Navigation/NavBar";
import Header from "@/components/PageSections/Header";

export default function MainLayout(props) {
	return (
		<>
			<Head>
				<title>{props.title}</title>
				<meta name="description" content={props.description} />
				<meta name="keywords" content={props.keywords} />
				<meta name="author" content={props.author} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<NavBar navProps={props.navigation} />
			<main>{props.children}</main>

			<Footer />
		</>
	);
}
