import { Menu } from "@mantine/core";
import React, { FC, MouseEventHandler } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

interface iDropdownButton {
  title: string;
  value: string | null;
  menus: iMenuItem[];
}

interface iMenuItem {
  name: string;
  onClick: MouseEventHandler;
}

const DropdownButton: FC<iDropdownButton> = ({ value, menus, title }) => {
  return (
    <Menu withArrow arrowPosition="center">
      <div
        className={`relative inline-block text-center bg-input rounded ${
          value !== null ? "md:w-fit" : "md:w-[150px]"
        }`}
      >
        <Menu.Target>
          <div className="flex cursor-pointer justify-center items-center px-3 h-[40px] rounded text-center med-3 text-contrast-base md:w-[100%]">
            <span>{title}</span>
            {value !== null && (
              <span className="font-[600] text-contrast-80 pl-1">{value}</span>
            )}
            <MdOutlineArrowDropDown className={`w-5 h-5 fill-current`} />
          </div>
        </Menu.Target>
        <Menu.Dropdown>
          {menus.map((menu, i) => {
            return (
              <Menu.Item
                className="cursor-pointer px-4 py-2 text-base leading-8 text-light-black-5 hover:bg-blue-base hover:text-white hover:rounded"
                onClick={(e) => {
                  menu.onClick(e);
                }}
                key={i}
              >
                {menu.name}
              </Menu.Item>
            );
          })}
        </Menu.Dropdown>
      </div>
    </Menu>
  );
};

export default DropdownButton;
