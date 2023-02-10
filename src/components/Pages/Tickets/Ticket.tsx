import React, { useState } from 'react';
import {CustomButton} from "../../../custom-components/Buttons/CustomButton";
import {ButtonVariantType} from "../../../custom-components/Buttons/CustomButton.types";
import {CustomTextField} from "../../../custom-components/CustomTextInput/CustomTextField";

interface TicketProps {
    setIsModalOpen: (value: boolean) => void;
}
export interface ITicket {
    id: number;
    name: string;
    description: string
}

export interface Tickets {
    tickets: ITicket[];
}

const Ticket: React.FC<TicketProps> = ({setIsModalOpen}) => {
    const [ticketData, setTicketData] = useState<ITicket>({id: 0, name: '', description: ''})

    const handleChange = (newValue: string, field: string) => {
        setTicketData({...ticketData, [field]: newValue})
    };

    console.log(localStorage.getItem("tickets"))
    const handleOnSave = () => {
        let tickets = JSON.parse(localStorage.getItem("tickets") as string) || [];
        tickets.push({...ticketData, id: tickets.length + 1});
        localStorage.setItem("tickets", JSON.stringify(tickets));
        setTicketData({ id:0, name: '', description: '' })
        setIsModalOpen(false)
        window.location.reload();
    };

    return (
        <div className="flex flex-col items-center w-full">
            <div className="mb-4 w-full">
                <CustomTextField value={ticketData.name} onChange={e => handleChange(e.target.value, 'name')} label={"Name"}/>
            </div>
            <div className="w-full">
                <CustomTextField value={ticketData.description} onChange={e => handleChange(e.target.value, 'description')} label={"Description"} multiline/>
            </div>
            <div className="pt-10 w-full flex justify-center">
                <CustomButton disabled={!ticketData.name || !ticketData.description} classes="w-[120px]" title="Save" variant={ButtonVariantType.CONTAINED} onClick={() => handleOnSave()}/>
            </div>
        </div>
    );
};

export default Ticket;
