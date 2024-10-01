interface ExperienceCardHeaderProps {
    role: string
    company: string
    from: string
    to: string
}

const ExperienceCardHeader: React.FC<ExperienceCardHeaderProps> = ({ role, company, from, to }) => {
    return (
        <>
            <h2 style={{color: "var(--secondary-color)"}}> <span className="text-lg font-bold">{role}</span> at <span className="text-lg font-semibold">{company}</span> | </h2><p>{from} - {to}</p>
        </>
    )
}

export default ExperienceCardHeader