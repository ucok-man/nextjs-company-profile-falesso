"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(2).max(500),
});

export default function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (_values: z.infer<typeof formSchema>) => {
    toast({
      title: `Message was sended`,
      description: "Keep eye on your email 😄",
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full max-w-xl mx-auto"
      >
        <div className="flex gap-x-6 max-sm:gap-x-4 w-full justify-between">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="space-y-0 text-left w-full">
                <FormLabel className="text-base">
                  <div className="flex flex-col">
                    <span>Firstname</span>
                    <span className="h-2"></span>
                  </div>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    {...field}
                    style={{
                      fontSize: "1rem",
                    }}
                  />
                </FormControl>
                <FormDescription>(required)</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="space-y-0 text-left w-full">
                <FormLabel className="text-base">
                  <div className="flex flex-col">
                    <span>Lastname</span>
                    <span className="h-2"></span>
                  </div>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    {...field}
                    style={{
                      fontSize: "1rem",
                    }}
                  />
                </FormControl>
                <FormDescription>(required)</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-0 text-left">
              <FormLabel className="text-base">
                <div className="flex flex-col">
                  <span>Email</span>
                  <span className="h-2"></span>
                </div>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  style={{
                    fontSize: "1rem",
                  }}
                />
              </FormControl>
              <FormDescription>(required)</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-0 text-left">
              <FormLabel className="text-base">
                <div className="flex flex-col">
                  <span>Message</span>
                  <span className="h-2"></span>
                </div>
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={5}
                  className="max-h-[300px]"
                  style={{
                    fontSize: "1rem",
                  }}
                />
              </FormControl>
              <FormDescription>(required)</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full mt-6 text-base uppercase">
          Submit
        </Button>
      </form>
    </Form>
  );
}
