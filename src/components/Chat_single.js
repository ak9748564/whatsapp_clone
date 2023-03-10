import dp from "./images/dp.jfif";
import whatsapp_web_bg_light from "./images/whatsapp_web_bg_light.jpg";
import dp_normal from "./images/dp_profile_normal.jfif";
import { useEffect, useState } from "react";

function Chat_single(){
    const [ searchMessagesWidth, setSearchMessagesWidth ] = useState("");
    const [ profileDetails, setProfileDetails ] = useState("");

    const [ menu, setMenu ] = useState(false);

    function setSearchMessagesWidthTrue(){
        setSearchMessagesWidth(true);
    }
    function setSearchMessagesWidthFalse(){
        setSearchMessagesWidth(false);
    }

    function setProfileDetailsTrue(){
        setProfileDetails(true);
    }
    function setProfileDetailsFalse(){
        setProfileDetails(false);
    }

    function SetMenuChatSingle(){
        setMenu(!menu);
    }

    return(
        <div className="chat_single flex">
            <div className="h-[100vh] flex flex-col grow shrink">
                <div className="h-[60px] bg-[#f0f2f5] flex items-center justify-between px-4 shadow-sm grow-0 shrink-0">
                    <div className="flex items-center grow shrink" onClick={setProfileDetailsTrue}>
                        <div className="rounded-full h-[40px] w-[40px] bg-cover bg-center mr-4 cursor-pointer" style={{ backgroundImage:`url(${dp})` }} title="Profile details"></div>
                        <div className="h-[40px] flex flex-col cursor-pointer">
                            <p className="text-[16px] leading-[21px] text-[#111b21]">Arman (You)</p>
                            <p className="text-[13px] leading-[19px] text-[#667781]">Message yourself</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                            <div className="h-[40px] w-[40px] flex items-center justify-center cursor-pointer rounded-full active:bg-[#D9DBDE]" onClick={setSearchMessagesWidthTrue} title="Search...">
                                <svg viewBox="0 0 24 24" height="24" width="24" class="fill-[#54656f]">
                                    <path fill="#54656f" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path>
                                </svg>
                            </div>
                            <div className="relative">
                                <div className="w-[40px] h-[40px] flex items-center justify-center ml-[10px] cursor-pointer rounded-full hover:bg-[#D9DBDE]" title="Menu" onClick={SetMenuChatSingle}>
                                    <svg viewBox="0 0 24 24" height="24" width="24"  class="fill-[#54656f]" >
                                        <path fill="#54656f" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path>
                                    </svg>
                                </div>
                                <div className={ menu ? "bg-white rounded-sm shadow-md py-[6px] absolute top-[46px] left-[-200px] w-[230px] h-[252px] animate-chat_single_menu overflow-hidden" : "w-0 h-0 overflow-hidden" }>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Contact info</p>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Select messages</p>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Close chat</p>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Disappearing messages</p>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Clear messages</p>
                                    <p className="h-[40px] text-[#3b4a54] text-[15px] leading-[40px] hover:bg-[#ececec] hover:transition-all px-6 cursor-pointer">Delete chat</p>
                                </div>
                            </div>
                    </div>
                </div>

                <div className="h-full grow shrink bg-cover bg-no-repeat bg-center flex" style={{backgroundImage:`url(${whatsapp_web_bg_light})`}}>
                    <div className="w-full">

                    </div>
                </div>

                <div className="h-[64px] bg-[#F0F2F5] flex items-center px-4 shadow-sm grow-0 shrink-0">
                    <div className="h-[52px] w-[26px] flex items-center justify-center cursor-pointer mr-[8px] ml-[10px]">
                        <svg viewBox="0 0 24 24" height="26" width="26" class="fill-[#54656f]">
                            <path fill="#54656f" d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path>
                        </svg>
                    </div>
                    <div className="h-[52px] w-[40px] flex items-center justify-center cursor-pointer mr-[10px]" title="Attach">
                        <svg viewBox="0 0 24 24" height="24" width="24" class="fill-[#54656f]">
                            <path fill="#54656f" d="M1.816,15.556v0.002c0,1.502,0.584,2.912,1.646,3.972s2.472,1.647,3.974,1.647 c1.501,0,2.91-0.584,3.972-1.645l9.547-9.548c0.769-0.768,1.147-1.767,1.058-2.817c-0.079-0.968-0.548-1.927-1.319-2.698 c-1.594-1.592-4.068-1.711-5.517-0.262l-7.916,7.915c-0.881,0.881-0.792,2.25,0.214,3.261c0.959,0.958,2.423,1.053,3.263,0.215 c0,0,3.817-3.818,5.511-5.512c0.28-0.28,0.267-0.722,0.053-0.936c-0.08-0.08-0.164-0.164-0.244-0.244 c-0.191-0.191-0.567-0.349-0.957,0.04c-1.699,1.699-5.506,5.506-5.506,5.506c-0.18,0.18-0.635,0.127-0.976-0.214 c-0.098-0.097-0.576-0.613-0.213-0.973l7.915-7.917c0.818-0.817,2.267-0.699,3.23,0.262c0.5,0.501,0.802,1.1,0.849,1.685 c0.051,0.573-0.156,1.111-0.589,1.543l-9.547,9.549c-0.756,0.757-1.761,1.171-2.829,1.171c-1.07,0-2.074-0.417-2.83-1.173 c-0.755-0.755-1.172-1.759-1.172-2.828l0,0c0-1.071,0.415-2.076,1.172-2.83c0,0,5.322-5.324,7.209-7.211 c0.157-0.157,0.264-0.579,0.028-0.814c-0.137-0.137-0.21-0.21-0.342-0.342c-0.2-0.2-0.553-0.263-0.834,0.018 c-1.895,1.895-7.205,7.207-7.205,7.207C2.4,12.645,1.816,14.056,1.816,15.556z"></path>
                        </svg>
                    </div>
                    <div className="grow shrink h-[40px] bg-white rounded-lg shadow-sm cursor-pointer" title="Type a message">
                        <input type="text" className="outline-none rounded-lg h-[40px] placeholder:text-[#3b4a54] text-[15px] px-4 w-full" placeholder="Type a message"/>
                    </div>
                    <div className="h-[37px] w-[52px] flex items-center justify-center cursor-pointer">
                        <svg viewBox="0 0 24 24" height="24" width="24" class="fill-[#54656f]">
                            <path fill="#54656f" d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className={ searchMessagesWidth === "" ? "h-[100vh] w-[0px] overflow-hidden" : searchMessagesWidth ? "animate-search_messages_full overflow-hidden" : "animate-search_messages_zero overflow-hidden"  }>
                <div className="h-[60px] bg-[#f0f2f5] flex items-center px-4 shadow-sm grow-0 shrink-0 border-l border-[#D1D7DB]">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="mr-7 cursor-pointer" fill="#54656f" enable-background="new 0 0 24 24" onClick={setSearchMessagesWidthFalse}>
                        <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                    </svg>
                    <p className="text-[#111b21] text-[16px]">Search Messages</p>
                </div>
                <div className="h-[50px] flex items-center px-[10px] grow-0 shrink-0 border-b border-[#E9EDEF]">
                    <div className="flex items-center bg-[#F0F2F5] rounded-lg w-full h-[35px] px-4">
                        <svg viewBox="0 0 24 24" height="20" width="20" class="fill-[#54656f]">
                            <path fill="#54656f" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path>
                        </svg>
                        <div className="w-full"><input type="text" className="bg-[#F0F2F5] outline-none placeholder:text-[#3b4a54] text-[13px] px-7 w-full" placeholder="Search..."/></div>
                    </div>
                </div>
                <div className="px-[50px] py-[90px]">
                    <p className="text-[#8698a0] text-[14px] leading-[20px] text-center">Search messages with yourself.</p>
                </div>
            </div>
            <div className={ profileDetails === "" ? "h-[100vh] w-[0px] overflow-hidden" : profileDetails ? "animate-search_messages_full overflow-hidden" : "animate-search_messages_zero overflow-hidden"  }>
                <div className="profile_self hidden">
                    <div className="h-[60px] bg-[#f0f2f5] flex items-center px-4 shadow-sm grow-0 shrink-0 border-l border-[#D1D7DB]">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="mr-7 cursor-pointer" fill="#54656f" enable-background="new 0 0 24 24" onClick={setProfileDetailsFalse}>
                            <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                        </svg>
                        <p className="text-[#111b21] text-[16px]">Contact info</p>
                    </div>
                    <div className="overflow-y-scroll bg-[#EFF1F4] y_scroll">
                        <div className="p-6 bg-white shadow-sm">
                            <div className="h-[200px] w-[200px] rounded-full bg-cover bg-center m-auto" style={{backgroundImage:`url(${dp})`}}></div>
                            <p className="text-center pt-5 text-[24px] text-[#3b4a54]">Arman (You)</p>
                            <p className="text-center text-[16px] text-[#667781]">+91 99539 52112</p>
                        </div>
                        <div className="mt-3 bg-white px-[30px] pt-[19px] pb-[17px]">
                            <p className="text-[15px] text-[#667781] leading-[23px]">About</p>
                            <p className="text-[17px] text-[#111b21] leading-[23px]">Waiting for u..... My Life.</p>
                        </div>
                        <div className="mt-3 bg-white">
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer">
                                <div className="grow-0 shrink-0  w-[40px] mr-[8px]">
                                    <svg viewBox="0 0 16 15" height="20" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 16 15">
                                        <path fill="#667781" d="M8.3,10.2l-2.5,1.7c-0.3,0.2-0.8-0.1-0.7-0.5L6,8.6c0.1-0.2,0-0.4-0.2-0.5L3.5,6.3C3.1,6,3.3,5.5,3.7,5.5 l3-0.1c0.2,0,0.3-0.1,0.4-0.3l1-2.8c0.1-0.4,0.7-0.4,0.8,0l1,2.8c0.1,0.2,0.2,0.3,0.4,0.3l3,0.1c0.4,0,0.6,0.5,0.3,0.8l-2.4,1.8 C11.1,8.2,11,8.4,11,8.6l0.9,2.9c0.1,0.4-0.3,0.7-0.7,0.5l-2.5-1.7C8.6,10.1,8.4,10.1,8.3,10.2z"></path>
                                    </svg>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-[17px] leading-[22px] text-[#111b21]">Starred messages</p>
                                    <div>
                                        <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 10 21">
                                            <path fill="#667781" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-[58px] px-[30px] cursor-pointer">
                                <div className="grow-0 shrink-0  w-[40px] mr-[8px] cursor-pointer">
                                    <svg viewBox="0 0 36 36" height="20" preserveAspectRatio="xMidYMid meet" class="m-auto" fill="#667781">
                                        <path fill="#667781" fill-rule="evenodd" clip-rule="evenodd" d="M18 31.5C18.0909 31.5 18.1817 31.4991 18.2722 31.4973C19.1005 31.4809 19.7586 30.7961 19.7422 29.9679C19.7258 29.1396 19.041 28.4815 18.2128 28.4979C18.142 28.4993 18.0711 28.5 18 28.5V31.5ZM18 7.5C18.0711 7.5 18.142 7.5007 18.2128 7.50211C19.041 7.51853 19.7258 6.86039 19.7422 6.03213C19.7586 5.20387 19.1005 4.51912 18.2722 4.5027C18.1817 4.5009 18.0909 4.5 18 4.5V7.5ZM24.5153 6.17374C23.7901 5.77341 22.8776 6.03683 22.4772 6.76211C22.0769 7.48739 22.3403 8.39988 23.0656 8.8002C23.1891 8.86838 23.3111 8.93898 23.4316 9.01195C24.1401 9.44118 25.0625 9.21475 25.4917 8.5062C25.921 7.79765 25.6945 6.87529 24.986 6.44605C24.8311 6.35223 24.6742 6.26144 24.5153 6.17374ZM29.554 11.014C29.1247 10.3055 28.2024 10.079 27.4938 10.5083C26.7852 10.9375 26.5588 11.8599 26.9881 12.5684C27.061 12.6889 27.1316 12.8109 27.1998 12.9344C27.6001 13.6597 28.5126 13.9231 29.2379 13.5228C29.9632 13.1224 30.2266 12.2099 29.8263 11.4847C29.7386 11.3258 29.6478 11.1689 29.554 11.014ZM31.4973 17.7278C31.4809 16.8995 30.7961 16.2414 29.9679 16.2578C29.1396 16.2742 28.4815 16.959 28.4979 17.7872C28.4993 17.858 28.5 17.9289 28.5 18C28.5 18.0711 28.4993 18.142 28.4979 18.2128C28.4815 19.041 29.1396 19.7258 29.9679 19.7422C30.7961 19.7586 31.4809 19.1005 31.4973 18.2722C31.4991 18.1817 31.5 18.0909 31.5 18C31.5 17.9091 31.4991 17.8183 31.4973 17.7278ZM29.8263 24.5153C30.2266 23.7901 29.9632 22.8776 29.2379 22.4772C28.5126 22.0769 27.6001 22.3403 27.1998 23.0656C27.1316 23.1891 27.061 23.3111 26.9881 23.4316C26.5588 24.1401 26.7852 25.0625 27.4938 25.4917C28.2024 25.921 29.1247 25.6945 29.554 24.986C29.6478 24.8311 29.7386 24.6742 29.8263 24.5153ZM24.986 29.554C25.6945 29.1247 25.921 28.2024 25.4917 27.4938C25.0625 26.7852 24.1401 26.5588 23.4316 26.9881C23.3111 27.061 23.1891 27.1316 23.0656 27.1998C22.3403 27.6001 22.0769 28.5126 22.4772 29.2379C22.8776 29.9632 23.7901 30.2266 24.5153 29.8263C24.6742 29.7386 24.8311 29.6478 24.986 29.554Z"></path>
                                        <path fill="#667781" fill-rule="evenodd" clip-rule="evenodd" d="M18.0001 4.5C18 4.5 17.9999 4.5 17.9998 4.5C10.5439 4.5 4.49976 10.5442 4.49976 18C4.49976 25.4558 10.5439 31.5 17.9998 31.5C17.9999 31.5 18 31.5 18.0001 31.5V28.5C18 28.5 17.9999 28.5 17.9998 28.5C12.2008 28.5 7.49976 23.799 7.49976 18C7.49976 12.201 12.2008 7.5 17.9998 7.5C17.9999 7.5 18 7.5 18.0001 7.5V4.5Z"></path>
                                        <path fill="#667781" d="M23.3247 12.0107C23.669 11.7525 24.1507 11.7867 24.455 12.091V12.091C24.7593 12.3953 24.7935 12.877 24.5353 13.2213L19.9714 19.3066C19.2589 20.2566 17.8701 20.3553 17.0304 19.5156V19.5156C16.1907 18.6759 16.2894 17.2871 17.2394 16.5746L23.3247 12.0107Z"></path>
                                    </svg>
                                </div>
                                <div className="flex justify-between w-full">
                                    <div>
                                        <p className="text-[17px] leading-[22px] text-[#111b21]">Disappearing messages</p>
                                        <p className="text-[14px] text-[#8696a0]">Off</p>
                                    </div>
                                    <div>
                                        <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 10 21">
                                            <path fill="#667781" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex min-h-[58px] px-[30px] cursor-pointer">
                                <div className="grow-0 shrink-0  w-[40px] mr-[8px] cursor-pointer">
                                    <svg viewBox="0 0 24 24" height="20" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <path fill="#667781" d="M17.3,7.6h-0.9V5.8c0-2.5-1.9-4.4-4.4-4.4S7.6,3.3,7.6,5.8v1.8H6.7c-1,0-1.8,0.8-1.8,1.8v8.9 c0,1,0.8,1.8,1.8,1.8h10.6c1,0,1.8-0.8,1.8-1.8V9.4C19.1,8.4,18.3,7.6,17.3,7.6z M12,15.8c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S13.1,15.8,12,15.8z M14.7,7.6H9.2V5.8c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7v1.8C14.6,7.6,14.7,7.6,14.7,7.6z"></path>
                                    </svg>
                                </div>
                                <div className="flex justify-between w-full">
                                    <div>
                                        <p className="text-[17px] leading-[22px] text-[#111b21]">Encryption</p>
                                        <p className="text-[14px] text-[#8696a0]">Messages are end to end encrypted. Click to verify</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer hover:bg-[#ececec] hover:transition-all">
                                <div className="grow-0 shrink-0 h-[58px] w-[40px] mr-[8px] flex items-center cursor-pointer">
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <path fill="#EA0038" d="M6,18c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V6H6V18z M19,3h-3.5l-1-1h-5l-1,1H5v2h14V3z"></path>
                                    </svg>
                                </div>
                                <p className="text-[#ea0038] text-[17px]">Delete Chat</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile_normal">
                    <div className="h-[60px] bg-[#f0f2f5] flex items-center px-4 shadow-sm grow-0 shrink-0 border-l border-[#D1D7DB]">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="mr-7 cursor-pointer" fill="#54656f" enable-background="new 0 0 24 24" onClick={setProfileDetailsFalse}>
                            <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                        </svg>
                        <p className="text-[#111b21] text-[16px]">Contact info</p>
                    </div>
                    <div className="overflow-y-scroll bg-[#EFF1F4] y_scroll">
                        <div className="p-6 bg-white shadow-sm">
                            <div className="h-[200px] w-[200px] rounded-full bg-cover bg-center m-auto" style={{backgroundImage:`url(${dp_normal})`}}></div>
                            <p className="text-center pt-5 text-[24px] text-[#3b4a54]">Hasmuddin Bhaiya</p>
                            <p className="text-center text-[16px] text-[#667781]">+91 93553178821</p>
                        </div>
                        <div className="mt-3 bg-white px-[30px] pt-[19px] pb-[17px]">
                            <p className="text-[15px] text-[#667781] leading-[23px]">About</p>
                            <p className="text-[17px] text-[#111b21] leading-[23px]">Hey there! I am using Whatsapp.</p>
                        </div>
                        <div className="mt-3 bg-white">
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer">
                                <div className="grow-0 shrink-0  w-[40px] mr-[8px]">
                                    <svg viewBox="0 0 16 15" height="20" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 16 15">
                                        <path fill="#667781" d="M8.3,10.2l-2.5,1.7c-0.3,0.2-0.8-0.1-0.7-0.5L6,8.6c0.1-0.2,0-0.4-0.2-0.5L3.5,6.3C3.1,6,3.3,5.5,3.7,5.5 l3-0.1c0.2,0,0.3-0.1,0.4-0.3l1-2.8c0.1-0.4,0.7-0.4,0.8,0l1,2.8c0.1,0.2,0.2,0.3,0.4,0.3l3,0.1c0.4,0,0.6,0.5,0.3,0.8l-2.4,1.8 C11.1,8.2,11,8.4,11,8.6l0.9,2.9c0.1,0.4-0.3,0.7-0.7,0.5l-2.5-1.7C8.6,10.1,8.4,10.1,8.3,10.2z"></path>
                                    </svg>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-[17px] leading-[22px] text-[#111b21]">Starred messages</p>
                                    <div>
                                        <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 10 21">
                                            <path fill="#667781" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer">
                                <div className="grow-0 shrink-0  w-[40px] mr-[8px]">
                                    <svg viewBox="0 0 24 24" height="20" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <path fill="#667781" d="M12,21.7c0.9,0,1.7-0.8,1.7-1.7h-3.4C10.3,20.9,11.1,21.7,12,21.7z M17.6,16.5v-4.7 c0-2.7-1.8-4.8-4.3-5.4V5.8c0-0.7-0.6-1.3-1.3-1.3s-1.3,0.6-1.3,1.3v0.6C8.2,7,6.4,9.1,6.4,11.8v4.7l-1.7,1.7v0.9h14.6v-0.9 L17.6,16.5z"></path>
                                    </svg>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-[17px] leading-[22px] text-[#111b21]">Mute Notifications</p>
                                    <div>
                                        <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 10 21">
                                            <path fill="#667781" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-[58px] px-[30px] cursor-pointer">
                                <div className="grow-0 shrink-0  w-[40px] mr-[8px] cursor-pointer">
                                    <svg viewBox="0 0 36 36" height="20" preserveAspectRatio="xMidYMid meet" class="m-auto" fill="#667781">
                                        <path fill="#667781" fill-rule="evenodd" clip-rule="evenodd" d="M18 31.5C18.0909 31.5 18.1817 31.4991 18.2722 31.4973C19.1005 31.4809 19.7586 30.7961 19.7422 29.9679C19.7258 29.1396 19.041 28.4815 18.2128 28.4979C18.142 28.4993 18.0711 28.5 18 28.5V31.5ZM18 7.5C18.0711 7.5 18.142 7.5007 18.2128 7.50211C19.041 7.51853 19.7258 6.86039 19.7422 6.03213C19.7586 5.20387 19.1005 4.51912 18.2722 4.5027C18.1817 4.5009 18.0909 4.5 18 4.5V7.5ZM24.5153 6.17374C23.7901 5.77341 22.8776 6.03683 22.4772 6.76211C22.0769 7.48739 22.3403 8.39988 23.0656 8.8002C23.1891 8.86838 23.3111 8.93898 23.4316 9.01195C24.1401 9.44118 25.0625 9.21475 25.4917 8.5062C25.921 7.79765 25.6945 6.87529 24.986 6.44605C24.8311 6.35223 24.6742 6.26144 24.5153 6.17374ZM29.554 11.014C29.1247 10.3055 28.2024 10.079 27.4938 10.5083C26.7852 10.9375 26.5588 11.8599 26.9881 12.5684C27.061 12.6889 27.1316 12.8109 27.1998 12.9344C27.6001 13.6597 28.5126 13.9231 29.2379 13.5228C29.9632 13.1224 30.2266 12.2099 29.8263 11.4847C29.7386 11.3258 29.6478 11.1689 29.554 11.014ZM31.4973 17.7278C31.4809 16.8995 30.7961 16.2414 29.9679 16.2578C29.1396 16.2742 28.4815 16.959 28.4979 17.7872C28.4993 17.858 28.5 17.9289 28.5 18C28.5 18.0711 28.4993 18.142 28.4979 18.2128C28.4815 19.041 29.1396 19.7258 29.9679 19.7422C30.7961 19.7586 31.4809 19.1005 31.4973 18.2722C31.4991 18.1817 31.5 18.0909 31.5 18C31.5 17.9091 31.4991 17.8183 31.4973 17.7278ZM29.8263 24.5153C30.2266 23.7901 29.9632 22.8776 29.2379 22.4772C28.5126 22.0769 27.6001 22.3403 27.1998 23.0656C27.1316 23.1891 27.061 23.3111 26.9881 23.4316C26.5588 24.1401 26.7852 25.0625 27.4938 25.4917C28.2024 25.921 29.1247 25.6945 29.554 24.986C29.6478 24.8311 29.7386 24.6742 29.8263 24.5153ZM24.986 29.554C25.6945 29.1247 25.921 28.2024 25.4917 27.4938C25.0625 26.7852 24.1401 26.5588 23.4316 26.9881C23.3111 27.061 23.1891 27.1316 23.0656 27.1998C22.3403 27.6001 22.0769 28.5126 22.4772 29.2379C22.8776 29.9632 23.7901 30.2266 24.5153 29.8263C24.6742 29.7386 24.8311 29.6478 24.986 29.554Z"></path>
                                        <path fill="#667781" fill-rule="evenodd" clip-rule="evenodd" d="M18.0001 4.5C18 4.5 17.9999 4.5 17.9998 4.5C10.5439 4.5 4.49976 10.5442 4.49976 18C4.49976 25.4558 10.5439 31.5 17.9998 31.5C17.9999 31.5 18 31.5 18.0001 31.5V28.5C18 28.5 17.9999 28.5 17.9998 28.5C12.2008 28.5 7.49976 23.799 7.49976 18C7.49976 12.201 12.2008 7.5 17.9998 7.5C17.9999 7.5 18 7.5 18.0001 7.5V4.5Z"></path>
                                        <path fill="#667781" d="M23.3247 12.0107C23.669 11.7525 24.1507 11.7867 24.455 12.091V12.091C24.7593 12.3953 24.7935 12.877 24.5353 13.2213L19.9714 19.3066C19.2589 20.2566 17.8701 20.3553 17.0304 19.5156V19.5156C16.1907 18.6759 16.2894 17.2871 17.2394 16.5746L23.3247 12.0107Z"></path>
                                    </svg>
                                </div>
                                <div className="flex justify-between w-full">
                                    <div>
                                        <p className="text-[17px] leading-[22px] text-[#111b21]">Disappearing messages</p>
                                        <p className="text-[14px] text-[#8696a0]">Off</p>
                                    </div>
                                    <div>
                                        <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 10 21">
                                            <path fill="#667781" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex min-h-[58px] px-[30px] cursor-pointer">
                                <div className="grow-0 shrink-0  w-[40px] mr-[8px] cursor-pointer">
                                    <svg viewBox="0 0 24 24" height="20" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <path fill="#667781" d="M17.3,7.6h-0.9V5.8c0-2.5-1.9-4.4-4.4-4.4S7.6,3.3,7.6,5.8v1.8H6.7c-1,0-1.8,0.8-1.8,1.8v8.9 c0,1,0.8,1.8,1.8,1.8h10.6c1,0,1.8-0.8,1.8-1.8V9.4C19.1,8.4,18.3,7.6,17.3,7.6z M12,15.8c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S13.1,15.8,12,15.8z M14.7,7.6H9.2V5.8c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7v1.8C14.6,7.6,14.7,7.6,14.7,7.6z"></path>
                                    </svg>
                                </div>
                                <div className="flex justify-between w-full">
                                    <div>
                                        <p className="text-[17px] leading-[22px] text-[#111b21]">Encryption</p>
                                        <p className="text-[14px] text-[#8696a0]">Messages are end to end encrypted. Click to verify</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer hover:bg-[#ececec] hover:transition-all" title="Block">
                                <div className="grow-0 shrink-0 h-[58px] w-[40px] mr-[8px] flex items-center cursor-pointer">
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <path fill="#EA0038" d="M12,2.8c-5.3,0-9.7,4.3-9.7,9.7s4.3,9.7,9.7,9.7s9.7-4.3,9.7-9.7S17.3,2.8,12,2.8z  M4.7,12.5c0-4,3.3-7.3,7.3-7.3c1.6,0,3.1,0.5,4.3,1.4L6.1,16.8C5.2,15.6,4.7,14.1,4.7,12.5z M12,19.8c-1.6,0-3-0.5-4.2-1.4 L17.9,8.3c0.9,1.2,1.4,2.6,1.4,4.2C19.3,16.5,16,19.8,12,19.8z"></path>
                                    </svg>
                                </div>
                                <p className="text-[#ea0038] text-[17px]">Block Hasmuddin Bhaiya</p>
                            </div>
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer hover:bg-[#ececec] hover:transition-all" title="Report">
                                <div className="grow-0 shrink-0 h-[58px] w-[40px] mr-[8px] flex items-center cursor-pointer">
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <g>
                                            <g id="thumb-down">
                                                <path fill="#ea0038" d="M14.091,4.2H6.318c-0.691,0-1.295,0.432-1.555,1.036l-2.591,6.132C2.086,11.541,2,11.714,2,11.973v1.641 l0,0V13.7c0,0.95,0.777,1.727,1.727,1.727h5.441L8.305,19.4c0,0.086,0,0.173,0,0.259c0,0.345,0.173,0.691,0.345,0.95l0.95,0.864 l5.7-5.7c0.345-0.345,0.518-0.777,0.518-1.209V5.927C15.818,4.977,15.041,4.2,14.091,4.2z M17.545,4.2v10.364H21V4.2H17.545z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <p className="text-[#ea0038] text-[17px]">Report Hasmuddin Bhaiya</p>
                            </div>
                            <div className="flex items-center h-[58px] px-[30px] cursor-pointer hover:bg-[#ececec] hover:transition-all" title="Delete Chat">
                                <div className="grow-0 shrink-0 h-[58px] w-[40px] mr-[8px] flex items-center cursor-pointer">
                                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="m-auto" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                                        <path fill="#EA0038" d="M6,18c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V6H6V18z M19,3h-3.5l-1-1h-5l-1,1H5v2h14V3z"></path>
                                    </svg>
                                </div>
                                <p className="text-[#ea0038] text-[17px]">Delete Chat</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile_business hidden">
                    <div className="h-[60px] bg-[#f0f2f5] flex items-center px-4 shadow-sm grow-0 shrink-0 border-l border-[#D1D7DB]">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="mr-7 cursor-pointer" fill="#54656f" enable-background="new 0 0 24 24" onClick={setSearchMessagesWidthFalse}>
                            <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                        </svg>
                        <p className="text-[#111b21] text-[16px]">Search Messages</p>
                    </div>
                    <div className="h-[50px] flex items-center px-[10px] grow-0 shrink-0 border-b border-[#E9EDEF]">
                        <div className="flex items-center bg-[#F0F2F5] rounded-lg w-full h-[35px] px-4">
                            <svg viewBox="0 0 24 24" height="20" width="20" class="fill-[#54656f]">
                                <path fill="#54656f" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path>
                            </svg>
                            <div className="w-full">
                                <input type="text" className="bg-[#F0F2F5] outline-none placeholder:text-[#3b4a54] text-[13px] px-7 w-full" placeholder="Search..."/>
                            </div>
                        </div>
                    </div>
                    <div className="px-[50px] py-[90px]">
                        <p className="text-[#8698a0] text-[14px] leading-[20px] text-center">Search messages with yourself.</p>
                    </div>
                </div>
                <div className="profile_group hidden">
                    <div className="h-[60px] bg-[#f0f2f5] flex items-center px-4 shadow-sm grow-0 shrink-0 border-l border-[#D1D7DB]">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="mr-7 cursor-pointer" fill="#54656f" enable-background="new 0 0 24 24" onClick={setSearchMessagesWidthFalse}>
                            <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path>
                        </svg>
                        <p className="text-[#111b21] text-[16px]">Search Messages</p>
                    </div>
                    <div className="h-[50px] flex items-center px-[10px] grow-0 shrink-0 border-b border-[#E9EDEF]">
                        <div className="flex items-center bg-[#F0F2F5] rounded-lg w-full h-[35px] px-4">
                            <svg viewBox="0 0 24 24" height="20" width="20" class="fill-[#54656f]">
                                <path fill="#54656f" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path>
                            </svg>
                            <div className="w-full">
                                <input type="text" className="bg-[#F0F2F5] outline-none placeholder:text-[#3b4a54] text-[13px] px-7 w-full" placeholder="Search..."/>
                            </div>
                        </div>
                    </div>
                    <div className="px-[50px] py-[90px]">
                        <p className="text-[#8698a0] text-[14px] leading-[20px] text-center">Search messages with yourself.</p>
                    </div>
                </div>
            </div>
        </div>
        );
}
export default Chat_single;