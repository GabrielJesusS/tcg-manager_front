import { Dropdown } from "../common/Dropdown";
import { TextInput } from "../common/Textinput";


export const AdminListFilter = (): JSX.Element => {
  return (
    <div className=" flex justify-between">
      <TextInput onChange={console.log} type="text" label="Pesquisar deck"  />
      <div className="space-y-4">
        <Dropdown options={[]} placeholder="x"  setter={console.log}/>
        <Dropdown options={[]} placeholder="x" setter={console.log}/>
      </div>
    </div>
  );
};
