import React from "react";
import { motion } from "framer-motion";

const ScheduleModal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="h-screen w-[375px] bg-black bg-opacity-50 flex justify-center z-10 fixed items-center mt-[-48px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="pt-8 items-center w-[300px] h-[167px] text-center fixed top-[38%] rounded-[16px] bg-white"
      >
        <div className="text-[18px] font-bold flex flex-col">일정을 추가할 수 없어요.</div>
        <div className="mt-[14px] text-[14px] text-[#6F6F6F]">
          날짜와 시간, 일정제목은 <br />
          필수 입력사항이예요.
        </div>
        <button className="bg-[#002C51] h-[40px] w-[268px] text-white mt-[18px] rounded-[4px]" onClick={closeModal}>
          확인
        </button>
      </motion.div>
    </div>
  );
};

export default ScheduleModal;
