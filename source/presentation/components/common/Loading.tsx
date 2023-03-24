import LoadingIcon from "@/presentation/public/images/icons/loading.svg";

export const Loading = ({}) => {
  return <div className="flex w-full h-screen bg-primary justify-center items-center">
    <LoadingIcon className="fill-system h-52 spin"></LoadingIcon>
  </div>;
};
