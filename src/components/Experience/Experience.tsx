import { experience } from "@/const";
import ExperienceCardHeader from "../subcomponents/ExperienceCardHeader";
import "./Experience.css"

const Experience = () => {
    return (
        <section id="experience" className="experience px-10">
            <div className="experience-content">
                {
                    experience.map(company => (
                        <div className="company-box" key={`company-${company.company}`}>

                            <div key={`company-${company.company}`} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                                <i className='bx bxs-circle job-dot'></i>
                                <ExperienceCardHeader
                                    role={company.role}
                                    company={company.company}
                                    from={company.from}
                                    to={company.to}
                                />
                            </div>

                            {
                                company.projects.map(project => (
                                    <div key={`project-${project.title}`} className="experience-content_project">
                                        <h4 className="experience-content_project-title font-semibold">{project.title}</h4>
                                        <ul className="experience-content_project-list">
                                            {
                                                project.extra.map((extra, i) => (
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