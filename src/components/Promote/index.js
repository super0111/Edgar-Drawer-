import { Card, CardContent, Button, TextField, Typography } from '@mui/material';
import { FaRegEnvelope, FaLock } from "react-icons/fa";

import Slider from '../Slider';

const PromotionBody = () => {
    return (
        <div className="promotion">
            <Card className='promote_body'
                sx={{
                    width: { lg: '560px', md: '520px', sm: '350px', xs: '280px' }
                }}
            >
                <CardContent>
                    <div className='d-flex justify-content-start align-items-center'>
                        <FaRegEnvelope size={18} color="rgb(69, 193, 151)" />
                        <Typography sx={{ fontSize: 16, fontWeight:600, color: "rgb(69, 193, 151)", marginLeft: "5px" }}>
                            Email
                        </Typography>
                    </div>
                    <TextField
                        fullWidth 
                        label="contact@gmail.com" 
                        id="email"
                        type="email"
                        className='mt-2'
                    />
                    <div className='d-flex justify-content-end mt-4'>
                        <Button
                            variant="outlined"
                            sx={{
                                fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' },
                                border: "1px solid rgb(69, 193, 151)", 
                                color: "rgb(69, 193, 151)",
                            }}
                        >
                            Promote
                        </Button>
                    </div>
                    <Typography 
                        sx={{ 
                            fontSize: 14, color: "#557487", marginTop: "18px", 
                        }}
                    >
                        You must promote this service only to people you know that will gonna participate and that want this products as you do.
                    </Typography>
                    <Typography sx={{ fontSize: 14, color: "#557487", marginTop: "18px" }}>
                        Don’t invite without talk with them first, to explain how this service work
                    </Typography>
                    <Typography sx={{ fontSize: 14, color: "#557487", marginTop: "18px" }}>
                        Share your success and dreams with the others too.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

const Promote = () => {
    const title = "Promote"
    return (
        <div className='promote'>
            <Slider title={title} Component={PromotionBody} />
        </div>
    )
}

export default Promote