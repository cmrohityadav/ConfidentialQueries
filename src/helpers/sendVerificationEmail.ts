import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmail";

import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerifcationEmail(
    email:string,
    username:string,
    verifyCode:string
):Promise<ApiResponse>{

    try {

        await resend.emails.send({
            from:"onboarding@resend.dev",
            to: email,
            subject:'Confidential Queries verification code',
            react:VerificationEmail({username,otp:verifyCode})
        })
        return {succss:true,message:"Verification send succesfully"}
        
    } catch (error) {
        console.error("error sending verification email",error)
        return {succss:false,message:"failed to sending verfication email"}
    }

}