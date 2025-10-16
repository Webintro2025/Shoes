import React from "react";
import Link from "next/link";

const categories = [

		{
			title: "Foot Protection",
			image: "/foot.png",
			slug: "safety-shoe-pu",
		},
		{
			title: "Fall Protection",
		
      image: "/fall.png",
			slug: "safety-shoe-pvc",
		},
		{
			title: "Gumboots",
				image: "/gum.png",
			slug: "gumboots",
		},

];

const Gallery = () => {
	return (
		<section className="relative overflow-hidden bg-white py-16 sm:py-20">
			<div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#ffe0e7] via-white to-white" aria-hidden="true" />

			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<p className="uppercase tracking-[0.35em] text-xs sm:text-sm text-gray-400 mb-3">Product Categories</p>
				<h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
					Product Categories
				</h2>
				<p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
					At Malgre Safety Solutions, we understand the diverse safety requirements of modern industries
					and deliver trusted PPE solutions tailored to each need.
				</p>
			</div>

					<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid gap-6 md:grid-cols-3">
				{categories.map((category) => {
					const Card = (
						<article
							key={category.title}
							className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
						>
							<div className="relative h-80 sm:h-[23rem] overflow-hidden">
								<img
									src={category.image}
									alt={category.title}
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" aria-hidden="true" />
							</div>
							<div className="py-4 text-center">
								<h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
							</div>
						</article>
					);

					if (category.slug) {
						return (
							<Link key={category.title} href={`/${category.slug}`} className="block">
								{Card}
							</Link>
						);
					}

					return Card;
				})}
			</div>
		</section>
	);
};

export default Gallery;
