import css from "./notification.module.css";
import ReactDOM from "react-dom";

export default function Notification(props) {
	const { status = "success", title = "Notification", message = "" } = props;

	let cssClass = css.Notification_Bar;
	if (status === "success") {
		cssClass += " " + css.Notification_Bar__Success;
	}

	if (status === "error") {
		cssClass += " " + css.Notification_Bar__Error;
	}

	return ReactDOM.createPortal((
		<div className={css.Notification}>
			<div className={cssClass}>
				<h4>{title}</h4>
				<p>{message}</p>
			</div>
		</div>
	), document.getElementById("notifications"));
}