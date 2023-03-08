import { Dropdown } from "../components/common/Dropdown";
import { Radioinput } from "../components/common/Radioinput";


export default function x () {


    return(

        <>
        
            <Dropdown label="dwda" selectPlaceholder="Selecione 1" options={[{text: "opt1", value: "222"}]}></Dropdown>
            <Radioinput radioName="Nota do deck" optionsQtd={5}></Radioinput>
        
        </>
    )
}