import React from 'react'
import { EmojiHeadset, EmojiJournal, EmojiPeople, EmojiSmile } from "@/lib/icons";

export default function Status() {
  return (
      <div className="bg-[#F0F3F9]">
          <div className="container-width py-[3rem]">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[20px]">
                  <div className="bg-white py-[30px] px-[30px] flex flex-row items-center gap-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.1)]">
                      <EmojiSmile />
                      <div className="space-y-2">
                          <span className="inline-block text-4xl font-bold text-[#273D4E]">232</span>
                          <p>Happy Clients</p>
                      </div>
                  </div>
                  <div className="bg-white py-[30px] px-[30px] flex flex-row items-center gap-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.1)]">
                      <EmojiJournal />
                      <div className="space-y-2">
                          <span className="inline-block text-4xl font-bold text-[#273D4E]">521</span>
                          <p>Projects</p>
                      </div>
                  </div>
                  <div className="bg-white py-[30px] px-[30px] flex flex-row items-center gap-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.1)]">
                      <EmojiHeadset />
                      <div className="space-y-2">
                          <span className="inline-block text-4xl font-bold text-[#273D4E]">1463</span>
                          <p>Hours Of Support</p>
                      </div>
                  </div>
                  <div className="bg-white py-[30px] px-[30px] flex flex-row items-center gap-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.1)]">
                      <EmojiPeople />
                      <div className="space-y-2">
                          <span className="inline-block text-4xl font-bold text-[#273D4E]">15</span>
                          <p>Hard Workers</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
