"use server";

import { lucia, validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { taskSchema, taskValues } from "@/lib/validation";
import { verify } from "@node-rs/argon2";
import { generateIdFromEntropySize } from "lucia";
import { revalidatePath } from "next/cache";
import { isRedirectError } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createTask(input: taskValues) {
  const { user } = await validateRequest();
  if (!user) throw new Error("Unauthorized");

  const { taskName, startingTime, deadline, status, priority } =
    taskSchema.parse(input);

  await prisma.task.create({
    data: {
      id: generateIdFromEntropySize(128), // Assuming you have a function to generate an ID
      taskName,
      startingTime,
      deadline,
      status,
      priority,
      userId: user.id,
    },
  });

  revalidatePath("/tasks");
}

export async function deleteTask(id: string) {
  const { user } = await validateRequest();
  if (!user) throw new Error("Unauthorized");

  await prisma.task.delete({
    where: { id },
  });

  revalidatePath("/tasks");
}
