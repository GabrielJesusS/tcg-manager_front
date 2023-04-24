import PlusIcon from "@/presentation/public/images/icons/plus.svg";
import MinusIcon from "@/presentation/public/images/icons/minus.svg";

interface IQuantityManager {
  value: number;
  limit: number;
  manipulation: (value: number) => void;
}

export const QuantityManager = ({
  value,
  limit,
  manipulation,
}: IQuantityManager): JSX.Element => {
  function onDecrease() {
    manipulation(value - 1);
  }

  function onIncrease() {
    manipulation(value + 1);
  }

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={onDecrease}
        disabled={value <= 1}
        type="button"
        className="bg-secondary hover:bg-secondary-light focus:ring-2 focus:ring-offset-2 focus:ring-secondary  disabled:bg-system-400 h-8 w-8 flex justify-center items-center rounded"
      >
        <MinusIcon />
      </button>
      <span className="bg-system-200 text-2xl font-bold w-10 h-10 rounded flex justify-center items-center">
        {value}
      </span>
      <button
        onClick={onIncrease}
        disabled={value >= limit}
        type="button"
        className="bg-secondary hover:bg-secondary-light focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:bg-system-400 h-8 w-8 flex justify-center items-center rounded"
      >
        <PlusIcon />
      </button>
    </div>
  );
};
