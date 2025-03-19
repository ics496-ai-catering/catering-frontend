"use client"

import { Dispatch, SetStateAction, useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form as UIForm,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import contactInfoSchema, {
  ContactInfoFormData
} from "@/lib/schemas/contactInfoSchema";

interface Props {
  onChangeSection: Dispatch<SetStateAction<string>>,
  formData: ContactInfoFormData | undefined,
  setFormData: Dispatch<SetStateAction<ContactInfoFormData | undefined>>,
}

export default function CateringInfoForm(
  {
    onChangeSection,
    formData,
    setFormData,
  }: Props
) {
  const form = useForm<ContactInfoFormData>({
    resolver: zodResolver(contactInfoSchema),
    defaultValues: formData || {
      fullName: "",
      phoneNumber: "",
      email: "",
    },
  })

  const { watch } = form;
  // https://www.react-hook-form.com/api/useform/watch/
  useEffect(() => {
    const subscription = watch((value) => {
      // Value contains the entire form data
      setFormData(value as ContactInfoFormData);
    });
    return () => subscription.unsubscribe();
  }, [watch, setFormData]);

  function onSubmit(values: ContactInfoFormData) {
    console.log(values);
  }
  return (
    <UIForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8">
        <div className="space-y-4">
          <FormDescription>How can we contact you?</FormDescription>
          <FormField
            control={form.control}
            name="fullName"
            render={({field}) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input className="bg-white" placeholder="First, last" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({field}) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input className="bg-white" placeholder="xxx-xxx-xxxx" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input className="bg-white" placeholder="Email address" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-between">
          <Button type="button" onClick={() => onChangeSection("catering-info")}>{"<-"} Basic Info</Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </UIForm>
  )
}