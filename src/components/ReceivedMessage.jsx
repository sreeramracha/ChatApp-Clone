export default function ReceivedMessage(props) {
	return (
		<div className="received">
			<div className="message">
				<p>
					You could try using float:left; or display:inline-block;.
					Both of these will change the element's behaviour from
					defaulting to 100% width to defaulting to the natural width
					of its contents. However, note that they'll also both have
					an impact on the layout of the surrounding elements as well.
					I would suggest that inline-block will have less of an
					impact though, so probably best to try that first.
				</p>
			</div>
			<div className="timestamp">
				{props.hour}:{props.minute}{" "}
				{Number(props.hour) >= 12 ? "PM" : "AM"}
			</div>
		</div>
	);
}
