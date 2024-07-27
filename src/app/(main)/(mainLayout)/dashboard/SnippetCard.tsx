"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export default function SnippetCard({ className }: { className?: string }) {
  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-center">
        <CardTitle>Projects</CardTitle>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link href="/projects">
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <Separator />
      <CardContent>
        <Table>
          <TableBody>
            <TableRow className="w-full">
              <TableCell>
                <div className="font-medium">Brave Creative - Maintenance Plan</div>
              </TableCell>
              <TableCell className="self-end">
                <Badge className="text-xs" variant="destructive">
                 Client Review 
                </Badge>
              </TableCell>
            </TableRow>
            <TableRow className="w-full">
              <TableCell>
                <div className="font-medium">Brave Creative - Maintenance Plan</div>
              </TableCell>
              <TableCell className="self-end">
                <Badge className="text-xs" variant="orange">
                 Copy Writing 
                </Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <Button asChild size="sm" variant={"ghost"} className="w-full">
        <Link href="/projects">View All Projects</Link>
      </Button>
    </Card>
  );
}
