"use client";
import React, { useState } from "react";
import { z } from "zod";
import { Form, FormControl } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CustomFormField from "./CustomFormField";
import SubmitButton from "../ui/SubmitButton";
import { UserFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/patient.actions";
import { FormFieldType } from "./PatientForm";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { GenderOptions } from "@/constants";
import { Label } from "../ui/label";

const RegisterForm = ({ user }: { user: User }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });
  // 2. Define a submit handler.
  async function onSubmit({
    name,
    email,
    phone,
  }: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);
    try {
      const userData = {
        name,
        email,
        phone,
      };

      const user = await createUser(userData);
      if (user) {
        console.log("userData", userData);
        console.log(user);

        router.push(`/patients/${user.$id}/register `);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-12 flex-1"
      >
        <section className=" space-y-4">
          <h1 className="header">Welcome ❤️</h1>
          <p className="text-dark-700"> Let us know more about yourself.</p>
        </section>
        <section className=" space-y-6">
          <div className="mb-9 space-y-1"></div>
          <h2 className="sub-header">Personal Information</h2>
        </section>
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="name"
          label="Full name"
          placeholder="Esraa Fathy"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <div className=" flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="email"
            label="Email Address"
            placeholder="esraafa2411@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
          />
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.PHONE_INPUT}
            name="phone"
            label="Phone Number"
            placeholder="+20 1110496272"
            iconAlt="phone"
          />
        </div>
        <div className=" flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.DATE_PICKER}
            name="birthDate"
            label=" Date of Birth"
            placeholder="esraafa2411@gmail.com"
            iconSrc="/assets/icons/email.svg"
          />
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.SKELETON}
            name="gender"
            label="Gender"
            renderSkeleton={(field) => {
              <FormControl>
                <RadioGroup
                  className="flex h-11 gap-6 xl:justify-between"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  {GenderOptions.map((option) => (
                    <div key={option} className="radio-group">
                      <RadioGroupItem value={option} id={option} />
                      <Label htmlFor={option} className="cursor-point">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>;
            }}
          />
        </div>
        <div className=" flex flex-col gap-6 xl:flex-row"></div>{" "}
        <div className=" flex flex-col gap-6 xl:flex-row"></div>{" "}
        <div className=" flex flex-col gap-6 xl:flex-row"></div>
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default RegisterForm;
