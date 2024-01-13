import { BASE_URL } from "./baseUrl";
import { commonApi } from "./commonApi";

// register
export const registerApi=async(body)=>{
  return await commonApi('POST',`${BASE_URL}/user/register`,body,"")
}


// login

export const loginApi=async(body)=>{
    return await commonApi('POST',`${BASE_URL}/user/login`,body,"")
  }
  
  // adminlogin
  export const adminApi = async(body)=>{
    return await commonApi('POST',`${BASE_URL}/admin/login`,body,"")
  }

  // add new bikes
  export const addBikeApi=async(body,headers)=>{
return await commonApi('POST',`${BASE_URL}/admin/add-bikes`,body,headers)
  }

  // add cards

  export const getAllCardsApi=async()=>{
    return await commonApi("GET",`${BASE_URL}/admin/get-cards`,"","")
  }

  // delete card

  export const deleteCardApi=async(id,headers)=>{
    return await commonApi ("DELETE",`${BASE_URL}/admin/delete-card/${id}`,{},headers)
  }

  // user booking

  export const bookingApi=async(body)=>{
return await commonApi("POST",`${BASE_URL}/booking/add-booking`,body,"")
  }