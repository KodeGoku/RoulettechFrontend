import { useQuery } from "@tanstack/react-query"
import { getTasks } from "../apis/tasks.api"
import { KEYS } from "./constants"

export const useGetTasks = () => {
  return useQuery({
    queryKey: [KEYS.TASKS],
    queryFn: getTasks
  })
}
