import React,{ useState,useEffect } from 'react'
import { API_URl } from '../../../api'
const Chains = () => {
    const [vendoeData,setVendorData] = useState([])

    const vendorFirmHandler = async()=>{
        try {
                const response = await fetch(' ${API_URl }')


        } catch (error) {
            
        }
    }

  return (
    <div>Chains</div>
  )
}

export default Chains