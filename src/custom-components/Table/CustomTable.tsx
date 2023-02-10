import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {IconButton, styled} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export interface TableFieldsProps {
    titleName: string;
    dataField: string;
    type?: 'default' | 'action';
    actionComponent?: any;
}

export interface TableProps {
    columns: Array<TableFieldsProps>;
    data: any[] | undefined;
    tableTitle: string;
    button?: React.ReactElement;
    onRowClick?: (row: any) => void
    noDataText?: string;
    onEditClick?: (row: any) => void;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#1976d2",
        color: theme.palette.common.white,
        fontSize: 16,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const CustomTable: React.FC<TableProps> = ({columns, data, tableTitle, button, onRowClick, noDataText, onEditClick}) => {
    return (
        <div>
            <div className="flex justify-between pb-3">
                <div className='text-xl'>{tableTitle}</div>
                <div>
                    {button}
                </div>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {columns.map((item, id) => {
                                return <StyledTableCell key={id} align="left">{item.titleName}</StyledTableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data && data?.map((row, id) => {
                            return (
                                <StyledTableRow
                                    onClick={() => onRowClick?.(row)}
                                    key={id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: onRowClick ? "pointer" : undefined, ':hover': {backgroundColor: onRowClick ? '#A9A9A9' : undefined}}}
                                >
                                    {columns.map((item) => {
                                        const {dataField} = item;
                                        return (
                                            <StyledTableCell component="th" scope="row">
                                                {row[dataField]}
                                            </StyledTableCell>
                                        )
                                    })}
                                </StyledTableRow>
                            )
                        })}
                        {!data &&
                        <TableRow>
                            <TableCell colSpan={3} align='center'>
                                <div className='text-base'>
                                    {noDataText}
                                </div>
                            </TableCell>
                        </TableRow>}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}

export default CustomTable