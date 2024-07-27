import React from "react";
import { TableBody, TableCell, TableRow } from "./ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MoreHorizontal } from "lucide-react";
import { Priority, Status  } from "@prisma/client";

interface TaskTableContentProps {

  tasks: {

    id: string;

    userId: string;

    taskName: string;

    startingTime: Date;

    deadline: Date;

    status: Status;

    priority: Priority;

  }[];

}

const TaskTableContent: React.FC<TaskTableContentProps>= async ({tasks}) => {

  return (
    <TableBody>
      {tasks.map((item, idx) => (
        <TableRow key={idx}>
          <TableCell className="font-medium">{item.taskName}</TableCell>
          <TableCell>
            {item.status === "COMPLETED" ? (
              <Badge variant="success">{item.status}</Badge>
            ) : item.status === "IN_PROGRESS" ? (
              <Badge variant="orange">{item.status}</Badge>
            ) : (
              <Badge variant="destructive">{item.status}</Badge>
            )}

          </TableCell>
          <TableCell className="hidden md:table-cell">{item.startingTime.toDateString()}</TableCell>
          <TableCell className="hidden md:table-cell">
            {item.deadline.toDateString()}
          </TableCell>
          <TableCell className="hidden md:table-cell">
            {item.priority === "HIGH" ? (
              <Badge variant="destructive">{item.priority}</Badge>
            ) : item.priority === "MEDIUM" ? (
              <Badge variant="orange">{item.priority}</Badge>
            ) : (
              <Badge variant="success">{item.priority}</Badge>
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
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TaskTableContent;
