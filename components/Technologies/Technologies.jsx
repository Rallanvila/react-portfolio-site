import React, { useState, useEffect } from "react";
import Image from "next/image";
import bootstrap from "../../public/img/bootstrap.png";

export default function Technologies({ array, heading }) {
	return (
		<div className="mb-8 ">
			<h3 className="font-semibold text-xl mb-4">{heading}</h3>
			<div className="flex">
				{array.map((image, i) =>
					image === bootstrap ? (
						<>
							<div key={i} className="sm:hidden mr-4">
								<Image src={image} width={61} height={50} alt={image} />
							</div>
							<div key={i} className="hidden sm:block mr-4">
								<Image src={image} width={75.5} height={60} alt={image} />
							</div>
						</>
					) : (
						<>
							<div key={i} className=" sm:hidden mr-4">
								<Image src={image} width={50} height={50} alt={image} />
							</div>
							<div key={i} className="hidden sm:block mr-4">
								<Image src={image} width={60} height={60} alt={image} />
							</div>
						</>
					),
				)}
			</div>
		</div>
	);
}
