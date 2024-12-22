interface ChatMessageListProps {
  selectedChatId: number;
}

const ChatMessageList = ({ selectedChatId }: ChatMessageListProps) => {
  // Logic to fetch or display messages based on selectedChatId

  return (
    <section className="col-span-2 bg-transparent rounded-lg flex-col justify-between px-4">
      <header className="border-b border-accent-dark-500 pb-4 mb-4">
        <h1 className="font-bold text-xl text-text-dark-500">Office Chat</h1>
      </header>
      <div className="flex-1 overflow-auto">
        <div className="flex gap-4 mb-4">
          <div className="h-10 w-10 bg-gray-500 rounded-full"></div>
          <div className="flex flex-col">
            <span className="font-semibold text-text-dark-500">Harry Fettel</span>
            <span className="text-text-dark-400 text-sm">
              Our company needs to prepare...
            </span>
          </div>
        </div>
      </div>
      <footer className="pt-4 border-t border-accent-dark-500 flex items-center gap-4">
        <input
          type="text"
          placeholder="Your message"
          className="flex-grow p-3 rounded bg-accent-dark-500 text-text-dark-600"
        />
        <button className="h-10 w-10 bg-gray-500 rounded-full"></button>
      </footer>
    </section>
  );
};

export default ChatMessageList;
