import React from "react";
import Image from "next/image";
import Technologies from "../Technologies/Technologies";
import javascript from "../../public/img/javascript.png";
import html from "../../public/img/html.png";
import css from "../../public/img/css.png";
import tailwind from "../../public/img/tailwind.png";
import sass from "../../public/img/sass.png";
import styledcomp from "../../public/img/styledcomp.png";
import bootstrap from "../../public/img/bootstrap.png";
import material from "../../public/img/material.png";
import figma from "../../public/img/figma.png";
import react from "../../public/img/react.png";
import nextjs from "../../public/img/nextjs.png";
import node from "../../public/img/node.png";
import net from "../../public/img/net.png";
import csharp from "../../public/img/csharp.png";
import postman from "../../public/img/postman.png";
import sqlserver from "../../public/img/sqlserver.png";
import mongodb from "../../public/img/mongodb.png";
import github from "../../public/img/github2.png";
import jest from "../../public/img/jest.png";
import cypress from "../../public/img/cypress.png";
import vscode from "../../public/img/vscode.png";
import vs from "../../public/img/vs.png";
import azure from "../../public/img/azure.png";
import git from "../../public/img/git.png";

export default function MySkills() {
	let essentials = [javascript, html, css];
	let frontEndFrameworks = [react, nextjs];
	let styling = [tailwind, sass, styledcomp, material, bootstrap, figma];
	let backend = [node, net, csharp, postman, sqlserver, mongodb];
	let testing = [jest, cypress];
	let utility = [vscode, vs, azure, git, github];
	return (
		<section className="max-w-6xl mx-auto mb-8 px-8 md:grid md:grid-cols-1/3and2/3 lg:grid-cols-2">
			<Technologies array={essentials} heading="The Essentials" />
			<Technologies array={styling} heading="The Styling" />
			<Technologies
				array={frontEndFrameworks}
				heading="The Front-End Frameworks"
			/>
			<Technologies array={backend} heading="The Backend" />
			<Technologies array={testing} heading="The Testing" />
			<Technologies array={utility} heading="The Utilities" />
		</section>
	);
}
