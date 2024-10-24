import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useAuthenticationFunctions } from "@/utils/firebase";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const { login } = useAuthenticationFunctions();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        console.log(data); // Handle form submission logic here
        try {
            const loginResponse = await login(data?.email, data?.password);
            console.log("loginResponse >> ", loginResponse);
            if (loginResponse?.success) {
                setLoading(false);
                alert("Login successfull");
                navigate("/admin");
            } else {
                console.error("loginResponse >> ", loginResponse);

                alert("error trying to login");
                setLoading(false);
            }
        } catch (error) {
            console.log(`Error in submit handler: ${error}`);
            setLoading(false);
        }
    };

    return (
        <div className="flex w-screen h-screen justify-center items-center bg-gray-100">
            <Card className="w-full max-w-sm shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CardHeader>
                        <CardTitle className="text-2xl text-center font-bold">Hotel Admin Login</CardTitle>
                        <CardDescription className="text-center">
                            Please enter your credentials to access your hotel management dashboard.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <label htmlFor="email" className="font-medium">Hotel Admin Email</label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="hotel-admin@example.com"
                                {...register("email", { required: true })}
                            />
                            {errors.email && (
                                <span className="text-red-500">Email is required</span>
                            )}
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="password" className="font-medium">Password</label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                {...register("password", { required: true })}
                            />
                            {errors.password && (
                                <span className="text-red-500">Password is required</span>
                            )}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" type="submit">
                            {loading ? "Logging in..." : "Log in"}
                        </Button>
                        <p className="text-center mt-4 text-gray-600">
                            Don't have an account?{" "}
                            <a href="/hotel-signup" className="text-blue-600 hover:underline">
                                Sign up here
                            </a>
                        </p>
                    </CardFooter>
                </form>
            </Card>
        </div>

    );
}
