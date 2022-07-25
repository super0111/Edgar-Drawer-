
import Slider from "../Slider"
import {Card, CardContent , Typography , CardMedia } from '@mui/material';
import { BiSpreadsheet } from "react-icons/bi";

const DashboardBody = () => {
    return (
      <div className="dashboardBody">
        <div className="dflex_center mt-2">
          <Card className='text-center m-4' 
            sx={{ 
              minWidth: { lg: '35%', md: '320px', sm: '300px', xs: '245px' }
            }}
          >
            <CardContent>
              <Typography 
                sx={{ 
                  fontSize: { lg: '25px', md: '22px', sm: '20px', xs: '20px' },
                  fontWeight: 600, color: "#05bade" 
                }} 
                gutterBottom
              >
                Goal
              </Typography>
              <Typography 
                sx={{ 
                  fontSize: { lg: '18px', md: '16px', sm: '16px', xs: '15px' },
                }} 
                component="div"
              >
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
          <Card className='text-center m-4'
            sx={{ 
              minWidth: { lg: '35%', md: '320px', sm: '300px', xs: '245px' }
            }}
          >
            <CardContent>
              <Typography 
                sx={{ 
                  fontSize: { lg: '25px', md: '22px', sm: '20px', xs: '20px' },
                  fontWeight: 600, color: "#05bade" 
                }} 
                gutterBottom
              >
                Asked to invitation
              </Typography>
              <div className='d-flex justify-content-center align-items-center m-auto mt-4'>
                <BiSpreadsheet color="rgb(50, 158, 147)" size={40} />
                <Typography 
                  sx={{ 
                    fontSize: { lg: '17px', md: '16px', sm: '15px', xs: '14px' },
                    backgroundColor: "rgb(50, 158, 147)",
                    color: "white",
                    borderRadius: 15,
                    padding: "3px 15px",
                    cursor: "pointer"
                  }} 
                  component="div"
                >
                  Product Description
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='text-center mt-5'>
          <Typography sx={{fontSize: 14}}>You have</Typography>
          <Typography sx={{fontSize: 50, fontWeight: 600}}>365 <span>in value</span></Typography>
          <Typography sx={{fontSize: 14}}>and</Typography>
          <Typography sx={{fontSize: 30, fontWeight: 600}}>365 in Benefits</Typography>
        </div>
      </div>
    )
  }

const Dashboard = () => {
    const title = "Dashboard";
    return (
        <div className="dashboard">
            <Slider title={title} Component={DashboardBody} />
        </div>
    )
}

export default Dashboard