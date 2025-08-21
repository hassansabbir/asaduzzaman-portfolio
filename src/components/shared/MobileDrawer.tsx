/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";
import { ConfigProvider, Drawer } from "antd";
import NavItems from "./NavItems";

const MobileDrawer = ({
  open,
  setOpen,
  items,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  items: any[];
}) => {
  const onClose = () => {
    setOpen(!open);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Drawer: {
            colorBgElevated: "#161618",
          },
        },
      }}
    >
      <Drawer placement="right" onClose={onClose} open={open}>
        <div className="flex flex-col w-[80%] gap-8">
          <NavItems items={items} onClose={onClose} />
        </div>
      </Drawer>
    </ConfigProvider>
  );
};

export default MobileDrawer;
