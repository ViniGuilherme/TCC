import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { retrieveUserSession } from "@/lib/services/auth/retrieve-user-session";
import { sessionAtom } from "@/lib/atoms/session";

export function useAuthInit() {
  const setSession = useSetAtom(sessionAtom);

  useEffect(() => {
    retrieveUserSession().then(user => {
      if (user) {
        setSession(user);
      }
    });
  }, []);
}
