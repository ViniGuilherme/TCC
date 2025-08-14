import { apiClient } from "@/lib/api-client";
import type { SignUpFormData } from "@/schemas/sign-up";
import type { User } from "@/types/user";

type SignUpResponse = User & { accessToken: string }

export async function makeSignUp(data: SignUpFormData){
    return apiClient.post<SignUpResponse>('/auth/register', data);
}