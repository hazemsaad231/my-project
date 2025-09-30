import Image from "next/image";

const About = () => {
  return (
    <><div className="flex flex-col py-10 gap-8">
      <div className="flex justify-center">
        <Image src="/icon.webp" alt="about" width={1000} height={1000} />
      </div>
      <div className="flex justify-around mt-10 text-2xl font-semibold">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-[#056158] pb-2">زوار المنصه</h1>
          <p className="font-bold"> 1000</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-[#056158] pb-2">زوار اليوم</h1>
          <p className="font-bold">100</p>


        </div>
      </div>

      <div className="flex justify-center items-center flex-col md:flex-row mt-10">
        <video
          src="/Taqreeb-2.mp4"
          controls
          className="h-80 w-1/2"
        >
          Your browser does not support the video tag.
        </video>
<div className="flex flex-col justify-center items-center bg-gray-100 h-80 rounded-l-3xl p-10 text-center ">
        <h1 className="text-3xl text-[#0d796f] mb-3 font-semibold">منصة تقريب</h1>
        <p className="text-xl w-[300px]  md:w-[400px] lg:w-[400px] xl:w-[500px]  text-gray-700">
        منصة الكترونية غير ربحية تسعى لتقريب الوضع الاجتماعي والإنساني في مختلف محافظات اليمن لنقل صورة عن الواقع الذي يعيشه أهل اليمن في ظل الظروف الحالية وكذلك تعتبر تقريب دليلك للجهات العاملة في اليمن .
        </p>
        </div>

      </div>
    </div><div>
      </div></>
  );
}
export default About;