import LoginForm from "@/app/(auth)/login/Loginform";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
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
            Don't have an account?{" "}
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
