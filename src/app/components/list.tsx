"use client";

import { cookbook } from "../[slug]/data";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ValueNoneIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";

const RecipeList = () => {
	const [recipes, setRecipes] = useState(cookbook);
	const [search, setSearch] = useState("");
	return (
		<>
			<div className="mt-8">
				<input
					className="outline-none border rounded px-4 py-2 bg-card w-full"
					type="search"
					placeholder="Search"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
						setRecipes(
							cookbook.filter((recipe) =>
								recipe.name.toLowerCase().includes(e.target.value.toLowerCase())
							)
						);
					}}
				/>
			</div>
			<div className="grid h-fit grid-cols-1 md:grid-cols-2 gap-4 my-4">
				{recipes.length === 0 && (
					<>
						<div className="text-center col-span-2 my-4">
							<div className="flex justify-center items-center gap-4">
								<ValueNoneIcon />
								<p>No recipes found</p>
							</div>
						</div>
					</>
				)}
				{recipes.map((recipe) => {
					return (
						<Link key={recipe.slug} href={`/${recipe.slug}`}>
							<Card className="h-full">
								<CardHeader>
									<CardTitle>{recipe.name}</CardTitle>
									<CardDescription>{recipe.date}</CardDescription>
								</CardHeader>
								<CardContent className="h-[4.5rem] overflow-hidden">
									{recipe.description}
								</CardContent>
								<CardFooter></CardFooter>
							</Card>
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default RecipeList;
