import { useState, useLayoutEffect } from "react";
import {
  MessageCircle,
  Archive,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  MessageCircleMore,
} from "lucide-react";
import SelfAvatar from "@/assets/images/SelfAvatar.jpg";
import { useAuth } from "@/hooks/useAuth";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";

const SideBarPage = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuItems = [
    { label: "All", icon: <MessageCircle />, href: "#", badge: "9" },
    { label: "Waiting", icon: <MessageCircleMore />, href: "#", badge: "0" },
    { label: "Archived", icon: <Archive />, href: "#", badge: "3" },
    { label: "Settings", icon: <Settings />, href: "#" },
  ];

  const { logout } = useAuth();

  return (
    <aside
      className={`h-full p-3 ${
        isExpanded ? "w-56" : "w-24"
      } bg-accent-dark-400 p-4 flex flex-col justify-between transition-all duration-300`}
    >
      <div className="text-xl font-bold flex justify-center items-center px-4">
        <span className="text-primary-light-500 dark:text-primary-dark-500">
          Chat
        </span>
      </div>

      <nav className="flex flex-col">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`flex items-center justify-between w-full h-fit p-4 gap-2 group rounded-lg hover:bg-accent-dark-600 ease-in transition-all duration-200`}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl text-text-dark-500 group-hover:text-text-dark-600">
                {item.icon}
              </span>

              <span
                className={`truncate md:max-w-[120px] lg:max-w-[200px] text-subheading4 font-semibold text-text-dark-400 group-hover:text-text-dark-600 transition-opacity duration-200 ${
                  isExpanded ? "opacity-100" : "opacity-0 w-0"
                }`}
              >
                {item.label}
              </span>
            </div>

            {isExpanded && item.badge && item.badge !== "0" && (
              <span className="px-2 py-1 text-xs font-bold text-white bg-primary-light-500 dark:bg-primary-dark-500 rounded-md">
                {item.badge}
              </span>
            )}
          </a>
        ))}
      </nav>

      <hr className="border-accent-dark-600 border-2" />

      <div className="flex flex-col items-start">
        <div
          className={`truncate md:max-w-[120px] lg:max-w-[200px] ease-in cursor-pointer flex items-center justify-between w-full h-fit p-4 gap-2 group rounded-lg hover:bg-accent-dark-600 transition-all duration-200`}
        >
          <div className="flex items-center gap-2">
            <div className="flex w-8 rounded-full aspect-square overflow-hidden text-xl text-text-dark-500 group-hover:text-text-dark-600">
              <img
                src={SelfAvatar}
                alt="Avatar"
                className="w-full aspect-square object-contain"
              />
            </div>

            <span
              className={`text-subheading4 font-semibold text-text-dark-400 group-hover:text-text-dark-600 transition-all duration-300 ${
                isExpanded ? "opacity-100 max-w-full" : "opacity-0 max-w-0"
              }`}
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              Tat Viet Tran
            </span>
          </div>
        </div>

        <div
          onClick={logout}
          className="truncate md:max-w-[120px] lg:max-w-[200px] ease-in cursor-pointer flex items-center justify-between w-full h-fit p-4 gap-2 group rounded-lg hover:bg-accent-dark-600 transition-all duration-200"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl text-text-dark-500 group-hover:text-text-dark-600">
              <LogOut />
            </span>

            <span
              className={`text-subheading4 font-semibold text-text-dark-400 group-hover:text-text-dark-600 transition-opacity duration-200 ${
                isExpanded ? "opacity-100" : "opacity-0 w-0"
              }`}
            >
              Logout
            </span>
          </div>
        </div>

        <div className="truncate md:max-w-[120px] lg:max-w-[200px] ease-in cursor-pointer flex items-center justify-between w-full h-fit p-4 gap-2 group rounded-lg hover:bg-accent-dark-600 transition-all duration-200">
          <ThemeSwitcher>
            <div className="flex items-center gap-2">
              <span
                className={`text-subheading4 font-semibold text-text-dark-400 group-hover:text-text-dark-600 transition-opacity duration-200 ${
                  isExpanded ? "opacity-100" : "opacity-0 w-0"
                }`}
              >
                Theme
              </span>
            </div>
          </ThemeSwitcher>
        </div>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="hidden lg:flex p-3 w-full aspect-auto text-center bg-accent-dark-600 hover:bg-accent-dark-500 rounded-lg"
      >
        {isExpanded ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
      </button>
    </aside>
  );
};

export default SideBarPage;
