import css from "./container.module.css";

export default function Container({ children }) {

	if (!children) {
		throw new Error("No 'children' provided to the Container component.");
	}

	return (
		<div className={css.Container}>
			{children}
		</div>
	);
}