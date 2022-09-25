// @refresh reload
import { Suspense } from "solid-js";
import {
	Body,
	ErrorBoundary,
	FileRoutes,
	Head,
	Html,
	Meta,
	Routes,
	Scripts,
	Title,
} from "solid-start";
import "./root.css";

export default function Root() {
	return (
		<Html lang="en">
			<Head>
				<Title>SolidStart - Bare</Title>
				<Meta charset="utf-8" />
				<Meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<Body>
				<Suspense>
					<ErrorBoundary>
						<a href="/">Index</a>
						<a href="/signal">Signal</a>
						<a href="/signal-option">SignalOption</a>
						<a href="/effect">Effect</a>
						<a href="/memo">Memo</a>
						<a href="/resource">Resource</a>
						<a href="/lifecycle">Lifecycle</a>
						<a href="/store">Store</a>
						<a href="/context">Context</a>
						<Routes>
							<FileRoutes />
						</Routes>
					</ErrorBoundary>
				</Suspense>
				<Scripts />
			</Body>
		</Html>
	);
}
