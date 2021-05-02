(function() {
  const jobs = [
    {
      logo: './assets/img/manage.png',
      company: 'Manage',
      job: 'Senior Frontend Developer',
      tags: ['Frontend', 'React', 'Sass']
    }, {
      logo: './assets/img/air.png',
      company: 'Air',
      job: 'Fullstack Developer',
      tags: ['Frontend', 'Backend']
    }, {
      logo: './assets/img/insure.png',
      company: 'insure',
      job: 'Junior Frontend Developer',
      tags: ['HTML', 'CSS', 'JS']
    }, 
  ];

  const getTemplate = (job) => {
    return `
      <div class="job-card">
        <div class="job-logo">
          <img src="${job.logo}" alt="${job.company}" />
        </div>
        <div class="job-text">
          <h3 class="job-company">${job.company}</h3>
          <h2 class="job-title">${job.job}</h2>
          <div class="job-tags">
            <div class="tag">Frontend</div>
            <div class="tag">React</div>
            <div class="tag">Sass</div>
          </div>
        </div>
        <div class="job-cta">
          <button class="btn">Aplicar</button>
        </div>
      </div>
    `;
  }

  jobs.forEach((item) => {
    console.log(item);
    let template = getTemplate(item);
    console.log(template);
  });

})();

