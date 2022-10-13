import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import img1 from './pic.jpg'
function Proofile ({fullName, bio, profession, handleName}) {
    return(
    <div className="aa" style={{display:"flex",flexDirection:"rows",alignItems:"center" ,justifyContent:"space-evenly"}}>
    <Card className="bb" style={{backgroundColor:"#D3D3D3",roundedCorners:"20px",boxShadow:"dimgray 0 0 20px" , margin:"10px"}}>
      <Card.Img className="cc" variant="top" src={img1}/>
      <Card.Body className="dd" style={{margin:"10px"}}>
        <Card.Title className="ee" style={{margin:"10px"}}>{fullName}</Card.Title>
        <Card.Text className="ff">{profession}</Card.Text>
        <Card.Text className="gg">{bio}</Card.Text>
        <Button className="hh" variant="primary" onClick={()=>handleName(fullName)}>click me</Button>
      </Card.Body>
    </Card>
    </div>
    )
}
Proofile.defaultProps={
    fullName:"don't you have a name!!!?",
    bio:"exited to know your story",
    profession:"poor!! your jobless?"
}
export default Proofile