"use client";

import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { XIcon, CalendarDaysIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import React, { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { taskSchema, taskValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createTask } from "./action";

export default function AddProject() {
  const form = useForm<taskValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      taskName: "",
      startingTime: new Date(),
      deadline: new Date(),
      status: "NOT_STARTED",
      priority: "LOW",
    },
  });

  async function onSubmit(values: taskValues) {
    await createTask(values);
    console.log(values);
  }

  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Add New Task</DrawerTitle>
        <DrawerClose>
          <XIcon className="h-5 w-5" />
        </DrawerClose>
      </DrawerHeader>
      <Form {...form}>
        <div className="mx-3">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space- grid gap-4"
          >
            <FormField
              control={form.control}
              name="taskName"
              render={({ field }) => (
                <div className="grid gap-2">
                  <FormItem>
                    <FormLabel>Task name</FormLabel>
                    <FormControl>
                      <Input placeholder="Buy milk." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="startingTime"
                render={({ field }) => (
                  <div className="grid gap-2">
                    <FormItem>
                      <FormLabel>Starting time</FormLabel>
                      <FormControl>
                        <div className="grid gap-2">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="w-full justify-start font-normal"
                              >
                                <CalendarDaysIcon className="mr-2 h-4 w-4" />
                                {field.value ? (
                                  <span>{field.value.toDateString()}</span>
                                ) : (
                                  <span>Select date</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="deadline"
                render={({ field }) => (
                  <div className="grid gap-2">
                    <FormItem>
                      <FormLabel>Deadline</FormLabel>
                      <FormControl>
                        <div className="grid gap-2">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="w-full justify-start font-normal"
                              >
                                <CalendarDaysIcon className="mr-2 h-4 w-4" />
                                {field.value ? (
                                  <span>{field.value.toDateString()}</span>
                                ) : (
                                  <span>Select date</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <div className="grid gap-2">
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="NOT_STARTED">
                              Not Started
                            </SelectItem>
                            <SelectItem value="IN_PROGRESS">
                              In Progress
                            </SelectItem>
                            <SelectItem value="COMPLETED">Completed</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <div className="grid gap-2">
                    <FormItem>
                      <FormLabel>Priority</FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="LOW">Low</SelectItem>
                            <SelectItem value="MEDIUM">Medium</SelectItem>
                            <SelectItem value="HIGH">High</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>
                )}
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </Form>
    </DrawerContent>
  );
}
