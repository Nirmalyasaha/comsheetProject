import { FetchAllState, FetchBrand, FetchCreaditList, FetchLease, FetchPropertytype, FetchRegion, FetchSubPropertytype, FetchTenancy } from "@/api/compsFunction/compsFN";
import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import { useQuery } from "react-query";
import styles from '@/styles/addComp.module.css'
import '@/styles/addComp.module.css'






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


    const { data: leaseData } = useQuery({
        queryKey: ["LEASE"],
        queryFn: FetchLease

    });
    //console.log("lease data",leaseData)


    const leaseResData = leaseData?.map((les) => {
        return {
            ...les,
            id: les._id

        }
    })

    //// END ------

    /////////// CREADIYT LIST START---------

    const { data: CreditList } = useQuery({
        queryKey: ["CREDIT"],
        queryFn: FetchCreaditList
    });

    console.log("Credit list data:", CreditList)

    const CreditResdata = CreditList?.map((Cre) => {
        return {
            ...Cre,
            id: Cre._id

        }
    })




    return (
        <>
            <Box  className={styles.heading}>
                <h1 >Add Comps</h1>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} className={styles?.form1}>
                        <Box>
                            {PropertyResData ? (
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    sx={{width:"400px" }}
                                    options={PropertyResData}
                                    getOptionLabel={(option) => option?.title}
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
                                    sx={{width:"400px"}}
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
                                    sx={{width:"400px"}}
                                    renderInput={(params) => <TextField  {...params} label="Tenancy" />}
                                />
                            ) : (<></>)}
                        </Box>
                        <Box>
                            <TextField label="Property Name"  sx={{width:"400px"}}/>
                        </Box>
                        <Box>
                            {StateRESData ? (
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={StateRESData}
                                    getOptionLabel={(rr) => rr?.title}
                                    sx={{width:"400px"}}
                                    renderInput={(params) => <TextField  {...params} label="State" />}
                                />
                            ) : (<></>)}
                        </Box>

                        <Box>
                            {BrandResData ? (
                                <Autocomplete
                                   
                                    id="combo-box-demo"
                                    options={BrandResData}
                                    getOptionLabel={(br) => br?.title}
                                    sx={{width:"400px"}}
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
                                    sx={{width:"400px"}}
                                    renderInput={(params) => <TextField  {...params} label="Region " />}
                                />
                            ) : (<></>)}
                        </Box>
                        <Box>
                            {leaseResData ? (
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={leaseResData}
                                    getOptionLabel={(option) => option?.title}
                                    sx={{width:"400px"}}
                                    renderInput={(params) => <TextField  {...params} label="Lease Type" />}
                                />
                            ) : (<></>)}
                        </Box>
                        <Box>
                            {CreditResdata ? (
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={CreditResdata}
                                    getOptionLabel={(option) => option?.title}
                                    sx={{width:"400px"}}
                                    renderInput={(params) => <TextField  {...params} label="Credit " />}
                                />
                            ) : (<></>)}
                        </Box>
                        <Box>
                            <TextField label="NOI*" sx={{width:"400px"}} />
                        </Box>

                        <Box>
                            <TextField type="date" label="Lease Start" focused sx={{width:"400px"}} />
                        </Box>

                        <Box>
                            <TextField type="date" label="Lease End" focused sx={{width:"400px"}} />
                        </Box>


                    </Grid>

                    <Grid item xs={6} className={styles?.form1}>
                        <Box>
                            <TextField label="Units Of tenants"  sx={{width:"400px"}} />
                        </Box>
                        <Box>
                            <TextField label="Vacancy" sx={{width:"400px"}}/>
                        </Box>
                        <Box>
                            <TextField label="Traffic" sx={{width:"400px"}}/>
                        </Box>
                        <Box>
                            <TextField label="Pop 1 Mile"sx={{width:"400px"}} />
                        </Box>
                        <Box>
                            <TextField label="Pop 3 Mile" sx={{width:"400px"}}/>
                        </Box>
                        <Box>
                            <TextField label="Pop 5 Mile" sx={{width:"400px"}} />
                        </Box>

                        <Box>
                            <TextField label="HH 1 Mile" sx={{width:"400px"}} />
                        </Box>
                        <Box>
                            <TextField label="HH 3 Mile"  sx={{width:"400px"}}/>
                        </Box>
                        <Box>
                            <TextField label="HH 5 Mile" sx={{width:"400px"}}/>
                        </Box>
                        <Box>
                            <TextField label="List Cap Rate" sx={{width:"400px"}}/>
                        </Box>
                        <Box>
                            <TextField label="Close Cap Rate" sx={{width:"400px"}}/>
                        </Box>

                        <Box>
                            <Button >SUBMIT</Button>
                        </Box>
                    </Grid>


                </Grid>

            </Box>

        </>

    )
}


