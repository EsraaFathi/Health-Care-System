import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// const Register = async ({ params: { userId } }: SearchParamProps) => {
const Register = async ({ params }: { params: { userId: string } }) => {
  // Destructure userId after ensuring params is awaited
  const { userId } = await params;
  // console.log(userId);

  const user = await getUser(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className=" remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm user={user} />

          <div className=" text-14-regular mt-10 flex justify-between ">
            <p className="text-dark-600 justify-items-end xl:text">
              © 2024 CarePlus
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/register-img.png"
        alt="patien"
        height={1000}
        width={1000}
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
