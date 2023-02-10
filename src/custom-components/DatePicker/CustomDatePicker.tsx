import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField, {TextFieldProps} from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export interface CustomDatePickerProps {
    value: Dayjs | null;
    onChange: (value: Dayjs | null) => void;
    label: string;
}
const CustomDatePicker: React.FC<CustomDatePickerProps> = ({value, onChange, label}) => {
    // const [value, setValue] = React.useState<Dayjs | null>(null);

    return (
        <div className='w-full'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label={label}
                        value={value}
                        onChange={(value: Dayjs | null) => onChange(value)}
                        renderInput={(params: TextFieldProps) => (
                            <TextField {...params} sx={{ width: '100%'}}/>
                        )}
                    />
            </LocalizationProvider>
        </div>

    );
}
export default CustomDatePicker;