import React from "react";
import { FcGoogle } from "react-icons/fc";
import "./styles.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsShieldSlash } from "react-icons/bs";
import Link from "next/link";
import {Routes} from "@/lib/models/routes/Routes";

interface IProps {}

export default function Register(props: IProps) {
  return (
      <div
          className={
            "w-full h-full flex flex-col items-center justify-center p-10 gap-3"
          }
      >
        <h1 className={"text-2xl"}>Create Your Account</h1>
        <button
            className={
              "w-2/5 h-10 border-2 border-[#8098F9]/50 rounded-[10px] flex items-center justify-center hover:bg-[#8098F9]/50 hover:text-white gap-2"
            }
        >
          <FcGoogle size={25} />
          Google
        </button>
        <h1 className={"w-full text-[#71717A] text-xs"}>
          or continue with email
        </h1>
        <div
            className={
              "w-full h-[8%] border-2 border-[#8098F9]/50 text-[#2D31A6]/20 bg-[#8098F9]/10 flex gap-1 items-center justify-start text-sm"
            }
        >
          <AiOutlineMail className={"rounded-full ml-2"} size={25} />
          <input type={'email'} className={'w-full h-full bg-transparent pl-1 focus:outline-none'} placeholder={'Email'}/>
        </div>
        <div
            className={
              "w-full h-[8%] border-2 border-[#8098F9]/50 bg-[#8098F9]/10 text-[#2D31A6]/20 flex gap-1 items-center justify-start text-sm"
            }
        >
          <BsShieldSlash className={"ml-2"} size={25} />
          <input type={'password'} className={'w-full h-full bg-transparent pl-1 focus:outline-none'} placeholder={'Password'}/>
        </div><div
            className={
              "w-full h-[8%] border-2 border-[#8098F9]/50 bg-[#8098F9]/10 text-[#2D31A6]/20 flex gap-1 items-center justify-start text-sm"
            }
        >
          <BsShieldSlash className={"ml-2"} size={25} />
          <input type={'password'} className={'w-full h-full bg-transparent pl-1 focus:outline-none'} placeholder={'Confirm Password'}/>
        </div>
        <button
            className={"w-full h-[8%] bg-[#8098F9] text-white rounded-[10px] hover:bg-[#8098F9]/80"}
        >
          Sign up
        </button>
        <div className={"w-full flex items-center justify-center gap-1 text-xs"}>
          <p className={"text-[#71717A]"}>Already have an account?</p>
          <Link className={"text-[#8098F9]"} href={Routes.SignUp}>
            Sign in
          </Link>
        </div>
      </div>
  );
}
