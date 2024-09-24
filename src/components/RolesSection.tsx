import RoleCard from "@/components/RoleCard";
import RolesHeading from "@/components/RolesHeading";

export interface Role {
    name: string;
    description: string;
    skills: string[];
    responsibilities: string[];
}

export default function RolesSection() {
    const roles: Role[] = [
        {
            name: "Frontend Engineer (Remote)",
            description: "Develop and maintain dynamic web applications using React.js while collaborating with cross-functional teams to enhance user experience and optimize performance.",
            skills: ["HTML5", "CSS3", "JavaScript", "React", "User Experience Optimization"],
            responsibilities: [
                "Develop and maintain responsive web applications",
                "Ensure cross-browser and cross-platform compatibility",
                "Collaborate with UI/UX designers to implement designs",
                "Optimize application performance for speed and scalability",
            ],
        },
        // {
        //     name: "Backend Engineer",
        //     description: "Backend Engineers are responsible for server-side logic and APIs, ensuring efficient data flow and system security.",
        //     skills: ["Node.js", "Python", "Java", "SQL/NoSQL Databases", "RESTful APIs", "AWS", "Microservices Architecture"],
        //     responsibilities: [
        //         "Design and maintain backend infrastructure",
        //         "Develop RESTful APIs for web and mobile apps",
        //         "Ensure high performance, scalability, and security of applications",
        //         "Collaborate with frontend developers to integrate solutions",
        //     ],
        // },
        // {
        //     name: "Full-Stack Developer",
        //     description: "Full-Stack Developers work on both frontend and backend technologies to deliver complete web and mobile applications.",
        //     skills: ["JavaScript", "HTML/CSS", "Node.js", "React", "MongoDB", "SQL", "Cloud Platforms"],
        //     responsibilities: [
        //         "Develop full-stack web applications",
        //         "Implement seamless integration between frontend and backend",
        //         "Maintain and improve existing applications",
        //         "Collaborate across teams to ensure product delivery",
        //     ]
        // },
        {
            name: "UI/UX Designer (Intern)",
            description: "Assist in designing and refining user interfaces and experiences for web applications, collaborating with the team to create intuitive and engaging designs.",
            skills: ["Figma", "Prototyping", "User Research", "Usability Testing"],
            responsibilities: [
                "Design user-friendly interfaces for web and mobile platforms",
                "Conduct user research to gather insights and refine designs",
                "Create prototypes and wireframes to validate designs",
                "Collaborate with developers to implement and optimize designs",
            ]
        },
                {
            name: "React Developer (Intern)",
            description: "Support the development and maintenance of web applications using React.js, collaborating with the team to enhance user experience and troubleshoot issues.",
            skills: ["HTML5", "CSS3", "JavaScript", "React", "User Experience Optimization"],
            responsibilities: [
                "Develop and maintain responsive web applications",
                "Ensure cross-browser and cross-platform compatibility",
                "Collaborate with UI/UX designers to implement designs",
                "Optimize application performance for speed and scalability",
            ],
        },
        // {
        //     name: "DevOps Engineer",
        //     description: "DevOps Engineers ensure the smooth and efficient deployment of applications, managing infrastructure and automation processes.",
        //     skills: ["CI/CD Pipelines", "Docker", "Kubernetes", "AWS", "Google Cloud", "Automation", "Monitoring Tools"],
        //     responsibilities: [
        //         "Build and manage continuous integration and deployment pipelines",
        //         "Ensure application scalability, reliability, and security",
        //         "Automate development processes and manage infrastructure",
        //         "Collaborate with development teams for streamlined releases",
        //     ]
        // },
        // {
        //     name: "Data Engineer",
        //     description: "Data Engineers build and maintain scalable data pipelines and infrastructure, helping businesses transform data into actionable insights.",
        //     skills: ["SQL", "Python", "Apache Hadoop", "Spark", "ETL Tools", "Data Warehousing", "Cloud Platforms"],
        //     responsibilities: [
        //         "Design and manage data pipelines",
        //         "Collaborate with data scientists to optimize data workflows",
        //         "Ensure data integrity and security across platforms",
        //         "Develop and maintain data storage solutions",
        //     ]
        // }
    ];

    return (
        <div className={'my-16'} id={"roles"}>
            <RolesHeading/>
            <div className={'grid lg:grid-cols-3 gap-4 md:grid-cols-2 px-12 grid-cols-1'}>
                {roles.map((role) => {
                    return <RoleCard key={role.name} role={role}/>
                })}
            </div>
        </div>

    );
}
