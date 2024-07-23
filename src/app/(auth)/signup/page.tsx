import SignupForm from "@/app/(auth)/signup/SignupForm";
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
  title: "Sign Up",
};

const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px]">
        <CardHeader className="text-center">
          <CardTitle className="font-bold">Create an Account</CardTitle>
          <CardDescription>
            Join us today to keep track of your tasks and deadlines efficiently.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
        <CardFooter className="text-center">
          <p>
            Already have an account?{" "}
            <a href="/login" className="underline">
              Log in
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
