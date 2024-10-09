import Video from "/tiktok.mp4";

export default function IphoneFrame() {
  return (
    <div className="relative w-[305px] h-[585px] bg-transparent border-[7px] border-[#5e17eb] rounded-[40px] overflow-hidden">
      
      {/* Iphone small black thing at the top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[25px] w-[90px] bg-transparent">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[25px] w-[137px] bg-[#5e17eb] rounded-b-[17px]"></div>
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