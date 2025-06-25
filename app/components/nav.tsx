"use client";
import { UserButton } from "@clerk/nextjs";
import { OrganizationSwitcher } from "@clerk/nextjs";
const NavBar: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="font-semibold text-xl">BlogUs</h1>
      <div className="flex gap-4 items-center justify-center">
        <OrganizationSwitcher afterSelectOrganizationUrl="/org/:slug" />
        <UserButton />
      </div>
    </div>
  );
};

export { NavBar };
