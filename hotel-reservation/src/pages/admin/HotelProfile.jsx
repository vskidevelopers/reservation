import React, { useEffect, useState } from 'react'
import NotFoundPage from '../NotFoundPage'
import { useParams } from "react-router-dom"
import { useHotelFunctions } from '@/utils/firebase'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import HotelProfileForm from '@/components/forms/HotelProfileForm'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

function HotelProfile() {
    const { hotelId } = useParams()
    console.log("hotel id via params >> ", hotelId);
    console.log("hotel id type via params >> ", typeof (hotelId));

    const { getHotelById } = useHotelFunctions()

    const [hotel, setHotel] = useState()
    const getHotel = async () => {
        if (hotelId != "null") {
            const response = await getHotelById(hotelId)
            console.log("response from hotel profile >> ", response);
            setHotel(response?.hotelData)
        } else {
            console.log("HOTEL ID FROM PARAMS IS NULL!!");
            console.log("switching to local hotel id... ");

            const localHotelId = localStorage.getItem("hotelId")
            console.log("localHotelId >> ", localHotelId)
                ;
            const response = await getHotelById(localHotelId)
            console.log("response from hotel profile via local >> ", response);
            setHotel(response?.hotelData)

        }

    }

    useEffect(() => {
        getHotel()
    }, [])

    return (
        <div className="h-full  w-full ">
            <Tabs>
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3">
                        <div className="grid gap-4 sm:grid-cols-2">

                            <Card className="flex items-center justify-center h-full" x-chunk="dashboard-05-chunk-0">
                                <div className="w-full flex flex-col gap-4">
                                    <CardHeader className="pb-3">
                                        <CardTitle>Hotel Profile Management</CardTitle>
                                        <CardDescription className="max-w-lg text-balance leading-relaxed">
                                            Manage your hotel’s profile effectively. Update essential information, enhance your online presence, and ensure your offerings attract the right guests. Streamline your hotel management with easy access to all profile settings.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardFooter className="mt-auto">
                                        <TabsList className="bg-transparent">
                                            <TabsTrigger value="profile-form">
                                                <Button>Manage Profile</Button>
                                            </TabsTrigger>
                                        </TabsList>
                                    </CardFooter>
                                </div>
                            </Card>


                        </div>

                    </div>
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 sm:col-span-3 ">
                        <TabsContent value="profile-form" >
                            <HotelProfileForm />
                        </TabsContent>
                    </div>
                </main>
            </Tabs>
        </div>
    )
}

export default HotelProfile