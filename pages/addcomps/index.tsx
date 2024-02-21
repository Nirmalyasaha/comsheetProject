import { AddCompData, FetchAllState, FetchBrand, FetchCreaditList, FetchLease, FetchPropertytype, FetchRegion, FetchSubPropertytype, FetchTenancy } from "@/api/compsFunction/compsFN";
import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import { useQuery } from "react-query";
import styles from '@/styles/addComp.module.css'
import '@/styles/addComp.module.css'
import { SubmitHandler, useForm } from "react-hook-form";
import { InputsValue } from "@/typeScript/type/add.type";





export default function AddComp() {


    const { register, handleSubmit, watch, formState: { errors }, } = useForm<InputsValue>()

    const onSubmit = (data: InputsValue) => {
        AddCompData(data)?.then((res) => {
            console.log("data in res", res)
        })
            .catch((error) => {
                console.log(error)
            })
    }

    //console.log(watch("PropertyName")) 


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

    /////////// CREADIT LIST START---------

    const { data: CreditList } = useQuery({
        queryKey: ["CREDIT"],
        queryFn: FetchCreaditList
    });

    //console.log("Credit list data:", CreditList)

    const CreditResdata = CreditList?.map((Cre) => {
        return {
            ...Cre,
            id: Cre._id

        }
    })


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Box className={styles.heading}>
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
                                        sx={{ width: "400px" }}
                                        options={PropertyResData}
                                        getOptionLabel={(option) => option?.title}
                                        renderInput={(params) => <TextField  {...params} label="PropertyTypes"                                   {...register("property_type_id")} />}
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
                                        sx={{ width: "400px" }}
                                        renderInput={(params) => <TextField  {...params} label="Sub PropertyTypes"
                                            {...register("sub_type_id")} />}
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
                                        sx={{ width: "400px" }}
                                        renderInput={(params) => <TextField  {...params} label="Tenancy"
                                            {...register("tenancy_id")} />}
                                    />
                                ) : (<></>)}
                            </Box>
                            <Box>
                                <TextField label="PropertyName" sx={{ width: "400px" }}
                                    {...register("property_name")} />
                            </Box>
                            <Box>
                                <TextField label="Adresss" sx={{ width: "400px" }}
                                    {...register("address")} />
                            </Box>
                            <Box>
                                <TextField label="City" sx={{ width: "400px" }}
                                    {...register("city")} />
                            </Box>

                            <Box>
                                {StateRESData ? (
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={StateRESData}
                                        getOptionLabel={(rr) => rr?.title}
                                        sx={{ width: "400px" }}
                                        renderInput={(params) => <TextField  {...params} label="State"
                                            {...register("state_id")} />}
                                    />
                                ) : (<></>)}
                            </Box>

                            <Box>
                                {BrandResData ? (
                                    <Autocomplete

                                        id="combo-box-demo"
                                        options={BrandResData}
                                        getOptionLabel={(br) => br?.title}
                                        sx={{ width: "400px" }}
                                        renderInput={(params) => <TextField  {...params} label="TenantBrand"
                                            {...register("tenant_brand_id")} />}
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
                                        sx={{ width: "400px" }}
                                        renderInput={(params) => <TextField  {...params} label="Region "
                                            {...register("region_id")} />}
                                    />
                                ) : (<></>)}
                            </Box>
                            <Box>
                                <TextField label="Country" sx={{ width: "400px" }}
                                    {...register("country")} />
                            </Box>
                            <Box>
                                <TextField label="Zip Code" sx={{ width: "400px" }}
                                    {...register("zipcode")}
                                />
                            </Box>

                            <Box>
                                <TextField label="List Cap Rate" sx={{ width: "400px" }}
                                    {...register("cap")} />
                            </Box>
                            <Box>
                                <TextField label="Close Cap Rate" sx={{ width: "400px" }}
                                    {...register("closed_cap")} />
                            </Box>
                            <Box>
                                <TextField label="List Price" sx={{ width: "400px" }}
                                    {...register("price")} />
                            </Box>
                            <Box>
                                <TextField label="Sold Price" sx={{ width: "400px" }}
                                    {...register("sold_price")} />
                            </Box>
                            <Box>
                                {leaseResData ? (
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={leaseResData}
                                        getOptionLabel={(option) => option?.title}
                                        sx={{ width: "400px" }}
                                        renderInput={(params) => <TextField  {...params} label="Lease Type"
                                            {...register("lease_type_id")} />}
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
                                        sx={{ width: "400px" }}
                                        renderInput={(params) => <TextField  {...params} label="Credit "
                                            {...register("credit_id")} />}
                                    />
                                ) : (<></>)}
                            </Box>
                            <Box>
                                <TextField label="Crop franchisee unitcount" sx={{ width: "400px" }}  {...register("corp_franchisee_unit_count")} />
                            </Box>
                            <Box>
                                <TextField label="Noi*" sx={{ width: "400px" }}
                                    {...register("noi")} />
                            </Box>
                            <Box>
                                <TextField label="Closing Noi" sx={{ width: "400px" }}
                                    {...register("closing_noi")} />
                            </Box>
                            <Box>
                                <TextField label="Rent Bump" sx={{ width: "400px" }}
                                    {...register("rent_bump")} />
                            </Box>
                            <Box>
                                <TextField label="Rent Bump Details" sx={{ width: "400px" }}
                                    {...register("rent_bump_text")} />
                            </Box>
                            <Box>
                                <TextField type="date" label="Lease Start" focused sx={{ width: "400px" }}   {...register("lease_start")} />
                            </Box>
                            <Box>
                                <TextField type="date" label="Lease End" focused sx={{ width: "400px" }} {...register("lease_end")} />
                            </Box>
                            <Box>
                                <TextField type="date" label="List Date" focused sx={{ width: "400px" }} {...register("list_date")} />
                            </Box>

                            <Box>
                                <TextField type="date" label="Sold Date" focused sx={{ width: "400px" }} {...register("list_closing_date")} />
                            </Box>





                        </Grid>

                        <Grid item xs={6} className={styles?.form1}>
                            <Box>
                                <TextField label="Units Of tenants" sx={{ width: "400px" }}
                                    {...register("tenant_unit")} />
                            </Box>
                            <Box>
                                <TextField label="Vacancy" sx={{ width: "400px" }}
                                    {...register("vacancy_perc")} />
                            </Box>
                            <Box>
                                <TextField label="Traffic" sx={{ width: "400px" }}
                                    {...register("traffic")} />
                            </Box>
                            <Box>
                                <TextField label="Pop 1 Mile" sx={{ width: "400px" }}
                                    {...register("pop_1_mile")} />
                            </Box>
                            <Box>
                                <TextField label="Pop 3 Mile" sx={{ width: "400px" }}
                                    {...register("pop_3_mile")} />
                            </Box>
                            <Box>
                                <TextField label="Pop 5 Mile" sx={{ width: "400px" }}
                                    {...register("pop_5_mile")} />
                            </Box>

                            <Box>
                                <TextField label="HH 1 Mile" sx={{ width: "400px" }}
                                    {...register("hh_1_mile")} />
                            </Box>
                            <Box>
                                <TextField label="HH 3 Mile" sx={{ width: "400px" }}
                                    {...register("hh_3_mile")} />
                            </Box>
                            <Box>
                                <TextField label="HH 5 Mile" sx={{ width: "400px" }}
                                    {...register("hh_5_mile")} />
                            </Box>
                            <Box>
                                <TextField label="Size(S/F)" sx={{ width: "400px" }}
                                    {...register("size_sqft")} />
                            </Box>
                            <Box>
                                <TextField label="Price(S/F)" sx={{ width: "400px" }}
                                    {...register("per_sqft_price")} />
                            </Box>
                            <Box>
                                <TextField label="Rent(S/F)" sx={{ width: "400px" }}
                                    {...register("per_sqft_rent_price")} />
                            </Box>
                            <Box>
                                <TextField label="Lot/AC" sx={{ width: "400px" }}
                                    {...register("lot_ac")} />
                            </Box>
                            <Box>
                                <TextField label="Year Built" sx={{ width: "400px" }}
                                    {...register("year_built")} />
                            </Box>
                            <Box>
                                <TextField label="Price per Unit" sx={{ width: "400px" }}
                                    {...register("unit_price")} />
                            </Box>
                            <Box>
                                <TextField label="Enter Azumtions" sx={{ width: "400px" }}
                                    {...register("assumptions")} />
                            </Box>
                            <Box>
                                <TextField label="Sales" sx={{ width: "400px" }}
                                    {...register("reported_sales")} />
                            </Box>
                            <Box>
                                <TextField label="lat" sx={{ width: "400px" }}
                                    {...register("lat")} />
                            </Box>
                            <Box>
                                <TextField label="long" sx={{ width: "400px" }}
                                    {...register("long")} />
                            </Box>

                            <Box>
                                <Button variant="contained" type="submit">SUBMIT</Button>
                            </Box>

                        </Grid>
                    </Grid>
                </Box>
            </form>

        </>

    )
}


