

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
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Badge } from "@/components/ui/badge"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import AddRoomForm from "@/components/forms/AddRoomForm";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"



function RoomManagement() {
    return (
        <div className="h-full  w-full ">
            <Tabs default-value="single">
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 ">
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 sm:col-span-2">
                        <div className="grid gap-4 sm:grid-cols-2 ">
                            <Dialog>
                                <Card className="flex items-center justify-center h-full" x-chunk="dashboard-05-chunk-0">
                                    <div className="w-full flex flex-col gap-4">
                                        <CardHeader className="pb-3">
                                            <CardTitle>All Rooms</CardTitle>
                                            <CardDescription className="max-w-lg text-balance leading-relaxed ">
                                                Discover a wide range of accommodations tailored to your needs. Whether you're looking for luxury, comfort, or affordability, our diverse selection of rooms ensures you find the perfect stay for your next getaway.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardFooter className="mt-auto">

                                            <DialogTrigger asChild>
                                                <Button>Add A Room</Button>
                                            </DialogTrigger>
                                        </CardFooter>

                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle className="text-center py-9">
                                                    Add A Room
                                                </DialogTitle>
                                            </DialogHeader>
                                            <AddRoomForm roomType="Single" />
                                            {/* Add ew Single-Bed Room Form will be used here */}

                                        </DialogContent>
                                    </div>
                                </Card>
                            </Dialog>


                            <div className="grid gap-4 sm:grid-cols-2 ">
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
                                        <TabsList className="bg-transparent">
                                            <TabsTrigger value="single" >
                                                <Button>View Room</Button>

                                            </TabsTrigger>
                                        </TabsList>
                                    </CardFooter>

                                </Card>


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
                                        <TabsList className="bg-transparent">
                                            <TabsTrigger value="double">
                                                <Button>View Room</Button>
                                            </TabsTrigger>
                                        </TabsList>
                                    </CardFooter>

                                </Card>



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
                                        <TabsList className="bg-transparent">
                                            <TabsTrigger value="lux">
                                                <Button>View Room</Button>
                                            </TabsTrigger>
                                        </TabsList>
                                    </CardFooter>

                                </Card>


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
                                        <TabsList className="bg-transparent">
                                            <TabsTrigger value="family">
                                                <Button>View Room</Button>
                                            </TabsTrigger>
                                        </TabsList>
                                    </CardFooter>

                                </Card>




                            </div>




                        </div>
                    </div>

                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 sm:col-span-2">
                        <TabsContent value="single">
                            <Card x-chunk="dashboard-05-chunk-3">
                                <CardHeader className="px-7">
                                    <CardTitle>Bookings</CardTitle>
                                    <CardDescription>
                                        Recent orders from your store.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Customer</TableHead>
                                                <TableHead className="hidden sm:table-cell">
                                                    Type
                                                </TableHead>
                                                <TableHead className="hidden sm:table-cell">
                                                    Status
                                                </TableHead>
                                                <TableHead className="hidden md:table-cell">
                                                    Date
                                                </TableHead>
                                                <TableHead className="text-right">Amount</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow className="bg-accent">
                                                <TableCell>
                                                    <div className="font-medium">Liam Johnson</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        liam@example.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    Sale
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    <Badge className="text-xs" variant="secondary">
                                                        Fulfilled
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-06-23
                                                </TableCell>
                                                <TableCell className="text-right">$250.00</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Olivia Smith</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        olivia@example.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    Refund
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    <Badge className="text-xs" variant="outline">
                                                        Declined
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-06-24
                                                </TableCell>
                                                <TableCell className="text-right">$150.00</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Noah Williams</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        noah@example.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    Subscription
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    <Badge className="text-xs" variant="secondary">
                                                        Fulfilled
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-06-25
                                                </TableCell>
                                                <TableCell className="text-right">$350.00</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Emma Brown</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        emma@example.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    Sale
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    <Badge className="text-xs" variant="secondary">
                                                        Fulfilled
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-06-26
                                                </TableCell>
                                                <TableCell className="text-right">$450.00</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Liam Johnson</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        liam@example.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    Sale
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    <Badge className="text-xs" variant="secondary">
                                                        Fulfilled
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-06-23
                                                </TableCell>
                                                <TableCell className="text-right">$250.00</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Liam Johnson</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        liam@example.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    Sale
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    <Badge className="text-xs" variant="secondary">
                                                        Fulfilled
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-06-23
                                                </TableCell>
                                                <TableCell className="text-right">$250.00</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Olivia Smith</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        olivia@example.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    Refund
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    <Badge className="text-xs" variant="outline">
                                                        Declined
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-06-24
                                                </TableCell>
                                                <TableCell className="text-right">$150.00</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Emma Brown</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        emma@example.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    Sale
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    <Badge className="text-xs" variant="secondary">
                                                        Fulfilled
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-06-26
                                                </TableCell>
                                                <TableCell className="text-right">$450.00</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="double">
                            <Card x-chunk="dashboard-05-chunk-3">
                                <CardHeader className="px-7">
                                    <CardTitle>Doubles</CardTitle>
                                    <CardDescription>
                                        Recent orders from your store.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Customer</TableHead>
                                                <TableHead className="hidden sm:table-cell">
                                                    Type
                                                </TableHead>
                                                <TableHead className="hidden sm:table-cell">
                                                    Status
                                                </TableHead>
                                                <TableHead className="hidden md:table-cell">
                                                    Date
                                                </TableHead>
                                                <TableHead className="text-right">Amount</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow className="bg-accent">
                                                <TableCell>
                                                    <div className="font-medium">Liam Johnson</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        liam@example.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    Sale
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    <Badge className="text-xs" variant="secondary">
                                                        Fulfilled
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-06-23
                                                </TableCell>
                                                <TableCell className="text-right">$250.00</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Olivia Smith</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        olivia@example.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    Refund
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    <Badge className="text-xs" variant="outline">
                                                        Declined
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-06-24
                                                </TableCell>
                                                <TableCell className="text-right">$150.00</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Noah Williams</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        noah@example.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    Subscription
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    <Badge className="text-xs" variant="secondary">
                                                        Fulfilled
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-06-25
                                                </TableCell>
                                                <TableCell className="text-right">$350.00</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Emma Brown</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        emma@example.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    Sale
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    <Badge className="text-xs" variant="secondary">
                                                        Fulfilled
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-06-26
                                                </TableCell>
                                                <TableCell className="text-right">$450.00</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Liam Johnson</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        liam@example.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    Sale
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    <Badge className="text-xs" variant="secondary">
                                                        Fulfilled
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-06-23
                                                </TableCell>
                                                <TableCell className="text-right">$250.00</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Liam Johnson</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        liam@example.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    Sale
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    <Badge className="text-xs" variant="secondary">
                                                        Fulfilled
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-06-23
                                                </TableCell>
                                                <TableCell className="text-right">$250.00</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Olivia Smith</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        olivia@example.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    Refund
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    <Badge className="text-xs" variant="outline">
                                                        Declined
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-06-24
                                                </TableCell>
                                                <TableCell className="text-right">$150.00</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Emma Brown</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        emma@example.com
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    Sale
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    <Badge className="text-xs" variant="secondary">
                                                        Fulfilled
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-06-26
                                                </TableCell>
                                                <TableCell className="text-right">$450.00</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </div>
                </main>
            </Tabs>
        </div>
    )
}

export default RoomManagement