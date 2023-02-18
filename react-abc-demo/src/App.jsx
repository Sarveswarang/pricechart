import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Pricechart/>
      <Pricechart1/>
      <Pricechart2/>
    </div>
  )
}
function Pricechart(){
  const type={
    mode:"free",
   cost:"$0/month",

  }
  const chart={

    user:"Single User",
   storage :"5GB Storage",
   public_project:"Unlimited Public Projects",
   access :"Community Access",
    private_project:"Unlimited Private Projects",
    phone_spp:"Dedicated Phone Support",
    subdomain:"Free Subdomain",
    monthly_reports:"Monthly Status Reports"

  }

   return(
<div className='main'>
  <div className='cost'>
  <h5>{type.mode}</h5>
  <h1>{type.cost}</h1></div>
  <hr></hr>
  <div className="list">

  <h4><DoneIcon></DoneIcon>{chart. user}</h4>
  <h4><DoneIcon></DoneIcon>{chart.storage}</h4>
  <h4><DoneIcon></DoneIcon>{chart.public_project}</h4>
  <h4><DoneIcon></DoneIcon>{chart.access}</h4>
  <h4><ClearIcon></ClearIcon>{chart.private_project}</h4>
  <h4><ClearIcon></ClearIcon>{chart.phone_spp}</h4>
  <h4><ClearIcon></ClearIcon>{chart.subdomain}</h4>
  <h4><ClearIcon></ClearIcon>{chart.monthly_reports}</h4>
  <div className='submit'><Button variant="contained">Button</Button>
</div>
  </div>
</div>
   )
}
function Pricechart1(){
  const type={
    mode:"PLUS",
   cost:"$9/month",

  }
  const chart={

    user:"Single User",
   storage :"5GB Storage",
   public_project:"Unlimited Public Projects",
   access :"Community Access",
    private_project:"Unlimited Private Projects",
    phone_spp:"Dedicated Phone Support",
    subdomain:"Free Subdomain",
    monthly_reports:"Monthly Status Reports"

  }

   return(
<div className='main'>
  <div className='cost'>
  <h5>{type.mode}</h5>
  <h1>{type.cost}</h1></div>
  <hr></hr>
  <div className="list">

  <h4>{chart. user}</h4>
  <h4><DoneIcon></DoneIcon>{chart.storage}</h4>
  <h4><DoneIcon></DoneIcon>{chart.public_project}</h4>
  <h4><DoneIcon></DoneIcon>{chart.access}</h4>
  <h4><DoneIcon></DoneIcon>{chart.private_project}</h4>
  <h4><DoneIcon></DoneIcon>{chart.phone_spp}</h4>
  <h4><DoneIcon></DoneIcon>{chart.subdomain}</h4>
  <h4><ClearIcon></ClearIcon>{chart.monthly_reports}</h4>
  <div className='submit'><Button variant="contained">button</Button>
</div>
  </div>
</div>
   )
}
function Pricechart2(){
  const type={
    mode:"PRO",
   cost:"$49/month",

  }
  const chart={

    user:"Single User",
   storage :"5GB Storage",
   public_project:"Unlimited Public Projects",
   access :"Community Access",
    private_project:"Unlimited Private Projects",
    phone_spp:"Dedicated Phone Support",
    subdomain:"Free Subdomain",
    monthly_reports:"Monthly Status Reports"

  }

   return(
<div className='main'>
  <div className='cost'>
  <h5>{type.mode}</h5>
  <h1>{type.cost}</h1></div>
  <hr></hr>
  <div className="list">

  <h4><DoneIcon></DoneIcon>{chart. user}</h4>
  <h4><DoneIcon></DoneIcon>{chart.storage}</h4>
  <h4><DoneIcon></DoneIcon>{chart.public_project}</h4>
  <h4><DoneIcon></DoneIcon>{chart.access}</h4>
  <h4><DoneIcon></DoneIcon>{chart.private_project}</h4>
  <h4><DoneIcon></DoneIcon>{chart.phone_spp}</h4>
  <h4><DoneIcon></DoneIcon>{chart.subdomain}</h4>
  <h4><DoneIcon></DoneIcon>{chart.monthly_reports}</h4>
  <div className='submit'><Button variant="contained">Button</Button>
</div>
  </div>
</div>
   )
}
export default App
