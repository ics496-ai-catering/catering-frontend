import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

// TODO: Mobile resizing.
export default function Navbar() {
  return (
    <NavigationMenu className="flex justify-between min-w-full px-8 py-4 bg-black drop-shadow-lg">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="#">
            <Image
              src="/daspot-logo.png"
              width={640}
              height={169}
              alt="daspot logo"
              className="w-[250px] py-2"
            />
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({ variant: "navbar" })}
            >
              HOME
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({ variant: "navbar" })}
            >
              ABOUT
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({ variant: "navbar" })}
            >
              GALLERY
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({ variant: "navbar" })}
            >
              BOOK YOUR EVENT
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
