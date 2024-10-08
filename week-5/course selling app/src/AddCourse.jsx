import { TextField, Button } from "@mui/material";
import {Card} from "@mui/material";
import { useCallback, useState } from 'react';



function AddCourse() {
    const [title, setTitle] = useState("");
    const [discription, setDiscription] = useState("");


    return (
        <div style={{display: "flex", justifyContent:"center"}}>
            <div style={{ width: 400, padding: 30, paddingTop: 30 }}>
            <Card variant="outlined" style={{ padding: 20 }}> 
            <TextField 
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                            fullWidth={true}
                            variant="outlined"
                            label="Title"
                        />

            <TextField  
                            onChange={(e) => {
                                setDiscription(e.target.value)
                            }}
                            fullWidth={true}
                            variant="outlined"
                            label="Discription"
                        />

                        
<Button 
                
                variant="contained"
                onClick={() => {

                    function callback2(data) {
                        localStorage.setItem("token", data.token);
                      }
    
    
                      function useCallback1(res) {
                        res.json().then(callback2)
                      }
                      
                      fetch("http://localhost:3000/admin/courses", {
                        method: "POST",
                        body: JSON.stringify({
                          title: title,
                          discription: discription,
                          published: true
                        }),
                        headers: {
                          "Content-Type": "application/json",
                          "Authorization": "Bearer " + localStorage.getItem("token")
                        },
                        
                      })
                      .then(useCallback1)
                    
                }}
                >Add Course</Button>


                </Card>
                </div>
                    </div>
                )
            };

export default AddCourse;

