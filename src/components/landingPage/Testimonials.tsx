
import { Tweet } from "react-tweet";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { items, staticData } from "@/constants/data";

// Define the Item type

function ProductHuntCard({ id }: { id: string }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingBottom: "81%",
        overflow: "hidden",
      }}
    >
      <iframe
        style={{
          border: "none",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={"https://cards.producthunt.com/cards/comments/" + id + "?v=1"}
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        title={"ProductHunt Card " + id}
      />
    </div>
  );
}

function CustomCard({
  content,
  imageSrc,
  name,
  username,
}: {
  content: string;
  imageSrc: string;
  name: string;
  username: string;
}) {
  return (
    <figure className="relative h-full w-full max-w-[500px] transform rounded-xl border border-gray-200 bg-gradient-to-tr from-blue-200 via-indigo-200 to-teal-200 p-6 transition-all duration-300 ease-in-out hover:rotate-2 hover:scale-105 hover:shadow-lg">
      <blockquote className="border-b pb-4 text-lg font-semibold">
        {content}
      </blockquote>
      <figcaption>
        <div className="mt-4 flex items-center gap-4">
          <img
            src={imageSrc}
            alt={name}
            className="pointer-events-none inline-block h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-gray-300"
          />
          <div className="flex flex-col">
            <p className="font-semibold">{name}</p>
            <p className="text-sm">{username}</p>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

function Testimonials() {
  return (
    <MaxWidthWrapper>
      {/* Header */}
      <div className="my-14 space-y-5 text-center" id="testimonials">
        <h1 className="text-4xl font-bold">6,893 {staticData.customer}</h1>
        <h2 className="text-xl font-semibold">{staticData.hear_us}</h2>
      </div>

      {/* Testimonials List */}
      <ul className="mx-auto space-y-4 md:columns-2 md:gap-6 md:space-y-6 lg:columns-3">
        {items.map((item, index) => (
          <li key={index} className="break-inside-avoid">
            {item.type === "productHunt" && <ProductHuntCard id={item.id} />}
            {item.type === "tweet" && <Tweet id={item.id} />}
            {item.type === "custom" && (
              <CustomCard
                content={item.content}
                imageSrc={item.imageSrc}
                name={item.name}
                username={item.username}
              />
            )}
          </li>
        ))}
      </ul>
    </MaxWidthWrapper>
  );
}

export default Testimonials;
