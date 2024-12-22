import React, { useState } from "react";
import ChatUserList from "@/pages/ChatPage/ChatUserList/ChatUserList";
import ChatMessageList from "@/pages/ChatPage/ChatMessageList/ChatMessageList";

export interface IUser {
  id: number;
  name: string;
  lastMessage: string;
  unreadCount: number;
  time: string;
}

const ChatPage = () => {
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);

  const chatList: IUser[] = [
    {
      id: 1,
      name: "Harry Fettel",
      lastMessage: "Our company needs to prepare...",
      unreadCount: 2,
      time: "12:00",
    },
    {
      id: 2,
      name: "Jane Smith",
      lastMessage: "Can we reschedule the meeting?",
      unreadCount: 5,
      time: "11:30",
    },
    {
      id: 3,
      name: "John Doe",
      lastMessage: "I'll review the documents.",
      unreadCount: 0,
      time: "10:15",
    },
    {
      id: 4,
      name: "Emily Carter",
      lastMessage: "The presentation is ready for review.",
      unreadCount: 1,
      time: "09:45",
    },
    {
      id: 5,
      name: "Michael Brown",
      lastMessage: "Don't forget the deadline tomorrow.",
      unreadCount: 3,
      time: "08:30",
    },
    {
      id: 6,
      name: "Sophia Wilson",
      lastMessage: "Great job on the latest project!",
      unreadCount: 0,
      time: "Yesterday",
    },
    {
      id: 7,
      name: "Oliver Green",
      lastMessage: "Can we discuss the budget proposal?",
      unreadCount: 4,
      time: "Yesterday",
    },
    {
      id: 8,
      name: "Isabella Martinez",
      lastMessage: "Looking forward to the team outing!",
      unreadCount: 0,
      time: "2 days ago",
    },
    {
      id: 9,
      name: "William Johnson",
      lastMessage: "Do you need help with the report?",
      unreadCount: 1,
      time: "2 days ago",
    },
    {
      id: 10,
      name: "Ava Davis",
      lastMessage: "Let's catch up this weekend.",
      unreadCount: 0,
      time: "3 days ago",
    },
  ];

  return (
    <main className="grid grid-cols-1 md:grid-cols-3 w-full flex-grow h-full bg-accent-light-400 dark:bg-accent-dark-600 p-6 rounded-3xl gap-6">
      <ChatUserList chatList={chatList} onUserClick={setSelectedChatId} />
      {selectedChatId && <ChatMessageList selectedChatId={selectedChatId} />}
    </main>
  );
};

export default ChatPage;

