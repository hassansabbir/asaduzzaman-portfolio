import { Dispatch, SetStateAction } from "react";
import { ConfigProvider, Drawer } from "antd";
import NavItems from "./NavItems";

interface NavItem {
  name: string;
  href: string;
}

interface MobileDrawerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  items: NavItem[];
}

const MobileDrawer = ({ open, setOpen, items }: MobileDrawerProps) => {
  const onClose = () => {
    setOpen(false);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Drawer: {
            colorBgElevated: "#1a1c1e",
          },
        },
      }}
    >
      <Drawer 
        placement="right" 
        onClose={onClose} 
        open={open}
        width="75%"
        closeIcon={null}
        styles={{
          body: { 
            padding: '24px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }
        }}
      >
        <NavItems items={items} onClose={onClose} />
      </Drawer>
    </ConfigProvider>
  );
};

export default MobileDrawer;
