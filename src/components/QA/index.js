import {Card, CardContent , Typography , Button } from '@mui/material';
import { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from '../Slider';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';

const Modal = (props) => {
    const {showModal, setShowModal} = props
    return (
        <div className='modal'>
            <Dialog
                open={showModal}
                onClose={()=>setShowModal(false)}
                aria-labelledby="responsive-dialog-title"
                sx={{
                    width: { lg: "50%", md: "60%", sm: "70%", xs: "80%" },
                    margin: "auto"
                }}
            >
                <DialogTitle 
                    id="responsive-dialog-title"
                    sx={{
                        fontSize: "20px",
                        marginLeft: "10px",
                        color: "rgb(50, 158, 147)",
                    }}
                >
                    My Question
                </DialogTitle>
                <DialogContent>
                    <TextField
                        helperText="Please enter your question to send site manager"
                        id="demo-helper-text-misaligned"
                        label="Question"
                        sx={{
                            marginTop: "10px"
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button 
                        autoFocus 
                        onClick={()=>setShowModal(false)}
                        sx={{
                            color: "rgb(50, 158, 147)", 
                            fontSize: "16px",
                        }}
                    >
                        Close
                    </Button>
                    <Button 
                        onClick={()=>setShowModal(false)} autoFocus
                        sx={{
                            color: "rgb(50, 158, 147)", 
                            fontSize: "16px",
                        }}
                    >
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

const questions = [
    { text: "answered question 1" },
    { text: "answered question 2" },
    { text: "answered question 3" },
    { text: "answered question 4" },
    { text: "answered question 5" },
]

const QABody = () => {
    const [ showModal, setShowModal ] = useState(false);
    const [ questionNum, setQuestionNum ] = useState(0);
    const handleLeftChange = () => {
        if(questionNum <= 0 ) {
            setQuestionNum(0)
            return
        }
        setQuestionNum(questionNum-1)
    }
    const handleRightChange = () => {
        if( questionNum > questions.length-2) {
            console.log("sdfsfsd")
            setQuestionNum(questions.length-1)
            return
        }
        setQuestionNum(questionNum+1)
    }
    return (
        <div className="">
            <Card className='m-4 p-3' 
                sx={{ 
                    minWidth: { lg: '350px', md: '320px', sm: '280px', xs: '245px' },
                    height:"150px",
                    borderRadius:"30px" 
                }}
            >
                <CardContent>
                    <Typography sx={{ fontSize: 25, fontWeight: 600, color: "#05bade" }} gutterBottom>
                        Questions
                    </Typography>
                    { questions.map((question, i)=>(
                        <>
                            {questionNum == i && 
                            <Typography key={i} sx={{ fontSize: 15, marginTop: '20px' }} component="div">
                                {question.text}
                            </Typography>}
                        </>
                    ))}
                </CardContent>
            </Card>
            <div className='slider_field'>
                <div className="icon_field">
                    <BiChevronLeft 
                        color="white" 
                        size={30} 
                        onClick={handleLeftChange}
                    /> 
                </div>
                <div className="icon_field">
                    <BiChevronRight 
                        color="white" 
                        size={30}
                        onClick={handleRightChange}
                    />
                </div>
            </div>

            <Card className='m-4 p-3'
                sx={{ 
                    minWidth: { lg: '350px', md: '320px', sm: '280px', xs: '245px' },
                    height:"150px",
                    borderRadius:"30px" 
                }}
            >
                <CardContent>
                    <Typography 
                        sx={{ 
                            fontSize: 15, marginTop: '20px',
                            width: { lg: '350px', md: '320px', sm: '280px', xs: '180px' }
                        }} 
                        component="div"
                    >
                        Make your question about .....
                    </Typography>
                </CardContent>
            </Card>
            <div className='d-flex justify-content-end m-4'>
                <Button 
                    sx={{ width: '120px', color: "rgb(50, 158, 147)" }} 
                    variant="outlined"
                    onClick={()=> setShowModal(true)}
                >
                    Ask
                </Button>
            </div>
            {
                showModal === true ?
                <Modal showModal={showModal} setShowModal={setShowModal} /> : ""
            }
        </div>
    )
}

const QA = () => {
    const title = "Questions e Answers";
    return (
        <div className='QA'>
            <Slider title={title} Component={QABody} />
        </div>
    )
}

export default QA