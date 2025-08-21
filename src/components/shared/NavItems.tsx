/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
}

const NavItems = ({
  items,
  onClose,
}: {
  items: NavItem[];
  onClose?: () => void;
}) => {
  const pathname = usePathname();

  return (
    <>
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          onClick={onClose}
          className={`leading-4 flex items-center p-2 pe-3 gap-2 text-lg font-[500] ${
            pathname === item.href
              ? "rounded drop-shadow text-white bg-gray-600"
              : "text-white hover:text-orange-500 transition-colors"
          }`}
        >
          <span>{item.name}</span>
        </Link>
      ))}
    </>
  );
};

export default NavItems;
