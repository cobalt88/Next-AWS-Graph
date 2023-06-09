import Footer from "@/components/PageSections/Footer.jsx";
import Head from "next/head";

import Header from "@/components/PageSections/Header.jsx";

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

			<main>{props.children}</main>

			<Footer />
		</>
	);
}
