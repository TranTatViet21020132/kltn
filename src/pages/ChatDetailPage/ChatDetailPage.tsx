import React from "react";

const ChatDetailPage = () => {
  return (
    <aside className="w-1/4 bg-accent-dark-400 p-4 lg:flex flex-col hidden">
      <header className="flex justify-between items-center border-b border-accent-dark-600 pb-4 mb-4">
        <h2 className="text-lg font-bold">Chat Details</h2>
        <button className="h-6 w-6 bg-gray-500 rounded-full"></button>
      </header>
      <section className="space-y-6">
        <div>
          <h3 className="font-bold mb-2">Photos and Videos</h3>
          <div className="flex space-x-2">
            <div className="w-16 h-16 bg-gray-700"></div>
            <div className="w-16 h-16 bg-gray-700"></div>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2">Shared Files</h3>
          <ul className="space-y-2">
            <li className="text-text-dark-400 hover:text-text-dark-600">
              Contract for provision of services
            </li>
            {/* Add more shared files */}
          </ul>
        </div>
      </section>
    </aside>
  );
};

export default ChatDetailPage;