import { apiClient } from "@/lib/api-client";
import type { User } from "@/types/user";

export async function retrieveUserSession() {
    const response = await apiClient.get<User>("users/me");
    return response.data;
}