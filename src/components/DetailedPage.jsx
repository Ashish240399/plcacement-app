import React, { useContext, useEffect, useState } from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack, TextField } from '@mui/material';
import { DetailedContext } from './context/detailedContext';
//import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./detailedpage.css"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p:4,
  borderRadius:'10px',
};
export default function DetailPage({value,value1}) {
    const {details}=useContext(DetailedContext);
    console.log(details);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    useEffect(()=>{
        console.log("in")
        if(details){
            console.log("imin")
            handleOpen();
        }
    },[details]);
  return (
    <div >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div onClick={handleClose} style={{textAlign:"end",cursor:"pointer"}}>X</div>
          {details&&<div>
            <div className='top'>
              <img src={details.image}/>
              <div>
                <div><h3>{details.name}</h3></div>
                <div style={{fontWeight:500}} className='status'><div className={`${details.status==="Alive"?"green":"gray"}`}></div>{details.status}-{details.species}</div>
              </div>
            </div>
            <hr></hr>
            <div className='bottom'>
              <div className='up'>
                <div className='left'>
                  <div className='head'>Gender</div>
                  <div>{details.gender}</div>
                </div>
                <div className='right'>
                  <div className='head'>Location</div>
                  <div>{details.location.name}</div>
                </div>
              </div>
              <div className='down'>
                <div className='left'>
                  <div className='head'>Species</div>
                  <div>{details.species}</div>
                </div>
                <div className='right'>
                  <div className='head'>Origin</div>
                  <div>{details.origin.name}</div>
                </div>
              </div>
            </div>
          </div>}
        </Box>
      </Modal>
    </div>
  );
}