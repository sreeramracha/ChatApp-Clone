import Message from "./Message";
import Preview from "./Preview";
import Chat from "./Chat";

export default function Home() {
	const click = false;
	return (
		<div>
			<div className="whatsapp-container">
				<Chat />
				{click && <Preview />}
				{!click && <Message />}
			</div>
		</div>
	);
}
