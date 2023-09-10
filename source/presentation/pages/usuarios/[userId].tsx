import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";
import { useRouter } from "next/router";
import Edit from "@/presentation/public/images/icons/edit.svg";
import { StatusTag } from "@/presentation/components/common/StatusTag";
import { StatusEnum } from "@/presentation/enums/NotifyTypeEnum";
import Spinda from "@/presentation/public/images/rsc/imagePreview.png";
import { Avatar } from "@/presentation/components/common/Avatar";
import { useGetUser } from "@/presentation/hooks/useGetUser";
import { useEffect } from "react";
import { NotFoundError } from "@/core/Errors";
import { UserEditModal } from "@/presentation/components/common/modals/UserEditModal";
import { useSetRecoilState } from "recoil";
import { userEditModalAtom } from "@/presentation/store/modal";
import { ExcludeUserModal } from "@/presentation/components/common/modals/ExcludeUserModal";
import { useGetProfile } from "@/presentation/hooks/useGetProfile";

function UserProfile(): JSX.Element {
  const { query, replace } = useRouter();
  const setModalOpen = useSetRecoilState(userEditModalAtom);
  const { data, error } = useGetUser(query.userId as string | undefined);
  const { data: actualUser } = useGetProfile();

  useEffect(() => {
    if (!error) return;

    if (error instanceof NotFoundError) {
      void replace("/404");
    }
  }, [error]);

  function openModal(): void {
    setModalOpen(true);
  }

  return (
    <DefaultLayout>
      {data ? (
        <main className=" max-w-7xl bg-system grow mx-auto w-full ">
          <div className="bg-red-200 h-56 w-full"></div>
          <div className="px-safe">
            <div className="flex flex-col items-center md:items-start md:flex-row">
              <Avatar
                image={Spinda.src}
                className="-translate-y-1/2 absolute md:static"
              />
              <div className=" mt-32 md:mt-4 px-safe space-y-2">
                <div className="flex items-center space-x-4">
                  <h1 className="font-bold text-2xl sm:text-4xl">
                    {data.user_name}
                  </h1>
                  {actualUser?.id.toString() === query.userId ? (
                    <button
                      onClick={openModal}
                      className="hover:text-secondary transition-all duration-75 active:text-secondary-light"
                    >
                      <Edit />
                    </button>
                  ) : null}
                </div>
                <p className="text-xl">
                  Treinador de nível: {data.experience_level}
                </p>
                <div className="flex flex-col items-center space-x-0 space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
                  <StatusTag
                    status={StatusEnum.SUCCESS}
                    message={"+10 Artigos publicados"}
                  />
                  <StatusTag
                    status={StatusEnum.WARNING}
                    message={"+10 Artigos publicados"}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : null}
      <UserEditModal />
      <ExcludeUserModal />
    </DefaultLayout>
  );
}

export default UserProfile;
