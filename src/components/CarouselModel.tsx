import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import Project from "@/utils/types";

const CarouselModel = ({ projects }: { projects: Array<Project> }) => {
  return (
    <Carousel className="w-3/4 sm:w-5/6">
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.title} className="">
            <Card className="p-4 space-y-2 text-white bg-black/65 ">
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <CardFooter>
                <div className="flex flex-col">
                  <a
                    href={project.links.github}
                    className="block underline underline-offset-2"
                    target="_blank"
                  >
                    Lien Github
                  </a>
                  <a
                    href={project.links.github}
                    className="block underline underline-offset-2"
                    target="_blank"
                  >
                    Website
                  </a>
                </div>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNext />
    </Carousel>
  );
};

export default CarouselModel;
