import { useQueryState, parseAsString } from "nuqs";

export const useEditUserModal = () => {
  const [userId, setUserId] = useQueryState("edit-user", parseAsString);

  const open = (id: string) => setUserId(id);
  const close = () => setUserId(null);

  return {
    userId,
    open,
    close,
    setUserId,
  };
};
