import './qrcode.css';

import { useState } from 'react';
import QRCode from 'qrcode';


function GenerateQRCode() {

  const [qrCode, setQrCode] = useState('');
  const [url ,setUrl] = useState('');

  const hendleGenerate = () => {

    if(url === "") return;

     QRCode.toDataURL(url, function (err, url) {

      if ( err) console.log("error");
      
    //   console.log(url);
      setUrl("");

      setQrCode(url);

     })
  }


  return (
    <>
    <div className="parent">

        <h1>Generate your QR Code</h1>

        <div className="combine">
          <input type="text" placeholder='https://www.google.com' value={url} onChange={(e)=>setUrl(e.target.value)} />

          <button onClick={()=>{hendleGenerate()}}>Generate</button>
        </div>

        {
          qrCode && <>
          <img src={qrCode} alt="qrCode" />
          <a href={qrCode} download="qrcode.png">Download</a>
          </>
        }

    </div>
    </>
  )
}

export default GenerateQRCode
