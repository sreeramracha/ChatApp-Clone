export default function SentMessage(props) {
	return (
		<div className="sent">
			<div className="message">
				<p>{props.conversation}</p>
			</div>
			<div className="timestamp">
				{props.hour}:{props.minute}{" "}
				{Number(props.hour) >= 12 ? "PM" : "AM"}
			</div>
		</div>
	);
}
