import React from 'react'
import './roadmap.css'
const Roadmap = () => {
  const roadmapInfo=[
    {
        Title:"2023",
        Description:"   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquamtotam a pariatur voluptatibus maiores perspiciatis rem velit vitae ex illo eaque maxime veniam iure adipisci, earum ipsa asperiores    deserunt voluptate!  debitis adipisci, et doloremque quod corporis autem vel neque, dolorem minima voluptatibus laborum esse consectetur "
    },
    {
        Title:"2022",
        Description:"   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquamtotam a pariatur voluptatibus maiores perspiciatis rem velit vitae ex illo eaque maxime veniam iure adipisci, earum ipsa asperiores    deserunt voluptate!m debitis adipisci, et doloremque quod corporis autem vel neque, dolorem minima voluptatibus laborum esse consectetur "
    },
    {
        Title:"2021",
        Description:"   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquamtotam a pariatur voluptatibus maiores perspiciatis rem velit vitae ex illo eaque maxime veniam iure adipisci, earum ipsa asperiores    deserunt voluptate!m debitis adipisci, et doloremque quod corporis autem vel neque, dolorem minima voluptatibus laborum esse consectetur "
    },
    
]
  return (
    <div>
      <div className="timeline lg:p-[20px]">
  <div className="outer">
{roadmapInfo.map((info,id)=>{
  return(

    <div key={id} className="card  ">
      <div className=" title info bg-gradient-to-tr from-[#235462] to-[#594755]">
        <h3 className="   text-[#D5A777] font-semibold text-lg mb-2 ">{info.Title}</h3>
        <p>
     {info.Description}
        </p>
      </div>
    </div>
   
  )
})}
   
  </div>
</div>


    </div>
  )
}

export default Roadmap