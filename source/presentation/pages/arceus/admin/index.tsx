import { AdminManagerList } from "@/presentation/components/admin/AdminManagerList";
import { AdminSideBar } from "@/presentation/components/admin/AdminSidebar";
import { SearchFilter } from "@/presentation/components/admin/SearchFilter";
import { desktopOnly } from "@/presentation/middlewares/desktopOnly";
import { loadUserData } from "@/presentation/middlewares/loadUserData";
import { verifyAdminToken } from "@/presentation/middlewares/verifyAdminUser";

function ArticleList(): JSX.Element {
  return (
    <div className="flex">
      <AdminSideBar />
      <div className="bg-green-600 w-full h-screen shrink">
        <div className="w-full max-w-7xl mx-auto space-y-4 bg-system overflow-y-auto h-full p-safe">
          <SearchFilter />
          <AdminManagerList />
        </div>
      </div>
    </div>
  );
}

export default desktopOnly(verifyAdminToken(loadUserData(ArticleList)));
