import { FetchAllState, FetchBrand, FetchLease, FetchPropertytype, FetchRegion, FetchSubPropertytype, FetchTenancy } from "@/api/compsFunction/compsFN";
import { Autocomplete, Box, Grid, TextField } from "@mui/material";
import { title } from "process";
import { useQuery } from "react-query";






export default function AddComp() {


    ////  property Types--------start----

    const { data: PropertyData, error } = useQuery({
        queryKey: ["ADD Comps"],
        queryFn: FetchPropertytype
    });

    // console.log("property types", PropertyData)

    const PropertyResData = PropertyData?.map((item) => {
        return {
            ...item,
            id: item._id,
            title: item.title
        }
    })

    ////////// END ---------

    /////// SUB PROPERTY START--------

    const { data: subData, error: er } = useQuery({
        queryKey: ["Sub PROPERTY"],
        queryFn: FetchSubPropertytype
    });

    // console.log("subPorpData:", subData)

    const subRESData = subData?.map((res) => {
        return {
            ...res,
            id: res._id,
            title: res.title

        }
    })
    //////// end--------

    ////// SATTE START--------


    const { data: StateData } = useQuery({
        queryKey: ["STATE"],
        queryFn: FetchAllState
    });
    // console.log("state res:", StateData)

    const StateRESData = StateData?.map((ste) => {
        return {
            ...ste,
            id: ste._id

        }
    })
    ///////// END --------

    //////// TENACY START--------

    const { data: tenancyData } = useQuery({
        queryKey: ["TENANCY"],
        queryFn: FetchTenancy
    })
    ////  console.log("tenancy DAta:",tenancyData)

    const TenancyResData = tenancyData?.map((ten) => {
        return {
            ...ten,
            id: ten._id
        }

    })
    /////// end -------

    ///////// TENT BRAND START------

    const { data: brandData } = useQuery({
        queryKey: ["BRAND "],
        queryFn: FetchBrand
    })
    //console.log("Brand Data:",brandData)

    const BrandResData = brandData?.map((brand) => {
        return {
            ...brand,
            id: brand._id

        }
    })
    //// END ====---

    //// REGION START-----


    const { data: regionData } = useQuery({
        queryKey: ["REGION"],
        queryFn: FetchRegion
    });
   // console.log("region res", regionData)

    const RegionResData = regionData?.map((reg) => {
        return {
            ...reg,
            id: reg._id

        }
    })
/////////////END-----------

///////// LEASES START-----


const {data:leaseData}=useQuery({
    queryKey:["LEASE"],
    queryFn:FetchLease
   
});
console.log("lease data",leaseData)


const leaseResData=leaseData?.map((les)=>{
    return {
            ...les,
            id:les._id

    }
})






    return (
        <>
            <Box>
                <h1>Add Comps</h1>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box>
                            {PropertyResData ? (
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={PropertyResData}
                                    getOptionLabel={(option) => option?.title}
                                    sx={{ width: 200 }}
                                    renderInput={(params) => <TextField  {...params} label="PropertyTypes" />}
                                />
                            ) : (<></>)}
                        </Box>
                        <Box>
                            {subRESData ? (
                                <Autocomplete

                                    disablePortal
                                    id="combo-box-demo"
                                    options={subRESData}
                                    getOptionLabel={(rr) => rr?.title}
                                    sx={{ width: 200 }}
                                    renderInput={(params) => <TextField  {...params} label="Sub PropertyTypes" />}
                                />
                            ) : (<></>)}
                        </Box>
                        <Box>
                            {TenancyResData ? (
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={TenancyResData}
                                    getOptionLabel={(rr) => rr?.title}
                                    sx={{ width: 200 }}
                                    renderInput={(params) => <TextField  {...params} label="Tenancy" />}
                                />
                            ) : (<></>)}
                        </Box>
                        <Box>
                            <TextField label="Property Name"/>
                        </Box>
                        <Box>
                            {StateRESData ? (
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={StateRESData}
                                    getOptionLabel={(rr) => rr?.title}
                                    sx={{ width: 200 }}
                                    renderInput={(params) => <TextField  {...params} label="State" />}
                                />
                            ) : (<></>)}
                        </Box>
                        
                        <Box>
                            {BrandResData ? (
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={BrandResData}
                                    getOptionLabel={(br) => br?.title}
                                    sx={{ width: 200 }}
                                    renderInput={(params) => <TextField  {...params} label="Tenant Brand" />}
                                />
                            ) : (<></>)}
                        </Box>
                        <Box>
                            {RegionResData ? (
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={RegionResData}
                                    getOptionLabel={(option) => option?.title}
                                    sx={{ width: 200 }}
                                    renderInput={(params) => <TextField  {...params} label="Region " />}
                                />
                            ) : (<></>)}
                        </Box>
                        <Box>
                            {leaseData? (
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={leaseData}
                                    getOptionLabel={(option) => option?.title}
                                    sx={{ width: 200 }}
                                    renderInput={(params) => <TextField  {...params} label="Lease Type" />}
                                />
                            ) : (<></>)}
                        </Box>
                        </Grid>

                        <Grid item  xs={6}>
                            <Box>
                               <TextField label="Units Of tenants"/>                             
                            </Box>
                            <Box>
                                <TextField label="Vacancy"/>
                            </Box>
                            <Box>
                                <TextField label="Traffic" />
                            </Box>
                            <Box>
                                <TextField label="Pop 1 Mile"/>
                            </Box>
                            <Box>
                                <TextField label="Pop 3 Mile"/>
                            </Box>
                            <Box>
                                <TextField label="Pop 5 Mile"/>
                            </Box>
                           
                            <Box>
                                <TextField label="HH 1 Mile"/>
                            </Box>
                            <Box>
                                <TextField label="HH 3 Mile"/>
                            </Box>
                            <Box>
                                <TextField label="HH 5 Mile"/>
                            </Box>
                        </Grid>
                    

                </Grid>

            </Box>

        </>

    )
}


