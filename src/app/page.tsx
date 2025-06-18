"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import * as motion from "motion/react-client";

import AnimatedText from "@/components/AnimatedText";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Home() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateClass = async () => {
    setLoading(true);
    const res = await axios.get("/api/generate");
    setResult(res.data.response);
    setLoading(false);
  };

  useEffect(() => {
    generateClass();
  }, []);

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      Class AI
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
