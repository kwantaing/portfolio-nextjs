import Image from "next/image"
const About = () => {
    const resumeUrl = "https://portfolio-data-qdev.s3.us-east-2.amazonaws.com/quentin-ng-swe-resume.pdf"
    const gotoResume = () => {
        window.open(resumeUrl, "_blank");
    }

  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
    <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
    />
    <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-semibold">
            Hello, I'm Quentin, a software developer.
        </p>
        <button onClick={()=>gotoResume()} className="text-red-400 bg-white px-8 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
            About me
        </button>
    </div>
</div>
  );
};

export default About;
