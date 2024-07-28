
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link href={link} passHref>
      <div className="w-80 h-96 flex flex-col rounded-lg shadow-lg border border-[#2A0E61] overflow-hidden">
        <div className="relative w-full h-2/3">
          <Image
            src={src}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="flex-1 p-4 bg-[#2A0E61] flex flex-col">
          <h1 className="text-2xl font-semibold text-white truncate">{title}</h1>
          <p className="mt-2 text-gray-300 flex-1 overflow-hidden text-ellipsis">{description}</p>
        </div>
      </div>
    </Link>
  );
};





export default ProjectCard;
