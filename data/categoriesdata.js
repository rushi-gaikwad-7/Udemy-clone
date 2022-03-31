const Developmentdata = () => {
    let data = ["Web development", "Data Science", "Mobile Development", "Programming Languages", "Game Development", "Database Design & Development",
        "Software Testing", "Software Engineering", "Softwere Development Tools", "No-Code Development"
    ]
    return data;
}
const webdata = () => {

    let data = [[
        "JavaScript",
        "React",
        "CSS",
        "Angular",
        "Node.js",
        "HTML5",
        "PHP",
        "Django"
    ],[
        "Python",
        "Machine learning",
        "Deep learning",
        "Data Analysis",
        "Artificial Intelligence",
        "R(programming language)",
        "TensorFlow",
        "Statistics"
    ]]
    return data;
}


const businessdata = () => {
    let data = ["Enterpreneurship", "Communication", "Management", "Sales", "Business Strategy", "Operations",
        "Project Management", "Business Law", "Business Analytics & intelligence", "Human Respurces", "industry", "E-Commerse"
    ]
    return data;
}

const Financedata = () => {
    let data = ["Accounting", "Bookkeeping", "Finance Accounting", "Financial Statement", "Tally.Erp", "Xero", "Cost Accounting"]
    return data;
}
const itdata = () => {
    let data = ["IT Certification", "Network & Security", "Hardware", "Operating System", "Other IT & Software"]

    return data;
}
const offdata = () => {
    let data = ["Microsoft", "Apple", "Google", "SAP", "Oracle"]

    return data;
}


export {
    Developmentdata,
    webdata,
    businessdata,
    Financedata,
    itdata,
    offdata
};