"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import * as motion from "motion/react-client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Home() {
  const [result, setResult] = useState("");
  const [numberOfLevels, setNumberOfLevels] = useState(0);
  const [numberOfSections, setNumberOfSections] = useState(0);
  const [loading, setLoading] = useState(false);

  const generateClass = async () => {
    setLoading(true);
    const res = await axios.post("/api/generate", {
      levels: numberOfLevels,
      sections: numberOfSections,
    });
    setResult(res.data.response);
    setLoading(false);
  };

  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <div>Class AI </div>
      Number of Levels:
      <input
        type='number'
        className='border-2 border-gray-300 rounded-md p-2 w-20'
        value={numberOfLevels}
        onChange={(e) => setNumberOfLevels(Number(e.target.value))}
      />
      Number of Sections per Level:{" "}
      <input
        type='number'
        className='border-2 border-gray-300 rounded-md p-2 w-20'
        value={numberOfSections}
        onChange={(e) => setNumberOfSections(Number(e.target.value))}
      />
      <button
        className='bg-blue-500 text-white p-2 rounded-md cursor-pointer disabled:bg-gray-200 disabled:text-black'
        onClick={generateClass}
        disabled={numberOfLevels === 0 && numberOfSections === 0}
      >
        Generate Class Schedule
      </button>
      {loading && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
          className='h-8 w-8 rounded-full border-4 border-blue-500 border-t-transparent'
        />
      )}
      {/* {result && <AnimatedText text={result} />} */}
      {result && <ReactMarkdown remarkPlugins={[remarkGfm]}>{result}</ReactMarkdown>}
    </div>
  );
}
