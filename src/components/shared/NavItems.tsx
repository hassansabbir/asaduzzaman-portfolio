/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = ({
  items,
  onClose,
}: {
  items: any[];
  onClose?: () => void;
}) => {
  const pathname = usePathname();

  return (
    <>
      {items.map((item, index) => (
        <Link
          key={index}
          onClick={onClose}
          className={` leading-4  flex items-center p-2 pe-3 gap-2 text-lg font-[500] ${
            pathname === item.path
              ? "rounded  drop-shadow text-white bg-gray-600"
              : "text-white"
          }`}
          href={item.path}
        >
          <span
            className={`  ${
              pathname === item.path ? " bg-gray-700 text-white" : " text-white"
            } `}
          >
            {" "}
            {item.icon}
          </span>{" "}
          <span> {item.label} </span>
        </Link>
      ))}
    </>
  );
};

export default NavItems;
