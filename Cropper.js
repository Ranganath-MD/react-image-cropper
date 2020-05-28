import React, { useState } from "react"
import {Container, Row, Col, Button} from "react-bootstrap"
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const Cropper = () => {
  const [src, setFile] = useState(null)
  const [image, setImage] = useState(null)
  const [crop, setCrop] = useState({ aspect: 1/1})
  const [result, setResult] = useState(null)

  const handleFileChange = (e) => {
     setFile(URL.createObjectURL(e.target.files[0]))
  }

  //getting the cropped Image
  const getCroppedImg = () => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');
  
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    );
    const base64Image = canvas.toDataURL('image/jpeg');
    setResult(base64Image)
  }

  return(
     <Container className="container">
      <Row>
        <Col sm={12} md={6}>
         <div>
          <input type="file" onChange={handleFileChange} id="file"/>
          <label htmlFor="file">choose a file</label>
          
        </div>
        {
            src && (
              <div>
                <p>select the area to crop the image</p>
                <ReactCrop 
                  src={src}
                  onImageLoaded={setImage} 
                  crop={crop}
                  onChange={newCrop => setCrop(newCrop)}
                />
                <br/>
                <Button variant="danger" onClick={getCroppedImg}>Crop</Button>
              </div>
            )
          }
        </Col>
        <Col sm={12} md={6}>
            
          {
            result && 
            (<div>
              <img src={result} alt="cropped image" width="50%"/>
            </div>)
          }
        </Col>
      </Row>
    </Container>
    
  )
}
export default Cropper