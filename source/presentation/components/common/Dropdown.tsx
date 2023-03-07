
interface IDropdown{
    selectPlaceholder: string
    options: {
        text: string
        value: string
    }[];
}



export const Dropdown = ({selectPlaceholder, options}: IDropdown) =>{

    return(
        <select className="w-full text-base md:text-2xl text-system px-2 py-1 transition-all cursor-pointer duration-150 hover:bg-secondary-light  bg-secondary outline-none rounded"  name="" id="">
            <option disabled selected hidden className="bg-system text-system-800 hover:text-system active:bg-secondary-dark" value="">{selectPlaceholder}</option>
            {
                options.map((opt)=><option key={opt.value} className="bg-system text-system-800 hover:text-system active:bg-secondary-dark" value={opt.value}>{opt.text}</option>)
            }
        </select>
    );
}