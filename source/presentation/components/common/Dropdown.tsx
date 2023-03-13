
interface IDropdown{
    selectPlaceholder: string
    label: string
    options: {
        text: string
        value: string
    }[];
}



export const Dropdown = ({selectPlaceholder, options, label}: IDropdown) =>{

    return(
        <label className="block">
            <span className="block font-semibold text-lg">{label}</span>
            <select defaultValue={"0"} className="w-full text-base md:text-lg text-system px-2 py-1 transition-all cursor-pointer duration-150 hover:bg-secondary-light  bg-secondary outline-none rounded"  name="" id="">
            <option disabled hidden className="bg-system text-system-800 hover:text-system active:bg-secondary-dark" value="0">{selectPlaceholder}</option>
            {
                options.map((opt)=><option key={opt.value} className="bg-system text-system-800 hover:text-system active:bg-secondary-dark" value={opt.value}>{opt.text}</option>)
            }
        </select>
        </label>
    );
}