import "./Experience.css"
const experience = [
    {
        company: "Globant",
        role: "Front-End Developer",
        from: "Sept 2020",
        to: "Present",
        projects: [
            {
                title: "Services Recommendation using AI",
                stack: "ReactJs, MaterialUI, Jira, Agile, Azure DevOps, TypeScript, Jest, React Testing Library",
                extra: [
                    "Plan, research, and develop a tool to show personalized recommendations based on user's profiles and interactions using AI and its administration portal.",
                    "Write documentation and prepare presentations",
                    "Sync with UX and Product team",
                    "Act as a referent for other members of the team",

                ]
            },
            {
                title: "Stock Values App for a US bank",
                stack: "ReactJs, MaterialUI, Jira, Agile, BitBucket, TypeScript, Jest, AgGrid",
                extra: [
                    "Develop new features based on the requirements",
                    "Optimize a stocks dashboard user interface showing values in real-time",
                    "Talk with managers from other teams to align the development",
                    "Act as a referent for other members of the team",

                ]
            },
            {
                title: "NFT Marketplace (Jan - 2022 / Jun - 2022)",
                stack: "ReactJs, NextJS, Jira, Agile, GitHub, TypeScript, Jest, MaterialUI",
                extra: [
                    "Be part of a project that builds an NFT marketplace developed with NextJs, EthersJS, Web3 concepts, React, React Context API for state management, TypeScript and Jest for unit testing.",
                    "The site allows minting new NFTs, purchasing and selling. Also, you can search between collections and create one of your own",

                ]
            },
            {
                title: "Marketplace",
                stack: "ReactJs, MaterialUI, Redux, Jira, Agile, GitHub, Jest",
                extra: [
                    "Develop a product catalog with searchbar, pagination and filters for a white-label e-commerce",
                    "Backoffice for users, roles, products and shipping management using React, Redux (Custom hooks and Function Components) and MaterialUI",
                    "Axios for requests and Jest with React Testing Library for the test cases"
                ]
            }
        ]
    },
    {
        company: "SOUTHWORKS",
        role: "Full-Stack Developer",
        from: "Apr 2018",
        to: "Sept 2020",
        projects: [
            {
                title: "Job Posting Site",
                stack: "ReactJs- NodeJs - SCSS - AWS - GatsbyJS - Bulma Framework - Bash",
                extra: [
                    "Develop a web site for job postings from scratch using external APIs to fetch the jobs information.",
                    "The site is hosted in an S3 bucket using the AWS CodeBuild service to fetch the code from GitHub and build it",
                    "Develop of scripts using Bash and AWS SDK in order to generate the services that the project needed among the connections between API and the services",
                ]
            },
            {
                title: "Streaming application",
                stack: "AWS, NodeJs, Javascript",
                extra: [
                    "Maintaining of a streaming system that use AWS services like Lambdas, CloudFormation, DynamoDB, APIGateway and Step Functions to set the channels and stream and external content.",
                ]
            },
            {
                title: "Contribution in Windows Community Toolkit",
                stack: ".NET, C#, MVC",
                extra: [
                    "Elaboration and upgrading of UWP controls",
                    "Communication with the community, PR review, keep track of issues and the fixes.",
                ]
            },
            {
                title: "PWA Manifest Generator",
                stack: "Vue.js - Docker - JS - Github Actions",
                extra: [
                    "Build a webapp with a manifest generator with customization which allows select the properties and fill them in the file.",
                    "File upload and export",
                ]
            }
        ]
    },
]
const Experience = () => {
return (
    <section id="experience" className="experience">
        <div  className="experience-content">
        {
            experience.map(company => (
                <div className="company-box" key={`company-${company.company}`}>
                    
                            <div key={`company-${company.company}`} style={{display: "flex", gap: 10, alignItems: "center"}}>
                                <i class='bx bxs-circle job-dot'></i>
                                <h2 className="experience-content-title"> {company.role} at {company.company} | </h2><p>{company.from} - {company.to}</p>
                            </div>
                    
                    {
                        company.projects.map(project => (
                            <div key={`project-${project.title}`} className="experience-content_project">
                                <h4 className="experience-content_project-title">{project.title}</h4>
                                <ul className="experience-content_project-list">
                                    {
                                        project.extra.map((extra,i) => (
                                            <li key={`${company.company}-${project.title}-content-${i}`}>{extra}</li>
                                        ))
                                    }
                                    <li><b>Tech stack:</b> {project.stack}</li>
                                </ul>
                            </div>
                        ))
                    }
                </div>
            ))
        }
</div>
		</section>
)
}

export default Experience;