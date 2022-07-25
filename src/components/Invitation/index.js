import Slider from "../Slider";
import {useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormControl, Select, MenuItem, FormHelperText } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

const InvitationBody = () => {
    const [status1, setStatus1] = useState(1);
    const [status2, setStatus2] = useState(1);
    const [status3, setStatus3] = useState(1);
    return (
        <div className="invitation">
            <TableContainer className="invitation_table" component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell 
                                align="center"
                            >
                                Email
                            </StyledTableCell>
                            <StyledTableCell 
                                align="center"
                            >
                                Invite
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow>
                            <StyledTableCell align="center" component="th" scope="row">contact@gmail.com</StyledTableCell>
                            <StyledTableCell align="center">
                                <FormControl sx={{ width: 100 }}>
                                    <Select
                                        value={status1}
                                        onChange={(event)=>setStatus1(event.target.value)}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'invite' }}
                                        sx={{ fontSize: "16px" }}
                                    >
                                        <MenuItem value={1}>Asking</MenuItem>
                                        <MenuItem value={2}>Send</MenuItem>
                                        <MenuItem value={3}>Ignore</MenuItem>
                                    </Select>
                                </FormControl>
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell align="center" component="th" scope="row">contact@gmail.com</StyledTableCell>
                            <StyledTableCell align="center">
                                <FormControl sx={{ width: 100 }}>
                                    <Select
                                        value={status2}
                                        onChange={(event)=>setStatus2(event.target.value)}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'invite' }}
                                        sx={{ fontSize: "16px" }}
                                    >
                                        <MenuItem value={1}>Asking</MenuItem>
                                        <MenuItem value={2}>Send</MenuItem>
                                        <MenuItem value={3}>Ignore</MenuItem>
                                    </Select>
                                </FormControl>
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell align="center" component="th" scope="row">contact@gmail.com</StyledTableCell>
                            <StyledTableCell align="center">
                                <FormControl sx={{ width: 100 }}>
                                    <Select
                                        value={status3}
                                        onChange={(event)=>setStatus3(event.target.value)}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'invite' }}
                                        sx={{ fontSize: "16px" }}
                                    >
                                        <MenuItem value={1}>Asking</MenuItem>
                                        <MenuItem value={2}>Send</MenuItem>
                                        <MenuItem value={3}>Ignore</MenuItem>
                                    </Select>
                                </FormControl>
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="d-flex justify-content-start align-items-center send_message">
                <input type="text" placeholder="Enter your message" />
                <button>Send</button>
            </div>
        </div>
       
    );
}

 
const Invitation = () => {
    const title = "Invitations Requests";
    return (
        <div className="invitation">
            <Slider title={title} Component={InvitationBody} />
        </div>
    )
}

export default Invitation