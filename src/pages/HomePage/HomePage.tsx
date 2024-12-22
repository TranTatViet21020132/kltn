import SideBarPage from "@/pages/SideBarPage/SideBarPage";
import ChatPage from "@/pages/HomePage/ChatPage/ChatPage";
import ChatDetailPage from "@/pages/ChatDetailPage/ChatDetailPage";


const HomePage = () => {

  return (
    <div className="h-screen w-screen bg-accent-dark-400 text-text-dark-600 font-archivo flex">
      <SideBarPage />
      <ChatPage />
      <ChatDetailPage />
    </div>
  );
};

export default HomePage;
