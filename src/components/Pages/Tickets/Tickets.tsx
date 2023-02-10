import React, {useEffect, useState} from "react";
import Ticket, {ITicket} from "./Ticket";
import CustomTable from "../../../custom-components/Table/CustomTable";
import {CustomButton} from "../../../custom-components/Buttons/CustomButton";
import {ButtonVariantType} from "../../../custom-components/Buttons/CustomButton.types";
import {ticketTableHeaders} from "../../LandingPage";
import CustomModal from "../../../custom-components/CustomModal/CustomModal";

export const Tickets: React.FC = () => {
    const [tickets, setTickets] = useState<ITicket[]>([])

    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        let tickets = JSON.parse(localStorage.getItem("tickets") as string);
        if (tickets) {
            setTickets(tickets)
        }
    }, [])

    return (
        <div className='w-full flex justify-center items-center flex-col space-y-10	mb-40 mt-12'>
            <div className="w-4/5 w-full sm:w-11/12">
                <CustomTable tableTitle="Tickets" columns={ticketTableHeaders} data={tickets} button={<CustomButton onClick={() => setIsModalOpen(true)} title="Create Ticket" variant={ButtonVariantType.CONTAINED}/>}/>
            </div>
            <CustomModal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} title={"Create a ticket"}>
                <Ticket setIsModalOpen={(value) => setIsModalOpen(value)}/>
            </CustomModal>
        </div>
    );
}
