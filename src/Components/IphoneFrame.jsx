import Video from "/Influencer_tiktok.mp4";

export default function IphoneFrame() {
  return (
    <div className="relative w-[305px] h-[585px] bg-gradient-to-r from-[#37271d] to-[#bb642e] border-[5px] border-black rounded-[40px] overflow-hidden">
      
      {/* Iphone small black thing at the top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[25px] w-[90px] bg-transparent">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[25px] w-[137px] bg-gradient-to-r from-[#37271d] to-[#bb642e] rounded-b-[17px] border-b-[5px] border-l-[5px] border-r-[5px] border-black"></div>
      </div>
      
      <video 
        autoPlay 
        loop 
        src={Video} 
        controls 
        className="absolute w-[95%] h-[85%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
      />
    </div>
  );
}