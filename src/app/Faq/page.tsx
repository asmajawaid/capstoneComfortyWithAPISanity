import React from "react";

export default function Faqs() {
  return (
    <>
     <div className="px-4 sm:px-6 lg:px-8">
  {/* HEADING */}
  <div className="flex flex-col justify-center items-center text-center mt-8">
    <h1 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-4">
      Questions Look Here
    </h1>
    <p className="text-sm sm:text-base font-medium text-[#4F4F4F] max-w-xl">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    </p>
  </div>

  {/* QUESTION CARDS */}
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
    {/* CARD */}
    {[
      "What types of chairs do you offer?",
      "How can we get in touch with you?",
      "Do your chairs come with a warranty?",
      "What will be delivered? And When?",
      "Can I try a chair before purchasing?",
      "How do I clean and maintain my Comforty chair?",
    ].map((question, index) => (
      <div
        key={index}
        className="bg-[#E1E3E5] rounded-lg p-6 shadow-md flex flex-col justify-between"
      >
        <div className="flex justify-between items-start">
          <h5 className="text-lg font-semibold">{question}</h5>
          <div className="text-xl text-[#333333] cursor-pointer">+</div>
        </div>
        <p className="mt-4 text-sm text-[#4F4F4F]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
          veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam
          quidem?
        </p>
      </div>
    ))}
  </div>
</div>

    </>
  );
}