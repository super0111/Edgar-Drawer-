import Slider from "../Slider"
import {Card, CardContent , Typography } from '@mui/material';

const StatusBody = () => {
    return (
      <div className="statusBody">
        <div className="dflex_center mt-2">
          <Card className='text-center m-4'
            sx={{ 
              minWidth: { lg: '40%', md: '320px', sm: '280px', xs: '245px' }
            }}
          >
              <CardContent>
                <Typography sx={{ fontSize: 25, fontWeight: 600, color: "#05bade" }} gutterBottom>
                    Promotion
                </Typography>
                <div className="d-flex justify-content-between align-items-center underline mb-2">
                  <Typography sx={{ fontSize: 16 }} component="div">
                    Invites sent:
                  </Typography>
                  <Typography sx={{ fontSize: 16 }} component="div">
                    0
                  </Typography>
                </div>
                <div className="d-flex justify-content-between align-items-center underline mb-2">
                  <Typography sx={{ fontSize: 16 }} component="div">
                    Invites accepted:
                  </Typography>
                  <Typography sx={{ fontSize: 16 }} component="div">
                    0
                  </Typography>
                </div>
              </CardContent>
          </Card>
          <Card className='text-center m-4'
            sx={{ 
              minWidth: { lg: '40%', md: '320px', sm: '280px', xs: '245px' }
            }}
          >
              <CardContent>
                <Typography sx={{ fontSize: 25, fontWeight: 600, color: "#05bade" }} gutterBottom>
                    Points
                </Typography>
                <div className="d-flex justify-content-between align-items-center underline mb-2">
                  <Typography sx={{ fontSize: 16 }} component="div">
                    Buy resell promotion:
                  </Typography>
                  <Typography sx={{ fontSize: 16 }} component="div">
                    0
                  </Typography>
                </div>
                <div className="d-flex justify-content-between align-items-center underline mb-2">
                  <Typography sx={{ fontSize: 16 }} component="div">
                    Distribution promotion 1st:
                  </Typography>
                  <Typography sx={{ fontSize: 16 }} component="div">
                    0
                  </Typography>
                </div>
                <div className="d-flex justify-content-between align-items-center underline mb-2">
                  <Typography sx={{ fontSize: 16 }} component="div">
                    Distribution promotion 2nd:
                  </Typography>
                  <Typography sx={{ fontSize: 16 }} component="div">
                    0
                  </Typography>
                </div>
                <div className="d-flex justify-content-between align-items-center underline mb-2">
                  <Typography sx={{ fontSize: 16, color: "rgb(228, 131, 131)" }} component="div">
                    Used:
                  </Typography>
                  <Typography sx={{ fontSize: 16, color: "rgb(228, 131, 131)" }} component="div">
                    0
                  </Typography>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <Typography sx={{ fontSize: 17, color: "rgb(11, 132, 180)", fontWeight: 600 }} component="div">
                    Total:
                  </Typography>
                  <Typography sx={{ fontSize: 18,  color: "rgb(11, 132, 180)", fontWeight: 600 }} component="div">
                    0
                  </Typography>
                </div>
              </CardContent>
          </Card>

        </div>
      </div>
    )
  }

const BusinessStatus = () => {
    const title = "Business Status"
    return (
        <div className="">
            <Slider title={title} Component={StatusBody} />
        </div>
    )
}

export default BusinessStatus