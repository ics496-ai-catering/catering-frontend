"use client"

import {Dispatch, SetStateAction, useEffect} from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { TimePicker } from "@/components/TimePicker";
import {
  eventTypes,
  services,
  cateringInfoFormSchema,
  CateringInfoFormData
} from "@/lib/schemas/cateringInfoSchema";

interface Props {
  onChangeSection: Dispatch<SetStateAction<string>>,
  formData: CateringInfoFormData | undefined,
  setFormData: Dispatch<SetStateAction<CateringInfoFormData | undefined>>,
}

export default function CateringInfoForm(
  {
    onChangeSection,
    formData,
    setFormData,
  }: Props
) {
  const form = useForm<CateringInfoFormData>({
    resolver: zodResolver(cateringInfoFormSchema),
    defaultValues: formData || {
      partySize: 1,
      budgetPerPerson: 0,
      location: "",
      services: [],
      moreInfo: "",
    },
  })

  const { watch } = form;
  // https://www.react-hook-form.com/api/useform/watch/
  useEffect(() => {
    const subscription = watch((value) => {
      // Value contains the entire form data
      setFormData(value as CateringInfoFormData);
    });
    return () => subscription.unsubscribe();
  }, [watch, setFormData]);

  function onSubmit(values:CateringInfoFormData) {
    console.log(values);
  }
  return (
    <UIForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8">
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
                    {eventTypes.map(e => (
                      <SelectItem value={e.id} key={e.id}>{e.label}</SelectItem>
                    ))}
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
        <div className="flex justify-between gap-4">
          <div className="w-full">
            <FormField
              control={form.control}
              name="dateTime"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date <= new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    What is the date you need catering?
                  </FormDescription>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-center">
            <FormField
              control={form.control}
              name="dateTime"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Time</FormLabel>
                  <FormControl>
                    <TimePicker
                      setDate={field.onChange}
                      date={field.value}
                    />
                  </FormControl>
                  <FormDescription>
                    What is the time you need catering?
                  </FormDescription>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </div>
          <div className="w-full">
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
                  <FormLabel>Services</FormLabel>
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
        <div className="flex justify-between">
          <Button type="button" onClick={() => onChangeSection("create-order")}>{"<-"} Pick Food</Button>
          <Button type="button" onClick={() => onChangeSection("finish")}>Contact Info {"->"}</Button>
        </div>
      </form>
    </UIForm>
  )
}