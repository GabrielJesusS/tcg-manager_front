export const SetSkeleton = (): JSX.Element => {
  return (
  /*   <span className=" rounded-xl after:aspect-card aspect-card" />
     */
  <div
      className=" rounded-2xl p-3 shadow-xl space-y-2 h-full block"
    >
      <span className="space-y-3 block ">

        <span className="h-6 w-6 mx-auto block aspect-square loading-effect rounded-lg"/>
        <span className="h-16 mx-auto block loading-effect rounded-lg"/>
      </span>
      <span className="space-y-3 block">
        <span className="h-7 w-full loading-effect block rounded-full"/>
        <span className="h-4 w-4/5 mx-auto loading-effect block rounded-full"/>
        <span className="space-y-2 block">
            <span className="h-4 w-1/2 mx-auto loading-effect block rounded-full"/>
            <span className="h-4 w-1/2 mx-auto loading-effect block rounded-full"/>
            <span className="h-4 w-1/2 mx-auto loading-effect block rounded-full"/>
        </span>
      </span>
    </div>
  
    );
};
