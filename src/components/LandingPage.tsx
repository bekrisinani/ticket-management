import React, {useEffect, useState} from "react";
import {CustomButton} from "../custom-components/Buttons/CustomButton";
import CustomModal from "../custom-components/CustomModal/CustomModal";
import Ticket, {ITicket} from "./Pages/Tickets/Ticket";
import {ButtonVariantType} from "../custom-components/Buttons/CustomButton.types";
import CustomTable, {TableFieldsProps} from "../custom-components/Table/CustomTable";
import Sprint, {ISprint} from "./Pages/Sprints/Sprint";

export const ticketTableHeaders: TableFieldsProps[] = [
    {
        titleName: 'Name',
        dataField: 'name',
    },
    {
        titleName: 'Description',
        dataField: 'description',
    },
    // {
    //     titleName: '',
    //     dataField: '',
    //     type: 'action',
    //     actionComponent: ActionComponent,
    // },
];

export const sprintTableHeaders: TableFieldsProps[] = [
    {
        titleName: 'Name',
        dataField: 'name',
    },
    {
        titleName: 'Start Date',
        dataField: 'startDate',
    },
    {
        titleName: 'End Date',
        dataField: 'endDate',
    },
    // {
    //     titleName: 'Tickets Assigned',
    //     dataField: 'tickets',
    // }
];

export const LandingPage: React.FC = () => {
    const [tickets, setTickets] = useState<ITicket[]>([])
    const [sprints, setSprints] = useState<ISprint[]>([])

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSprintModalOpen, setIsSprintModalOpen] = useState(false)

    useEffect(() => {
        let tickets = JSON.parse(localStorage.getItem("tickets") as string);
        let sprints = JSON.parse(localStorage.getItem("sprints") as string);

        if (tickets) {
            setTickets(tickets)
        }
        if (sprints){
            setSprints(sprints)
        }
    }, [])

    return (
        <div className="w-full flex justify-center items-center flex-col space-y-10	mb-40 mt-12">
            <div className="w-4/5 w-full sm:w-11/12">
                <CustomTable tableTitle="All Tickets" columns={ticketTableHeaders} data={tickets} button={<CustomButton onClick={() => setIsModalOpen(true)} title="Create Ticket" variant={ButtonVariantType.CONTAINED}/>}/>
            </div>
            <div className="w-4/5 w-full sm:w-11/12 ">
                <CustomTable tableTitle="All Sprints" columns={sprintTableHeaders} data={sprints} button={<CustomButton onClick={() => setIsSprintModalOpen(true)} title="Create Sprint" variant={ButtonVariantType.CONTAINED}/>}/>
            </div>
            <CustomModal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} title={"Create a Ticket"}>
                <Ticket setIsModalOpen={(value) => setIsModalOpen(value)}/>
            </CustomModal>
            <CustomModal isOpen={isSprintModalOpen} handleClose={() => setIsSprintModalOpen(false)} title={"Create a Sprint"}>
                <Sprint setIsModalOpen={(value) => setIsSprintModalOpen(value)}/>
            </CustomModal>
        </div>
    );
}
