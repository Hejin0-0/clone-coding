import { OrgSidebar } from "./_components/orgSidebar";
import { Sidebar } from "./_components/sidebar";
import { Navbar } from "./_components/Navbar";
import { Toaster } from "@/components/ui/sonner";

interface DashboardLayoutPage {
	children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutPage) => {
	return (
		<main className="h-full">
			<Sidebar />
			<div className="pl-[60px] h-full">
				<div className="flex gap-x-3 h-full">
					<OrgSidebar />
					<div className="h-full flex-1">
						<Navbar />
						<Toaster />
						{children}
					</div>
				</div>
			</div>
		</main>
	);
};

export default DashboardLayout;
