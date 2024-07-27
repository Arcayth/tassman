import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TabsContent } from "@/components/ui/tabs";
import TaskTableContent from "./TaskTableContent";
import prisma from "@/lib/prisma";
import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";

export default async function TaskTable() {
  const session = await validateRequest();

  if (!session.user) redirect("/login");

  const tasks = await prisma.task.findMany({
    where: {
      userId: session.user.id,
    },
  });
  return (
    <>
      <TabsContent value="all">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
            <CardDescription>
              Manage your tasks and stay organized.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Task Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Start Date
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Deadline
                  </TableHead>
                  <TableHead className="hidden md:table-cell">Priority</TableHead>
                  <TableHead>
                    <span className="">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TaskTableContent tasks={tasks}/>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </>
  );
}
