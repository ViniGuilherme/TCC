import type { User } from "@/types/user";
import { atom } from "jotai";
/**
 * Atom to manage the session state of the user.
 * It holds the user information if logged in, or null if not logged in.
 */
export const sessionAtom = atom<User | null>(null);