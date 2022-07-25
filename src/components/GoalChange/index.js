import Slider from "../Slider"
import {Card, CardContent , Typography , CardMedia } from '@mui/material';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const GoalChangeBody = () => {
    return (
        <div className="goalChangeBody">
            <div className="dflex_center mt-2">
                <div className="d-flex flex-column justify-content-center goal_field">
                    <Card className='text-center m-4'
                        sx={{
                            minWidth: { lg: '40%', md: '320px', sm: '280px', xs: '235px' },
                            height: "250px"
                        }}
                    >
                        <CardContent>
                            <Typography sx={{ fontSize: 25, fontWeight: 600, color: "#05bade" }} gutterBottom>
                                Goal
                            </Typography>
                            <Typography sx={{ fontSize: 18 }} component="div">
                                Product Description
                            </Typography>
                            <Typography sx={{ mb: 1.5 , fontWeight: 600}} color="text.secondary">
                                (value)
                            </Typography>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/images/Product Image.png"
                                alt="green iguana"
                                className='m-auto'
                            />
                        </CardContent>
                    </Card>
                    <div className="d-flex justify-content-between align-items-center slider_field">
                        <div className="icon_field"><BiChevronLeft color="white" size={20} /></div>
                        <select className="slider_text">
                            <option disabled>Want this on</option>
                            <option>Product</option>
                            <option>Service</option>
                        </select>
                        <div className="icon_field"><BiChevronRight color="white" size={20}/></div>
                    </div>
                </div>
                <Card className='text-center m-4'
                    sx={{ 
                        minWidth: { lg: '40%', md: '320px', sm: '280px', xs: '235px' },
                        height: "250px",
                        marginBottom: "20px",
                    }}
                >
                    <CardContent>
                        <Typography sx={{ fontSize: 25, fontWeight: 600, color: "#05bade" }} gutterBottom>
                            Description
                        </Typography>
                        <Typography 
                            className="des_text"    
                        >
                            Text with the major features of the product.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

const GoalChange = () => {
    const title = "Goal Change";
    return (
        <div className="">
            <Slider title={title} Component={GoalChangeBody} />
        </div>
    )
}

export default GoalChange