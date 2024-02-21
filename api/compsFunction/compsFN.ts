import { PropertyTypes } from "@/interFace/PropertyType"
import { axiosInstance } from "../axiosInstance/axios"
import { endpoint } from "../endpoint/endpoint"
import { SubPropTypes } from "@/interFace/Subproperty"
import { StateTypes } from "@/interFace/stateType"
import axios from "axios"
import { TenancyTypes } from "@/interFace/tenancy"
import { BrandTypes } from "@/interFace/Brand"
import { Regiontypes } from "@/interFace/Region"
import { LeaseTypes } from "@/interFace/leaseType"
import { CreditTypes } from "@/interFace/CreditList"
import { AddCompTypes } from "@/interFace/addCompo"
import { InputType } from "zlib"
import { InputsValue } from "@/typeScript/type/add.type"





export const FetchPropertytype=async()=>{
    const res= await axiosInstance.get<PropertyTypes>(endpoint.CompsAdd.propertytype)
   // console.log("responce for property type",res.data.data)
    return res?.data.data
}

export const FetchSubPropertytype=async ()=>{
    const res = await axiosInstance.get<SubPropTypes>(endpoint.CompsAdd.subpropertyType)
   // console.log("sub respoce :",res)
    return res?.data.data
}

export const FetchAllState=async()=>{
    const res =await axiosInstance.get<StateTypes>(endpoint.CompsAdd.state)
   // console.log("state Responce",res)
    return res?.data?.data
}

export const FetchTenancy=async ()=>{
    const res =await axiosInstance.get<TenancyTypes>(endpoint.CompsAdd.tency)
    //console.log ("tenancy res:",res)
    return res?.data?.data
}

export const FetchBrand=async ()=>{
    const res =await axiosInstance.get<BrandTypes>(endpoint.CompsAdd.tenantBrand)
   // console.log("brand ::",res)
    return res?.data.data
 }
export const FetchRegion=async ()=>{
    const res = await axiosInstance.get<Regiontypes>(endpoint.CompsAdd.region)
    //console.log ("region wise data",res)
    return res?.data.data
 }
export const FetchLease=async()=>{
    const res = await axiosInstance.get<LeaseTypes>(endpoint.CompsAdd.lease)
    //console.log("lease res:",res)
    return res?.data.data
}

export const FetchCreaditList=async()=>{
    const res = await axiosInstance.get<CreditTypes>(endpoint.CompsAdd.creadit)
    //console.log("credit Res:",res)
    return res?.data.data
}

//// addd page func -----

export const AddCompData=async (data:InputsValue)=>{
    const res=await axiosInstance.post(endpoint.CompsAdd.add,data)
    console.log("add res",res)
    return res

}


