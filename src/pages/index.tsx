import React from 'react';
import ImageStack from '@/app/component/ImageStack';
import SmallFrame from "@/app/component/SmallFrame";
import { FaGasPump } from 'react-icons/fa';  
import CarFrame from '@/app/component/CarFrame';
import Footer from '@/app/component/Footer'; 
//import './styles.css'; 
import CustomButton from '@/app/component/CustomButton';
import Icon from '@/app/component/Icon';
import Image from 'next/image';
import { FaSearch, FaHeart, FaBell, FaCog, FaSlidersH } from 'react-icons/fa';

export default function Home() {
  return (
    <div style={{width:'100%' , display:'flex' , justifyContent:'center' , flexDirection:'column'}}>

<div style={{width:'100%' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
      <div style={{display:'flex' , justifyContent:'space-between' , width:'85%' , alignItems:'center' }}>
       
        <div className='Heading' style={{ display: 'flex',  alignItems: 'center'   , gap:'20px'}}>
            <h1 style={{ color: "#3563E9" }}>MORENT</h1>
            <div style={{border:'1px solid black', height:'20px' , borderRadius:'30px', display:'flex' , justifyContent:'center' , alignItems:'center' , padding:'10px' }}>
<button style={{backgroundColor:'white' , width:'40px' , height:'40px' , borderRadius:'30px' , fontSize:'19px' , display:'flex' , justifyContent:'center' , alignItems:'center' , border:"none"}}>  <FaSearch title="Search" /></button>
          <input type="text" style={{width:'300px' , border:'none' , borderRadius:'30px' , height:'30px' , paddingLeft:'20px'}}placeholder='Enter Your Text here'  />
            <button style={{backgroundColor:'white' , width:'40px' , height:'40px' , borderRadius:'30px' , fontSize:'19px' , display:'flex' , justifyContent:'center' , alignItems:'center' , border:"none"}}> <FaSlidersH title="Controls" /></button>
            </div>
        </div>

        <div className='Icons' style={{display:'flex' , justifyContent:'flex-end' ,  alignItems:'center' , gap:'10px' }}>
<button style={{backgroundColor:'white' , width:'40px' , height:'40px' , borderRadius:'30px' , fontSize:'17px' , display:'flex' , justifyContent:'center' , alignItems:'center' , border:"1px solid #C3D4E966"}}> <FaHeart title="Heart" /></button>
<button style={{backgroundColor:'white' , width:'40px' , height:'40px' , borderRadius:'30px' , fontSize:'16px' , display:'flex' , justifyContent:'center' , alignItems:'center' , border:"1px solid #C3D4E966"}}> <FaBell title="Notifications" /></button>
<button style={{backgroundColor:'white' , width:'40px' , height:'40px' , borderRadius:'30px' , fontSize:'16px' , display:'flex' , justifyContent:'center' , alignItems:'center' , border:"1px solid #C3D4E966"}}> <FaCog title="Settings" /></button>
<img style={{backgroundColor:'white' , width:'40px' , height:'40px' , borderRadius:'30px' , border:"1px solid #C3D4E966"}} src="https://s3-alpha-sig.figma.com/img/f1f5/6cb5/7c6c5d88e94501a481b5f732536c2851?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EdJuLqtV8ruCtJFdzNuBnMaGvAP0aGmNGbPYNvCuaKpBcyKvtaJT6kUPTtr34GsOZTG7sz~JQaicsGTp0ZERMcnzcrNgB~k49y8hfDl3f6nEXJFeNquYNFkipbYFii~V2cVOgKRcS2RZ5yOQYRox9LM-FUdodJuiNF~umYT4u7-RV8jpVVF5Ujzt-P98NXuYeLM9Aidw6cMaawk8XNllLxSm-6MCAWDxQqo58x7dNAT9gEEAQaITcSpWVB9La19HGPJ1jJL0-LHZ8Jy6MwBG6Rs6MhdcD9hV40JbRk3Er0~2sNpLZfyG0MixfKpcfMBBkn1o~41k6g1c5cNMIz-bkg__" alt='' width={100} height={100} />
        </div>
  </div>
</div>


   
      <div style={{width:'100%' , backgroundColor:'#F6F7F9'}}>

      <ImageStack /> 

      </div>
      <div style={{width:'100%' , backgroundColor:'#F6F7F9'}}>
        <SmallFrame /> 
      </div>

      <div>
        <CarFrame />
      </div>

      {/* <div>
        <FaGasPump size={50} color="black" />
      </div> */}

      <div style={{width:'100%' , display:'flex' , justifyContent:'center'}}>
        <CustomButton /> {/* Custom button added here */}
      </div>
      <br />
      <br />
      {/* <div>
        <Icon/>
      </div>
       */}
      <div>
        <Footer /> {/* Place the Footer at the bottom */}
      </div>
      

    </div>
  );
}


