import { useQueryState, parseAsString } from "nuqs";

export const useViewUserModal = () => {
  const [userId, setUserId] = useQueryState("view-user", parseAsString);

  const open = (id: string) => setUserId(id);
  const close = () => setUserId(null);

  return {
    userId,
    open,
    close,
    setUserId,
  };
};
