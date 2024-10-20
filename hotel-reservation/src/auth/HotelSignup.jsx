import { useForm } from "react-hook-form";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useAuthenticationFunctions } from "@/utils/firebase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const { createNewUser } = useAuthenticationFunctions(); // Ensure you have a signUp function in your auth functions
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        console.log(data); // Handle form submission logic here
        try {
            const signUpResponse = await createNewUser(data?.email, data?.password);
            if (signUpResponse?.success) {
                setLoading(false);
                alert("Sign up successful");
                navigate("/admin");
            } else {
                alert("Error trying to sign up");
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
                        <CardTitle className="text-2xl">Sign Up</CardTitle>
                        <CardDescription>
                            Create an account by filling out the details below.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        {/* Name Field */}
                        <div className="grid gap-2">
                            <label htmlFor="name">Name</label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                {...register("name", { required: true })}
                            />
                            {errors.name && (
                                <span className="text-red-500">This field is required</span>
                            )}
                        </div>

                        {/* Email Field */}
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

                        {/* Password Field */}
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
                            {loading ? "Signing up ..." : "Sign Up"}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
