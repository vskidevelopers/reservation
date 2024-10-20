import { Outlet } from "react-router-dom"

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";


import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import AddRoomForm from "@/components/forms/AddRoomForm";



function RoomManagement() {
    return (
        <div className="h-full  w-full ">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 ">
                <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                    <div className="grid gap-4 sm:grid-cols-2 ">
                        <Card className="flex items-center justify-center h-full" x-chunk="dashboard-05-chunk-0">
                            <div className="w-full flex flex-col gap-4">
                                <CardHeader className="pb-3">
                                    <CardTitle>All Rooms</CardTitle>
                                    <CardDescription className="max-w-lg text-balance leading-relaxed ">
                                        Discover a wide range of accommodations tailored to your needs. Whether you're looking for luxury, comfort, or affordability, our diverse selection of rooms ensures you find the perfect stay for your next getaway.
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter className="mt-auto">
                                    <Button>View All Rooms</Button>
                                </CardFooter>
                            </div>
                        </Card>

                        <div className="grid gap-4 sm:grid-cols-2 ">
                            <Dialog>
                                <Card x-chunk="dashboard-05-chunk-1">
                                    <CardHeader className="pb-2">
                                        <CardDescription> Single Beds</CardDescription>
                                        <CardTitle className="text-4xl"> 11 </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xs text-muted-foreground">
                                            🛁 Hot Shower
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <DialogTrigger asChild>
                                            <Button>Add Single Room</Button>
                                        </DialogTrigger>
                                    </CardFooter>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle className="text-center py-9">
                                                Add New Single-Bed Room Form
                                            </DialogTitle>
                                        </DialogHeader>
                                        <AddRoomForm roomType="Single" />
                                        {/* Add ew Single-Bed Room Form will be used here */}

                                    </DialogContent>
                                </Card>
                            </Dialog>


                            <Dialog>
                                <Card x-chunk="dashboard-05-chunk-1">
                                    <CardHeader className="pb-2">
                                        <CardDescription> Double Beds</CardDescription>
                                        <CardTitle className="text-4xl"> 5 </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xs text-muted-foreground">
                                            🛁 Hot Shower
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <DialogTrigger asChild>
                                            <Button>Add Double Room</Button>
                                        </DialogTrigger>
                                    </CardFooter>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle className="text-center py-9">
                                                Add New Double-Bed Room Form
                                            </DialogTitle>
                                        </DialogHeader>
                                        {/* Add ew Double-Bed Room Form will be used here */}

                                        <AddRoomForm roomType="Double" />

                                    </DialogContent>
                                </Card>
                            </Dialog>

                            <Dialog>
                                <Card x-chunk="dashboard-05-chunk-1">
                                    <CardHeader className="pb-2">
                                        <CardDescription> Lux Rooms</CardDescription>
                                        <CardTitle className="text-4xl"> 2 </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xs text-muted-foreground">
                                            🛁 Hot Shower
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <DialogTrigger asChild>
                                            <Button>Add Lux Room</Button>
                                        </DialogTrigger>
                                    </CardFooter>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle className="text-center py-9">
                                                Add New Lux Room Form
                                            </DialogTitle>
                                        </DialogHeader>
                                        {/* Add new Lux Room Form will be used here */}

                                        <AddRoomForm roomType="lux" />

                                    </DialogContent>
                                </Card>
                            </Dialog>

                            <Dialog>
                                <Card x-chunk="dashboard-05-chunk-1">
                                    <CardHeader className="pb-2">
                                        <CardDescription> Family Rooms</CardDescription>
                                        <CardTitle className="text-4xl"> 4 </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xs text-muted-foreground">
                                            🛁 Hot Shower
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <DialogTrigger asChild>
                                            <Button>Add Family Room</Button>
                                        </DialogTrigger>
                                    </CardFooter>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle className="text-center py-9">
                                                Add New Family-Bed Room Form
                                            </DialogTitle>
                                        </DialogHeader>
                                        {/* Add ew Family-Bed Room Form will be used here */}

                                        <AddRoomForm roomType="family" />

                                    </DialogContent>
                                </Card>
                            </Dialog>

                        </div>




                    </div>
                </div>
                <div>

                </div>
            </main>
            <br />
            <hr />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default RoomManagement