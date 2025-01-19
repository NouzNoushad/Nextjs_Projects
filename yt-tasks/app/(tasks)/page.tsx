import Image from "next/image";

export default function Home() {
  return (
    <main>
        <div className="flex flex-row h-screen">
            <div className="w-1/5 h-full primary-color">Hello</div>
            <div className="w-4/5 h-full">Universe</div>
        </div>
    </main>
  );
}
