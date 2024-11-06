import { Truck, Copy, CreditCard, ListFilter, File } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { auth, useBookingFunctions, useHotelFunctions } from "@/utils/firebase"
import { useEffect, useState } from "react"
import capitalize from "@/utils/Capitalize"
import { Link } from "react-router-dom"



function AdminDashboard() {
    const [hotel, setHotel] = useState()
    const [bookings, setBooking] = useState([])
    const { getHotelByUserId } = useHotelFunctions()
    const { getBookingsForHotel } = useBookingFunctions()
    const user = auth?.currentUser
    console.log("user from admin dashboard > ", user);


    const getUserHotel = async () => {
        const hotelResponse = await getHotelByUserId(user?.uid)
        console.log("hotelResponse from adminDash > ", hotelResponse?.hotelsData[0]);
        setHotel(hotelResponse?.hotelsData[0])
        localStorage.setItem("hotelId", hotelResponse?.hotelsData[0]?.id)
    }

    const getAllBookings = async () => {
        const localId = localStorage.getItem("hotelId")
        const bookingResponse = await getBookingsForHotel(localId)
        console.log("bookingResponse from adminDash > ", bookingResponse);
        setBooking(bookingResponse?.data)

    }


    useEffect(() => {
        getUserHotel()
        getAllBookings()
    }, [])


    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                    <Card
                        className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
                    >
                        <CardHeader className="pb-3">
                            <CardTitle className="text-2xl ">
                                Welcome, to <span className="text-primary font-bold">{capitalize(hotel?.hotelName)}</span>
                            </CardTitle>

                            <CardDescription className="max-w-lg text-balance leading-relaxed">
                                Manage your hotel’s operations seamlessly. Oversee room availability, guest services, and hotel insights to ensure a smooth and exceptional experience for your guests.
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Link to={`/admin/profile/${hotel?.id}`}>
                                <Button>Manage Hotel</Button>
                            </Link>

                        </CardFooter>
                    </Card>

                    <Card x-chunk="dashboard-05-chunk-1">
                        <CardHeader className="pb-2">
                            <CardDescription>This Week</CardDescription>
                            <CardTitle className="text-4xl">$1,329</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">
                                +25% from last week
                            </div>
                        </CardContent>
                        <CardFooter>

                        </CardFooter>
                    </Card>
                    <Card x-chunk="dashboard-05-chunk-2">
                        <CardHeader className="pb-2">
                            <CardDescription>This Month</CardDescription>
                            <CardTitle className="text-4xl">$5,329</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">
                                +10% from last month
                            </div>
                        </CardContent>
                        <CardFooter>

                        </CardFooter>
                    </Card>
                </div>
                <Tabs defaultValue="week">
                    <div className="flex items-center">
                        <TabsList>
                            <TabsTrigger value="week">Week</TabsTrigger>
                            <TabsTrigger value="month">Month</TabsTrigger>
                            <TabsTrigger value="year">Year</TabsTrigger>
                        </TabsList>
                        <div className="ml-auto flex items-center gap-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="h-7 gap-1 text-sm"
                                    >
                                        <ListFilter className="h-3.5 w-3.5" />
                                        <span className="sr-only sm:not-sr-only">Filter</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuCheckboxItem checked>
                                        Fulfilled
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Declined
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Refunded
                                    </DropdownMenuCheckboxItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Button
                                size="sm"
                                variant="outline"
                                className="h-7 gap-1 text-sm"
                            >
                                <File className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only">Export</span>
                            </Button>
                        </div>
                    </div>
                    <TabsContent value="week">
                        <Card x-chunk="dashboard-05-chunk-3">
                            <CardHeader className="px-7">
                                <CardTitle>Bookings</CardTitle>
                                <CardDescription>Recent bookings in your system.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Customer</TableHead>
                                            <TableHead className="hidden sm:table-cell">Room Type</TableHead>
                                            <TableHead className="hidden sm:table-cell">Special Requirements</TableHead>
                                            <TableHead className="hidden md:table-cell">Check-In</TableHead>
                                            <TableHead className="hidden md:table-cell">Check-Out</TableHead>
                                            <TableHead className="hidden sm:table-cell">Adults</TableHead>
                                            <TableHead className="hidden sm:table-cell">Children</TableHead>
                                            <TableHead className="text-right">Created At</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {bookings?.map((booking, index) => (
                                            <TableRow key={index}>
                                                <TableCell>
                                                    <div className="font-medium">{`${booking.firstName} ${booking.lastName}`}</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        {booking.email}
                                                    </div>
                                                    <div className="text-sm text-muted-foreground">
                                                        Phone: {booking.phoneNumber}
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">{booking.roomType}</TableCell>
                                                <TableCell className="hidden sm:table-cell">{booking.specialRequirements}</TableCell>
                                                <TableCell className="hidden md:table-cell">{booking.checkIn}</TableCell>
                                                <TableCell className="hidden md:table-cell">{booking.checkOut}</TableCell>
                                                <TableCell className="hidden sm:table-cell">{booking.adult}</TableCell>
                                                <TableCell className="hidden sm:table-cell">{booking.children}</TableCell>
                                                <TableCell className="text-right">{booking.createdAt}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>

                </Tabs>
            </div>
            <div>
                <Card
                    className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
                >
                    <CardHeader className="flex flex-row items-start bg-muted/50">
                        <div className="grid gap-0.5">
                            <CardTitle className="group flex items-center gap-2 text-lg">
                                Booking Oe31b70H
                                <Button
                                    size="icon"
                                    variant="outline"
                                    className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                                >
                                    <Copy className="h-3 w-3" />
                                    <span className="sr-only">Copy Booking ID</span>
                                </Button>
                            </CardTitle>
                            <CardDescription>Date: November 23, 2023</CardDescription>
                        </div>
                        <div className="ml-auto flex items-center gap-1">
                            <Button size="sm" variant="outline" className="h-8 gap-1">
                                <Truck className="h-3.5 w-3.5" />
                                <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                                    Track Booking
                                </span>
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button size="icon" variant="outline" className="h-8 w-8">

                                        <span className="sr-only">More</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem>Export</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Trash</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 text-sm">
                        <div className="grid gap-3">
                            <div className="font-semibold">Bookings Details</div>
                            <ul className="grid gap-3">
                                <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">
                                        Glimmer Lamps x <span>2</span>
                                    </span>
                                    <span>$250.00</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">
                                        Aqua Filters x <span>1</span>
                                    </span>
                                    <span>$49.00</span>
                                </li>
                            </ul>
                            <Separator className="my-2" />
                            <ul className="grid gap-3">
                                <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span>$299.00</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Shipping</span>
                                    <span>$5.00</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Tax</span>
                                    <span>$25.00</span>
                                </li>
                                <li className="flex items-center justify-between font-semibold">
                                    <span className="text-muted-foreground">Total</span>
                                    <span>$329.00</span>
                                </li>
                            </ul>
                        </div>
                        <Separator className="my-4" />
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <div className="font-semibold">Shipping Information</div>
                                <address className="grid gap-0.5 not-italic text-muted-foreground">
                                    <span>Liam Johnson</span>
                                    <span>1234 Main St.</span>
                                    <span>Anytown, CA 12345</span>
                                </address>
                            </div>
                            <div className="grid auto-rows-max gap-3">
                                <div className="font-semibold">Billing Information</div>
                                <div className="text-muted-foreground">
                                    Same as shipping address
                                </div>
                            </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="grid gap-3">
                            <div className="font-semibold">Customer Information</div>
                            <dl className="grid gap-3">
                                <div className="flex items-center justify-between">
                                    <dt className="text-muted-foreground">Customer</dt>
                                    <dd>Liam Johnson</dd>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-muted-foreground">Email</dt>
                                    <dd>
                                        <a href="mailto:">liam@acme.com</a>
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-muted-foreground">Phone</dt>
                                    <dd>
                                        <a href="tel:">+1 234 567 890</a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <Separator className="my-4" />
                        <div className="grid gap-3">
                            <div className="font-semibold">Payment Information</div>
                            <dl className="grid gap-3">
                                <div className="flex items-center justify-between">
                                    <dt className="flex items-center gap-1 text-muted-foreground">
                                        <CreditCard className="h-4 w-4" />
                                        Visa
                                    </dt>
                                    <dd>**** **** **** 4532</dd>
                                </div>
                            </dl>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                        <div className="text-xs text-muted-foreground">
                            Updated <time dateTime="2023-11-23">November 23, 2023</time>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </main>
    )
}

export default AdminDashboard