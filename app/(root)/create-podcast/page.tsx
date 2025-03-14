"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Select, SelectItem } from "@/components/ui/select";
import { SelectContent, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import GeneratePodcast from "@/components/GeneratePodcast";
import GenerateThumbnail from "@/components/GenerateThumbnail";
import { Loader } from "lucide-react";
import { Id } from "@/convex/_generated/dataModel";

const voiceCategories = ['alloy', 'shimmer', 'nova', 'echo', 'fable', 'onyx'];

const formSchema = z.object({
  podcastTitle: z.string().min(2),
  podcastDescription: z.string().min(2),
  voiceType: z.string().min(2),
})


const CreatePodcast = () => {


  const [ voiceType, setVoiceType ] = useState<string>("");
  const [ isSubmitting, setIsSubmitting ] = useState<boolean>(false);

  const [ imagePrompt, setImagePrompt ] = useState<string>("");
  const [ imageUrl, setImageUrl ] = useState<string>("");
  const [ voicePrompt, setVoicePrompt ] = useState<string>("");
  const [ audioUrl, setAudioUrl ] = useState('');
  const [ audioDuration, setAudioDuration ] = useState<number>(0);
  const [ audioStorageId, setAudioStorageId ] = useState<Id<"_storage"> | null >(null);
  const [ imageStorageid, setImageStorageId ] = useState<Id<"_storage"> | null >(null);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      podcastTitle: "",
      podcastDescription: "",
      voiceType: '',
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {

  }

  return (
    <section className="mt-8 flex flex-col gap-5">
      <h1 className="text-20 font-bold text-white-1">Create Podcast </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 flex flex-col w-full pb-10">
          <div className="flex flex-col gap-[30px] border-b border-black-5 pb-6">
            
            <FormField
              control={form.control}
              name="podcastTitle"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2.5">
                  <FormLabel className="text-16 font-bold text-white-1">Username</FormLabel>
                  <FormControl>
                    <Input className="input-class focus-visible:ring-orange-1 text-white-1" placeholder="Podcast" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage className="text-white-1" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="voiceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-16 text-white-1"> Select Voice Type </FormLabel>
                  <Select onValueChange={ value => setVoiceType(value) } defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className={cn("text-gray-1 p-2 border-1 border-white-1 hover:border-orange-1 rounded-lg capitalize", {
                        "text-white-1": voiceType
                      })}>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white-1 rounded-lg p-1">
                      {
                        voiceCategories.map( cat => <SelectItem key={cat} value={cat} className="capitalize focus:bg-orange-1"> {cat} </SelectItem> )
                      }
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    You can manage email addresses in your{" "}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
                control={form.control}
                name="podcastDescription"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2.5">
                    <FormLabel className="text-16 font-bold text-white-1"> Description </FormLabel>
                    <FormControl>
                      <Textarea rows={7} className="input-class focus-visible:ring-orange-1 text-white-1" placeholder="Write a short podcast Description" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is description for your podcast
                    </FormDescription>
                    <FormMessage className="text-white-1" />
                  </FormItem>
                )}
              />
            
          </div>
          <div className="flex flex-col pt-2">
              <GeneratePodcast
                // voiceType={ voiceType }
                audioUrl={ audioUrl }
                voicePrompt = {voicePrompt}
                setAudioDuration = { setAudioDuration}
                setAudioUrl = { setAudioUrl }
                setVoicePrompt = { setVoicePrompt }
                setAudioStorageId = { setAudioStorageId }
                />

              <GenerateThumbnail />
              <div className="mt-10 w-full">
                  <Button type="submit" className="w-full bg-gray-1 hover:bg-orange-1 transition-1">
                    { isSubmitting ? (
                      <>
                        <Loader size={20} className="animate-spin mr-2" />
                        Submititing....
                      </>
                    ) : "Submit"}
                  </Button>
              </div>
            </div>
        </form>
      </Form>
    </section>
  )
}

export default CreatePodcast;