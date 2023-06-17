import { useAuthContext } from "@/context/AuthContext"

export default function UserIcon() {

    const { user, logOut } = useAuthContext()

    return (
        <div className="flex items-center gap-2">
            {/* User icon container */}
            {/* <Link href="/signin"> */}
            <div className="relative w-fit">
                <div className="absolute bottom-0 right-0.5 flex items-center justify-center text-center bg-green-500 w-2 h-2 rounded-full">
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" className="fill-light-100">
                <path d="M226-262q59-39.666 121-60.833T480-344q71 0 133.333 21.167Q675.667-301.666 734.667-262q41-49.667 59.833-103.667 18.834-54 18.834-114.333 0-141-96.167-237.167T480-813.334q-141 0-237.167 96.167T146.666-480q0 60.333 19.167 114.333T226-262Zm253.876-184.667q-58.209 0-98.043-39.957Q342-526.581 342-584.791q0-58.209 39.957-98.042 39.958-39.834 98.167-39.834t98.043 39.958Q618-642.752 618-584.543q0 58.21-39.957 98.043-39.958 39.833-98.167 39.833ZM479.73-80q-83.097 0-156.183-31.5t-127.15-85.833q-54.064-54.334-85.23-127.227Q80-397.454 80-480.333q0-82.88 31.5-155.773Q143-709 197.333-763q54.334-54 127.227-85.5Q397.454-880 480.333-880q82.88 0 155.773 31.5Q709-817 763-763t85.5 127Q880-563 880-480.177q0 82.822-31.5 155.666T763-197.333Q709-143 635.914-111.5T479.73-80Z"
                />
                </svg>
            </div>
            {/* </Link> */}
            <div>
                <p className="text-xs opacity-75">{user.email}</p>
                <button type='button' onClick={() => logOut()} className="flex items-center gap-1 cursor-pointer">
                <label className="text-xs uppercase opacity-75 hover:opacity-100 hover:text-primary-700 cursor-pointer">Loged out</label>
                <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                </button>
            </div>
        </div>  
    )
}