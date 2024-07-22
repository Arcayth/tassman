import LoginForm from "@/components/Loginform";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Car } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
};

const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px]">
        <CardHeader className="text-center">
          <CardTitle className="font-bold">Login To Your Account</CardTitle>
          <CardDescription>
            Login to keep track of your tasks and deadlines efficiently.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="text-center">
          <p>
            Don&apos;t have an account?{" "}
            <a href="/signup" className="underline">
              Sign Up 
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
