import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Social Media.",
    description:
      "A full-featured social media app using MERN stack, Zegocloud, Socket.IO, and more, with user interactions and admin management.",
    image: "/projects/project1.png",
    tags: [
      "TypeScript",
      "Node.js",
      "React",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
    ],
    demoUrl: "https://github.com/MuhammedNoushad/social-media",
    githubUrl: "https://github.com/MuhammedNoushad/social-media",
  },
  {
    id: 2,
    title: "Ecommerce Application.",
    description:
      "A complete e-commerce platform using Node.js, EJS, and MongoDB with user shopping features and an admin panel for management.",
    image: "/projects/project2.png",
    tags: ["EJS", "Node.js", "Express.js", "MongoDB", "Razorpay API"],
    demoUrl: "https://github.com/MuhammedNoushad/ABC-furnitures-eCommerce-",
    githubUrl: "https://github.com/MuhammedNoushad/ABC-furnitures-eCommerce-",
  },
  {
    id: 3,
    title: "Crunchyroll Clone",
    description:
      " A front-end Crunchyroll clone using Jikan API to dynamically display anime with a sleek home page UI.",
    image: "/projects/project3.png",
    tags: ["React", "JavaScript", "Tailwind CSS", "API", "Axios"],
    demoUrl: "https://github.com/MuhammedNoushad/Crunchyroll-clone",
    githubUrl: "https://github.com/MuhammedNoushad/Crunchyroll-clone",
  },
  {
    id: 4,
    title: "Chat App",
    description:
      "A real-time chat app with a sleek UI, enabling seamless private messaging using modern web technologies.",
    image: "/projects/project4.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Socket.IO",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    demoUrl: "https://github.com/MuhammedNoushad/chat-app",
    githubUrl: "https://github.com/MuhammedNoushad/chat-app",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
          Feactured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-muted-foreground text-center mb-12 mx-w-4xl">
          Here are some of the projects I've worked on recently. Each project
          features a brief description, technologies used, and a Github link. I
          hope you find these projects interesting and useful.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/MuhammedNoushad/"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check out more projects
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
