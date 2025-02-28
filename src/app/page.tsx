import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Request Catering</h1>
        <div>Something goes here...</div>

        {/* Temporarily creating modals here; move them out later */}
        <div className="w-[400px] h-[500px] bg-slate-100 rounded-lg flex flex-col items-center p-4 gap-2 border-2 border-black shadow-xl">
          <h1 className="font-bold text-2xl">Coconut Lemon Herb Chicken</h1>
          <Image
            src="/lemon_herb.webp"
            width={250}
            height={250}
            alt="lemon herb"
            className="rounded-2xl"
          />
          <p className="text-sm">MEDITERRANIAN, GREEK</p>
          <p className="text-center">
            It&apos;s creamy, delicious, and a wholesome meal. Made with
            chicken, coconut, lemon, and herbs, something something yum.
          </p>
          <div className="flex gap-2 mt-4">
            <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded">
              DAIRY
            </span>
            <span className="px-2 py-1 bg-green-200 text-green-800 rounded">
              VEGETARIAN
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
