import React, { useEffect } from "react";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunction, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunction}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-3"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {

  const { setActiveMenu, isClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if(screenSize <= 900)
      setActiveMenu(false);
    else
      setActiveMenu(true);
  }, [screenSize, setActiveMenu]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunction={() =>
          setActiveMenu((prevActiveMenu) => !prevActiveMenu)
        }
        color={currentColor}
        icon={<MenuOutlinedIcon />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunction={() =>
            setActiveMenu(() => handleClick("cart"))
          }
          color={currentColor}
          icon={<ShoppingCartOutlinedIcon />}
        />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunction={() =>
            setActiveMenu(() => handleClick("chat"))
          }
          color={currentColor}
          icon={<ChatBubbleOutlineOutlinedIcon />}
        />
        <NavButton
          title="Notifications"
          dotColor="#03C9D7"
          customFunction={() =>
            setActiveMenu(() => handleClick("notification"))
          }
          color={currentColor}
          icon={<NotificationsNoneOutlinedIcon />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div id="navbar-profile-btn" className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick("userProfile")}>
            <img src={avatar} alt="avatar" className="rounded-full w-8 h-8" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span> {" "}
              <span className="text-gray-400 font-bold ml-1 text-14">Michael</span>
            </p>
            <KeyboardArrowDownIcon className="text-gray-400 text-14"/>
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
