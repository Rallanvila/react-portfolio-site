import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Nav from "../components/Nav";

export default function Home() {
	return (
		<>
			<Nav />
			<Hero />
		</>
	);
}
