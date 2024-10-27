import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ListFilter, File } from 'lucide-react';
import { useHotelFunctions } from '@/utils/firebase';


function HotelsList() {
    const { getAllHotels, verifyHotelById } = useHotelFunctions()
    const [hotels, setHotels] = useState([])

    const fetchHotels = async () => {
        try {
            const hotelResponse = await getAllHotels();

            if (hotelResponse?.success) {
                console.log("hotelResponse >> ", hotelResponse);

                setHotels(hotelResponse?.data);
            } else {
                setError(hotelResponse?.message);  // Set error message if no hotels exist
            }
        } catch (error) {
            console.error("Error fetching hotels:", error);
            setError("An error occurred while fetching hotels.");
        }
    };

    useEffect(() => {
        fetchHotels();
    }, []);

    const handleApprove = async (id) => {
        try {
            const response = await verifyHotelById(id);

            if (response?.success) {
                console.log(response.message); // Successfully verified hotel message
                // Here you can add any additional code, e.g., updating state or UI feedback
                alert(`Hotel #${id} has been successfully approved`)
            } else {
                console.error(response.message); // Failed verification message
                alert(`Hotel #${id} has failed to approve`)
            }
        } catch (error) {
            console.error(`Error in handleApprove function:`, error.message);
            // Optionally, you can show a user-friendly message or update the UI here
            alert(`Hotel #${id} has failed to approve`)
        }
    };


    const handleReject = async (id) => {
        try {
            const response = await rejectHotelById(id);

            if (response?.success) {
                console.log(response.message); // Successfully verified hotel message
                // Here you can add any additional code, e.g., updating state or UI feedback
                alert(`Hotel #${id} has been successfully rejected`)
            } else {
                console.error(response.message); // Failed verification message
                alert(`Hotel #${id} has failed to reject`)
            }
        } catch (error) {
            console.error(`Error in handleReject function:`, error.message);
            // Optionally, you can show a user-friendly message or update the UI here
            alert(`Hotel #${id} has failed to reject`)
        }
    };

    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="sm:col-span-2">
                        <CardHeader className="pb-3">
                            <CardTitle>All Hotels</CardTitle>
                            <CardDescription className="max-w-lg text-balance leading-relaxed">
                                Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful Analysis.
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button>Create New Hotel Record</Button>
                        </CardFooter>
                    </Card>
                </div>

                <Tabs defaultValue="all">
                    <div className="flex items-center">
                        <TabsList>
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="pending">Pending</TabsTrigger>
                            <TabsTrigger value="approved">Approved</TabsTrigger>
                        </TabsList>
                        <div className="ml-auto flex items-center gap-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
                                        <ListFilter className="h-3.5 w-3.5" />
                                        <span className="sr-only sm:not-sr-only">Filter</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuCheckboxItem>Pending</DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>Approved</DropdownMenuCheckboxItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                                <File className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only">Export</span>
                            </Button>
                        </div>
                    </div>

                    <TabsContent value="all">
                        <Card>
                            <CardHeader className="px-7">
                                <CardTitle>Hotels</CardTitle>
                                <CardDescription>Recent hotels from the database.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Hotel Name</TableHead>
                                            <TableHead>Email</TableHead>
                                            <TableHead>Location</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {hotels?.map((hotel) => (
                                            <TableRow key={hotel?.id}>
                                                <TableCell>{hotel.hotelName}</TableCell>
                                                <TableCell>{hotel.email}</TableCell>
                                                <TableCell>{hotel.address}</TableCell>
                                                <TableCell>
                                                    <Badge variant={hotel.verified ? 'secondary' : 'outline'}>
                                                        {hotel.verified ? 'Verified' : 'Pending'}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        onClick={() => handleApprove(hotel.id)}
                                                        disabled={hotel.verified}
                                                    >
                                                        Approve
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        onClick={() => handleReject(hotel.id)}
                                                        className="ml-2"
                                                        disabled={!hotel.verified}
                                                    >
                                                        Reject
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    );
}

export default HotelsList;
