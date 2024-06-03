import RecipeTable from "@/components/basic/recipe";
import { cookbook } from "./data";
import { cn } from "@/lib/utils";

const RecipePage = ({ params }: { params: { slug: string } }) => {
	const data = cookbook.find((item) => item.slug === params.slug);

	if (!data) {
		throw new Error("Not found");
	}

	return (
		<>
			<div className="lg:mx-[20rem] mx-8 flex flex-col gap-4 mb-16 my-8">
				<div className="flex flex-col gap-1">
					<h2 className="text-2xl">{data.name}</h2>
					<p>
						{new Date(data.date)
							? new Date(data.date).toDateString()
							: "No date"}
					</p>
				</div>
				<div className={cn("my-2 flex flex-col gap-2")}>
					<h3 className="font-bold">Description</h3>
					<p>{data.description}</p>
				</div>
				<RecipeTable ingredient={data.ingredients} />
				<div className={cn(data.steps.length == 0 && "hidden")}>
					<h3 className="font-semibold mb-4">Instructions</h3>
					<ol>
						{data.steps.map((step, index) => {
							return (
								<>
									<li key={index}>{step.content}</li>
									{step.step && (
										<ol>
											{step.step.map((item, index) => {
												return <li key={index}>{item}</li>;
											})}
										</ol>
									)}
								</>
							);
						})}
					</ol>
				</div>
			</div>
		</>
	);
};

export default RecipePage;
