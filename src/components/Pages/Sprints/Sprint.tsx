import React, {useEffect, useState} from 'react';
import {Autocomplete} from "@mui/material";
import {CustomButton} from "../../../custom-components/Buttons/CustomButton";
import {ButtonVariantType} from "../../../custom-components/Buttons/CustomButton.types";
import {Dayjs} from "dayjs";
import {ITicket} from "../Tickets/Ticket";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import TextField, {TextFieldProps} from "@mui/material/TextField";

interface SprintProps {
    setIsModalOpen: (value: boolean) => void;
}
export interface ISprint {
    id: number;
    name: string;
    startDate: string | null;
    endDate: string | null
    tickets?: ITicket[];
}

const Sprints: React.FC<SprintProps> = ({setIsModalOpen}) => {
    const [sprintData, setSprintData] = useState<ISprint>({id: 0, name: '', startDate: null, endDate: null, tickets: []})
    const [ticketData, setTicketData] = useState<ITicket[]>([])
    const [selectedTickets, setSelectedTickets] = useState<ITicket[]>([]);

    const handleOnDateChange = (newValue: Dayjs | null, field: string) => {
        setSprintData({...sprintData, [field]: newValue?.format('YYYY-MM-DD')})
    };


    useEffect(() => {
        setTicketData( JSON.parse(localStorage.getItem("tickets") as string) || [])
    }, [])
    const handleOnSave = () => {
        let sprints = JSON.parse(localStorage.getItem("sprints") as string) || [];
        sprints.push({...sprintData, id: sprints.length + 1, tickets: selectedTickets});
        localStorage.setItem("sprints", JSON.stringify(sprints));
        setSprintData({ id: 0, name: '', startDate: null, endDate: null })
        setIsModalOpen(false);
        window.location.reload();
    };
    return (
        <div className="flex flex-col items-center w-full">
            <div className="mb-4 w-full">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
                <input
                    id="name"
                    type="text"
                    className="w-full border border-gray-400 rounded p-3"
                    value={sprintData.name}
                    onChange={e => setSprintData({...sprintData, name: e.target.value})
                    }
                />
            </div>
            <div className="mb-4 w-full">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label='Start Date'
                        value={sprintData.startDate}
                        onChange={(value: Dayjs | null) => handleOnDateChange(value, 'startDate')}
                        renderInput={(params: TextFieldProps) => (
                            <TextField {...params} sx={{ width: '100%'}}/>
                        )}
                    />
                </LocalizationProvider>
            </div>
            <div className="mb-4 w-full">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label='End Date'
                        value={sprintData.endDate}
                        onChange={(value: Dayjs | null) => handleOnDateChange(value, 'endDate')}
                        renderInput={(params: TextFieldProps) => (
                            <TextField {...params} sx={{ width: '100%'}}/>
                        )}
                    />
                </LocalizationProvider>
            </div>
            <div className='w-full'>
                {
                    ticketData.length > 0 &&
                    <Autocomplete
                        onChange={(e, value) => {setSelectedTickets(value)}}
                        multiple
                        id="tags-outlined"
                        options={ticketData}
                        getOptionLabel={(option: ITicket) => option.name}
                        defaultValue={undefined}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Select Ticket"
                                placeholder="Favorites"
                            />
                        )}
                    />
                }

            </div>
            <div className="pt-10 w-full flex justify-center">
                <CustomButton disabled={!sprintData.name || !sprintData.startDate || !sprintData.endDate || selectedTickets.length <= 0} classes="w-[120px]" title="Save" variant={ButtonVariantType.CONTAINED} onClick={() => handleOnSave()}/>
            </div>
        </div>
    );
};

export default Sprints;
