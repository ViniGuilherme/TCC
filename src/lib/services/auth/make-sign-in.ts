import { apiClient } from "@/lib/api-client";
import type { SignInFormData } from "@/schemas/sign-in";
import type { User } from "@/types/user";
import { setCookie } from "@/utils/cookie";

type SignInResponse = User & { accessToken: string }

export async function makeSignIn(data: SignInFormData){
    const response = await apiClient.post<SignInResponse>('/auth/login', data);
    setCookie('token', response.data.accessToken);
    return response.data;
}