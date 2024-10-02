import { useQuery } from "@tanstack/react-query";
import api from "../api/axiosInstance";

export const useDrink =()=>{
    return useQuery({
        queryKey:['drinks'],
        queryFn:async()=>{
          const response =await api(`/items/${"DRINKS"}`);
          return response.data.items
        }
      })
}

export const useBrunch=()=> {
    return useQuery({
        queryKey:['brunch'],
        queryFn:async()=>{
          const response =await api(`/items/${"BRUNCH"}`)
          return response.data.items
        }
      })
}