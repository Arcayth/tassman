"use client";
import React from "react";
import { TableBody, TableCell, TableRow } from "./ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MoreHorizontal } from "lucide-react";
import { Task } from "@prisma/client";
import { deleteTask } from "@/app/(main)/(mainLayout)/tasks/action";
import { AdvancedColorfulBadges } from "./AdvancedColorfulBadges";

const TaskTableContent = ({ tasks }: { tasks: Task[] }) => {
  return (
    <TableBody>
      {tasks.map((item) => (
        <TableRow key={item.id}>
          <TableCell className="font-medium">{item.taskName}</TableCell>
          <TableCell>
            {item.status === "COMPLETED" ? (
              <AdvancedColorfulBadges color="green">Completed</AdvancedColorfulBadges>
            ) : item.status === "IN_PROGRESS" ? (
              <AdvancedColorfulBadges color="orange">In Progress</AdvancedColorfulBadges>
            ) : (
              <AdvancedColorfulBadges color="red">Not Started</AdvancedColorfulBadges>
            )}
          </TableCell>
          <TableCell className="hidden md:table-cell">
            {item.startingTime.toDateString()}
          </TableCell>
          <TableCell className="hidden md:table-cell">
            {item.deadline.toDateString()}
          </TableCell>
          <TableCell className="hidden md:table-cell">
            {item.priority === "HIGH" ? (
              <AdvancedColorfulBadges color="red">High</AdvancedColorfulBadges>
            ) : item.priority === "MEDIUM" ? (
              <AdvancedColorfulBadges color="orange">Medium</AdvancedColorfulBadges>
            ) : (
              <AdvancedColorfulBadges color="green">Low</AdvancedColorfulBadges>
            )}
          </TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <Button variant={"ghost"}>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                </Button>
                <Button onClick={() => deleteTask(item.id)} variant={"ghost"}>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TaskTableContent;
