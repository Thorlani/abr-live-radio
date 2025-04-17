import Image from "next/image";

interface BigRowCardsProps {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

const BigRowCards = ({
  id,
  imageUrl,
  title,
  description,
}: BigRowCardsProps) => {
  const maxCharacters = 300;

  const getTruncatedHtml = (html: string) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || "";
    return text.length > maxCharacters
      ? text.slice(0, maxCharacters) + "..."
      : text;
  };

  return (
    <div key={id} className="w-[288px] h-[424px] relative group">
      <Image
        src={imageUrl}
        alt="license-to-live image"
        width={288}
        height={424}
        className="w-full h-full rounded"
      />
      <div className="absolute bottom-0 left-0 group-hover:bg-black/20 px-5 py-2 w-full h-fit flex flex-col items-start text-white">
        <div className="w-full hidden group-hover:flex items-center justify-end my-3">
          <Image
            src={"/svg/play-btn.svg"}
            alt="play icon"
            width={42}
            height={42}
          />
        </div>
        <p>8 Episodes</p>
        <h4 className="font-extrabold text-2xl max-w-[450px]">{title}</h4>
        <div>
          <p className="hidden group-hover:block">
            {getTruncatedHtml(description)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigRowCards;
