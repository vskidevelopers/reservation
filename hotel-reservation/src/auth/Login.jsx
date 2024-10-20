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
        <div className="flex w-screen h-screen justify-center items-center">
            <Card className="w-full max-w-sm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription>
                            Enter your email below to login to your account.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <label htmlFor="email">Email</label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                {...register("email", { required: true })}
                            />
                            {errors.email && (
                                <span className="text-red-500">This field is required</span>
                            )}
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="password">Password</label>
                            <Input
                                id="password"
                                type="password"
                                {...register("password", { required: true })}
                            />
                            {errors.password && (
                                <span className="text-red-500">This field is required</span>
                            )}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" type="submit">
                            {loading ? "logging in ..." : "Log in"}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
