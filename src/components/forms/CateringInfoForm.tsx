"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const services = [
  {
    id: "tents",
    label: "Tents",
  },
  {
    id: "serving-staff",
    label: "Serving Staff",
  },
  {
    id: "entertainment",
    label: "Entertainment",
  },
  {
    id: "delivery",
    label: "Delivery",
  },
] as const;

// TODO: properly represent date, time, and services in schema
const formSchema = z.object({
  eventType: z.enum(["wedding", "birthday", "film-set", "party", "other"]),
  // z.coerce needed to convert input string to number for z
  partySize: z.coerce.number().min(1,{
    message: "Party size must be at least 1."
  }),
  date: z.string(),
  time: z.string(),
  budgetPerPerson: z.coerce.number().min(0, {
    message: "Budget must be at least 0."
  }),
  location: z.string(),
  services: z.array(z.string()),
  moreInfo: z.string(),
})

export default function CateringInfoForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      partySize: 1,
      date: "",
      time: "",
      budgetPerPerson: 0,
      location: "",
      services: [],
      moreInfo: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  // TODO: make proper date/time pickers
  return (
    <UIForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="eventType"
            render={({field}) => (
              <FormItem>
                <FormLabel>Event Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select Event Type"/>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="birthday">Birthday</SelectItem>
                    <SelectItem value="film-set">Film Set</SelectItem>
                    <SelectItem value="party">Party</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  What type of event do you need catering for?
                </FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="partySize"
            render={({field}) => (
              <FormItem>
                <FormLabel>Party Size</FormLabel>
                <FormControl>
                  <Input className="bg-white" type="number" placeholder="Number of people attending" {...field} />
                </FormControl>
                <FormDescription>
                  How many people are you ordering for?
                </FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="date"
            render={({field}) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input className="bg-white" type="text" placeholder="mm/dd/yyyy" {...field} />
                </FormControl>
                <FormDescription>
                  What is the date you need catering?
                </FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({field}) => (
              <FormItem>
                <FormLabel>Time</FormLabel>
                <FormControl>
                  <Input className="bg-white" type="text" placeholder="hh:mm:ss AM/PM" {...field} />
                </FormControl>
                <FormDescription>
                  What is the time you need catering?
                </FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="budgetPerPerson"
            render={({field}) => (
              <FormItem>
                <FormLabel>Budget Per Person</FormLabel>
                <FormControl>
                  <Input className="bg-white" type="number" placeholder="Select Budget" {...field} />
                </FormControl>
                <FormDescription>
                  What is your tentative budget?
                </FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="location"
            render={({field}) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input className="bg-white" type="text" placeholder="Enter an Address" {...field} />
                </FormControl>
                <FormDescription>
                  Address of your event for delivery purposes
                </FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="services"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Services</FormLabel>
                  <FormDescription>
                    Do you need any services other than food?
                  </FormDescription>
                </div>
                {services.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="services"
                    render={({field}) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
                <FormMessage/>
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="moreInfo"
            render={({field}) => (
              <FormItem>
                <FormLabel>More Info</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder=""
                    className="resize-none bg-white h-24"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Tell us about the event you need catering for, food allergies, delivery specifications, concerns
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </UIForm>
  )
}