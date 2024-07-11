import { useMutation } from "@tanstack/react-query";
import { createTask } from "../apis/tasks.api";
import { queryClient } from "../main";
import { KEYS } from "./constants";

export const useCreateTaskMutation = (data) => {
  return useMutation({
    mutationFn: (data) => createTask(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [KEYS.TASKS]
      })
    }
  })
}
