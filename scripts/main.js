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

const creatProject = (project, index) => {
    const elemProject = document.createElement('a');

    elemProject.setAttribute('href', project.link);
    elemProject.setAttribute('target', '_blank');
    elemProject.classList.add('project');

    elemProject.setAttribute('data-aos', 'zoom-in-up');
    elemProject.setAttribute('data-aos-duration', '800');
    elemProject.setAttribute('data-aos-easing', 'ease-in-out');
    elemProject.setAttribute('data-aos-offset', '-100');
    elemProject.setAttribute('data-aos-delay', 300 * (index + 1));
    
   
    // Add Imagem de Capa
    elemProject.appendChild(creatImage(project.image));
    // Add Nome do Projeto
    elemProject.appendChild(creatStrong(project.name));
    // Add Tags do Projeto
    elemProject.appendChild(creatTags(project.tags));

    return elemProject;
}

const LoadProjects = (projects) => {

    projects.forEach((project, index) => {
        elemProjects.appendChild(creatProject(project, index));
    });
}


fetch('./projects.json').then(res => res.json()).then(LoadProjects)