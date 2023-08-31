import TopNav from "@/app/ui/dashboard-topnav";
import SideNav from "../ui/dashboard-sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex-grow">
        <TopNav />
        <div className="p-4 sm:p-20">{children}</div>
      </div>
    </div>
  );
}
