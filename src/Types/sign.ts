export type SignInType = {
    email: string;
    password: string;
}

export type SignUpType = {
    email: string;
    password: string;
    confirmPassword: string;
}

export type SignUpdateType = {
    email: string;
    curPassword: string;
    newPassword: string;
}