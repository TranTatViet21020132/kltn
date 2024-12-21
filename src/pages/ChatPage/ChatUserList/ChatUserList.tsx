import React from "react";
import { Search, Pin } from "lucide-react";
import { IUser } from "@/pages/ChatPage/ChatPage";

interface ChatUserListProps {
  chatList: IUser[];
  onUserClick: (id: number) => void;
}

const ChatUserList = ({ chatList, onUserClick }: ChatUserListProps) => {
  return (
    <section className="bg-transparent rounded-lg flex flex-col gap-4 h-full ">
      <header className="flex items-center justify-between p-1 rounded-xl bg-accent-light-600 dark:bg-accent-dark-500">
        <div className="flex justify-center items-center px-2">
          <Search size={24} className="cursor-pointer text-text-light-500 dark:text-text-dark-500" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 rounded bg-transparent text-text-light-600 dark:text-text-dark-600 focus:outline-none"
        />
      </header>

      <div className="flex flex-col items-center w-full overflow-x-hidden overflow-y-scroll h-[calc(100vh-7rem)]">
        {chatList.map((chat) => (
          <div
            key={chat.id}
            className="w-full flex justify-between items-center p-3 rounded-2xl hover:bg-accent-light-500 dark:hover:bg-accent-dark-500 transition-colors cursor-pointer"
            onClick={() => onUserClick(chat.id)}
          >
            <div className="h-full flex gap-3 items-center flex-grow min-w-0">
              <div className="flex-shrink-0 w-12 aspect-square rounded-xl overflow-hidden text-xl text-text-dark-500 group-hover:text-text-dark-600">
                <img
                  src="https://avatar.iran.liara.run/public"
                  alt="Avatar"
                  className="w-full aspect-square object-contain"
                />
              </div>
              <div className="flex flex-col gap-3 flex-grow min-w-0">
                <span className="font-semibold text-text-light-600 dark:text-text-dark-500 truncate md:max-w-[120px] lg:max-w-[200px]">
                  {chat.name}
                </span>
                <span className="text-text-dark-400 text-sm truncate md:max-w-[120px] lg:max-w-[200px]">
                  {chat.lastMessage}
                </span>
              </div>
            </div>

            <div className="flex-shrink-0 h-full flex flex-col justify-between items-end ml-2">
              <span className="text-text-dark-500 text-body5 font-semibold">{chat.time}</span>
              <div className="flex items-center w-fit gap-2">
                {chat.unreadCount > 0 && (
                  <span className="w-5 h-5 flex justify-center items-center text-xs font-bold text-white bg-primary-light-500 dark:bg-primary-dark-500 rounded-full">
                    {chat.unreadCount}
                  </span>
                )}
                <Pin
                  size={18}
                  className="text-text-dark-500 group-hover:text-text-dark-600 transition-colors cursor-pointer"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChatUserList;
