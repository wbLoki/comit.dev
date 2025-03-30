"use client";

import { Button, Link } from "@heroui/react";
import { FC, ReactNode } from "@node_modules/@types/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useAuth } from "@hooks/useAuth";
import Image from "next/image";

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const { logout } = useAuth();

  const iconClasses = "text-xl pointer-events-none flex-shrink-0";

  const menuItems = [
    {
      label: "dashboard",
      icon: (
        <Icon
          icon="material-symbols:dashboard-rounded"
          className={iconClasses}
        />
      ),
      href: "/dashboard",
    },
    {
      label: "chats",
      icon: (
        <Icon icon="material-symbols:chat-rounded" className={iconClasses} />
      ),
      href: "/chats",
    },
    {
      label: "Docs",
      icon: <Icon icon="tabler:file-description" className={iconClasses} />,
      href: "/docs",
    },
    {
      label: "settings",
      icon: <Icon icon="iconamoon:settings-fill" className={iconClasses} />,
      href: "/settings",
    },
  ];

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <div
        className={`flex flex-col transition-all w-full duration-300 bg-primary-900 ${
          isCollapsed ? "max-w-16" : "max-w-72"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 px-5">
          <Button
            isIconOnly
            aria-label="open/close menu"
            variant="light"
            size="sm"
            radius="full"
            onPress={() => setIsCollapsed(!isCollapsed)}
          >
            <Icon icon="mynaui:sidebar" width="24" height="24" />
          </Button>
          {!isCollapsed && (
            <a href="/">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icons/logo-mobile-dark.png"
                  className="h-8 w-full"
                  alt="comit.dev"
                  width={32}
                  height={32}
                />
                <span>Comit.dev</span>
              </div>
            </a>
          )}
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col transition-width">
          {menuItems.map(({ label, icon, href }, index) => {
            const isActive = pathname === href;
            return (
              <Link
                key={index}
                href={href}
                isExternal={href === "/docs"}
                color={isActive ? "secondary" : "foreground"}
                className={`flex flex-1 items-center border-l-5 border-transparent capitalize gap-3 p-4 ${
                  isActive
                    ? "bg-secondary-400/20 border-secondary"
                    : "hover:bg-secondary-400/10"
                } ${isCollapsed && "justify-center"}`}
              >
                <span className="text-2xl">{icon}</span>
                {!isCollapsed && <span className="text-md">{label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="mt-auto flex flex-col gap-4">
          <Button
            onPress={logout}
            color="danger"
            radius="none"
            fullWidth
            className="w-full"
            isIconOnly={isCollapsed}
            endContent={<Icon icon="mynaui:logout" className={iconClasses} />}
          >
            {!isCollapsed && <span className="text-md">Logout</span>}
          </Button>
        </div>
      </div>

      {/* Main Content */}

      <div className="flex-grow p-4 overflow-auto">{children}</div>
    </div>
  );
};

export default Sidebar;
