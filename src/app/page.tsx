import Image from "next/image";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="Parentdiv">


      <div className="leftpane">

        <h1 className="text">hey!</h1>
        <h1 className="text1"> My name is Maryam Siddique</h1>
        <h1 className="text2">I am a nextjs developer
        </h1>

    </div>

    <div className="rightpane">
    <img
          src="/images/maryam.jpg" 
          alt="My image" 
          width={170} 
          height={100} 
        />


      </div>


    </div>

    
    
  )
}

