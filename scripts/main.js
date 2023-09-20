const elemProjects = document.getElementById("project__content");

const creatImage = (projectImage) => {
    const elemPicture = document.createElement('picture');
    const elemImg = document.createElement('img');
    elemImg.setAttribute('src', projectImage);
    
    elemPicture.appendChild(elemImg);

    return elemPicture;
}

const creatStrong = (projectName) => {
    const elemStrong = document.createElement('strong');
    elemStrong.innerText = projectName;

    return elemStrong;
}

const creatTags = (projectTag) => {
    const elemTags = document.createElement('div');
    projectTag.forEach(tag => {
            const elemTag = document.createElement('span');
            elemTag.innerText = tag;

            elemTags.appendChild(elemTag);
        });

    return elemTags;
}

const creatProject = (project) => {
    const elemProject = document.createElement('a');

    elemProject.setAttribute('href', project.link);
    elemProject.setAttribute('target', '_blank');
    elemProject.classList.add('project');
    
   
    // Add Imagem de Capa
    elemProject.appendChild(creatImage(project.image));
    // Add Nome do Projeto
    elemProject.appendChild(creatStrong(project.name));
    // Add Tags do Projeto
    elemProject.appendChild(creatTags(project.tags));

    return elemProject;
}

const LoadProjects = (projects) => {

    projects.forEach(project => {
        elemProjects.appendChild(creatProject(project));
    });
}


fetch('./projects.json').then(res => res.json()).then(LoadProjects)