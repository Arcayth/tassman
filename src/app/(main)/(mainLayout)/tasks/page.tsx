import TaskTable from "@/components/TasksTable";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle } from "lucide-react";
import React from "react";
import AddProject from "./AddProject";

const page = () => {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Inactive</TabsTrigger>
            <TabsTrigger value="archived" className="hidden sm:flex">
              Completed
            </TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <Drawer>
              <DrawerTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Task
                  </span>
                </Button>
              </DrawerTrigger>
              <AddProject />
            </Drawer>
          </div>
        </div>
        <TaskTable />
      </Tabs>
    </main>
  );
};

export default page;
