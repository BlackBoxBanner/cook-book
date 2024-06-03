"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div className="flex justify-center items-center h-[30rem] flex-col gap-4">
			<h2>Something went wrong!</h2>
			<div>
				<p>{error.message}</p>
			</div>
		</div>
	);
}
