"use client";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "../ui/label";

export type Ingredient = {
	ingredient: string;
	quantity: string;
	units:
		| "tsp"
		| "tbsp"
		| "cup"
		| "oz"
		| "lb"
		| "g"
		| "kg"
		| "ml"
		| "l"
		| "unit";
};

function toFraction(value: number, on: boolean = false): string {
	if (!on) return value.toString();

	if (Number.isInteger(value)) {
		return value.toString();
	}

	const gcd = (a: number, b: number): number => {
		return b === 0 ? a : gcd(b, a % b);
	};

	const precision = 1e-10; // Tolerance for floating-point comparison
	let numerator = value;
	let denominator = 1;

	while (Math.abs(numerator - Math.round(numerator)) > precision) {
		numerator *= 10;
		denominator *= 10;
	}

	numerator = Math.round(numerator);

	const commonDivisor = gcd(numerator, denominator);
	numerator /= commonDivisor;
	denominator /= commonDivisor;

	return `${numerator}/${denominator}`;
}

const RecipeTable = ({ ingredient }: { ingredient: Ingredient[] }) => {
	const [list, setList] = useState<Ingredient[]>(ingredient);
	const [portion, setPortion] = useState<string>("1");
	const [decimal, setDecimal] = useState<boolean>(false);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;
		let portionValue = parseFloat(inputValue);

		if (isNaN(portionValue) || portionValue < 1) {
			portionValue = 1;
		}

		setPortion(String(portionValue));
	};

	const reduceHandler = () => {
		setPortion((e) => (parseFloat(e) > 1 ? String(parseFloat(e) - 1) : "1"));
	};

	const increaseHandler = () => {
		setPortion((e) => String(parseFloat(e) + 1));
	};

	const valueChangeHandler = () => {
		if (ingredient.length === 0) return;
		if (portion === "") return;
		setList(
			ingredient.map((item) => {
				return {
					...item,
					quantity: (
						parseFloat(item.quantity) * parseFloat(portion)
					).toString(),
				};
			})
		);
	};

	useEffect(() => {
		valueChangeHandler();
	}, [portion, ingredient]);

	return (
		<>
			<div className="flex items-center justify-between gap-4">
				<div className="flex justify-center items-center gap-4">
					<Checkbox
						id="decimal"
						checked={decimal}
						onCheckedChange={(e) => setDecimal(!!e)}
					/>
					<Label htmlFor="decimal">Decimal</Label>
				</div>
				<div className="flex gap-2 items-center justify-center">
					<Button onClick={reduceHandler} variant={"ghost"}>
						<MinusIcon />
					</Button>
					<span>
						<input
							value={portion}
							type="text"
							name="portion"
							id="portion-input"
							onChange={(e) => setPortion(e.target.value)}
							onBlur={handleChange}
							className="text-secondary-foreground outline-none w-[2rem] bg-transparent h-fit"
						/>
					</span>
					<Button onClick={increaseHandler} variant={"ghost"}>
						<PlusIcon />
					</Button>
				</div>
			</div>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>ingredient</TableHead>
						<TableHead className="w-[10rem]">quantity</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{list.map((item, index) => {
						return (
							<TableRow key={index}>
								<TableCell>{item.ingredient}</TableCell>
								<TableCell>{`${toFraction(
									parseFloat(item.quantity),
									decimal
								)} ${item.units}`}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</>
	);
};

export default RecipeTable;
