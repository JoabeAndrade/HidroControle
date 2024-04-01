import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { ContainerDropdown } from './styles';

export function Dropdown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '2021', value: '2021'},
    {label: '2022', value: '2022'},
    {label: '2023', value: '2023'},
    {label: '2024', value: '2024'}
  ]);

  return (
    <ContainerDropdown>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
    </ContainerDropdown>
  );
}