import { useAppSelector } from "../store/store";

export function useAuth() {
  return useAppSelector((state) => state.auth);
}
