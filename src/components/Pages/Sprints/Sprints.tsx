import React, {useEffect, useState} from "react";
import CustomTable from "../../../custom-components/Table/CustomTable";
import {CustomButton} from "../../../custom-components/Buttons/CustomButton";
import {ButtonVariantType} from "../../../custom-components/Buttons/CustomButton.types";
import {sprintTableHeaders, ticketTableHeaders} from "../../LandingPage";
import Sprint, {ISprint} from "./Sprint";
import CustomModal from "../../../custom-components/CustomModal/CustomModal";

export const Sprints: React.FC = () => {
    const [sprints, setSprints] = useState<ISprint[]>([])
    const [selectedSprint, setSelectedSprint] = useState<ISprint | undefined>(undefined)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        let sprints = JSON.parse(localStorage.getItem("sprints") as string);
        if (sprints){
            setSprints(sprints)
        }
    }, [])

    return (
        <div className='w-full flex justify-center items-center flex-col space-y-10	mb-20 mt-12'>
            <div className="w-4/5 w-full sm:w-11/12 ">
                <CustomTable onRowClick={(row) => setSelectedSprint(row)} tableTitle="Sprints" columns={sprintTableHeaders} data={sprints} button={<CustomButton onClick={() => setIsModalOpen(true)} title="Create Sprint" variant={ButtonVariantType.CONTAINED}/>}/>
            </div>
            <div className="w-4/5 w-full sm:w-11/12 ">
                <CustomTable tableTitle={`Tickets for Sprint: ${selectedSprint?.name}`} columns={ticketTableHeaders} data={selectedSprint?.tickets} noDataText='There are no Tickets for selected Sprint'/>
            </div>
            <CustomModal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} title={"Create a Sprint"}>
                <Sprint setIsModalOpen={(value) => setIsModalOpen(value)}/>
            </CustomModal>
        </div>
    );
}
