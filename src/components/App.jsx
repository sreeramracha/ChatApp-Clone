import Chat from "./Chat";
import Message from "./Message";
import Preview from "./Preview";

export default function App() {
	const click = false;
	return (
		<div className="whatsapp-container">
			<Chat />
			{click && <Preview />}
			{!click && <Message />}
		</div>
	);
}
