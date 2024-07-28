import React from 'react';
import JobCard from './compStud/JobCard';

const jobListings = [
  { position: 'Software Engineer', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5TABh-50qFY7GN5I0dul3Scoigl5TZRt4A&s', link: 'https://www.naukri.com/jobs-in-india?clusters=functionalAreaGid&functionAreaIdGid=5' },
  { position: 'Product Manager', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTex7JJmunsTRV5WxgN9S-0BrWaqft7pDxYqA&s', link: 'https://www.naukri.com/product-manager-jobs?wfhType=2' },
  { position: 'UI/UX Designer', picture: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149047011.jpg', link: 'https://www.naukri.com/jobs-in-india?functionAreaIdGid=15&clusters=functionalAreaGid' },
  { position: 'AI', picture: 'https://www.europarl.europa.eu/resources/library/images/20230607PHT95601/20230607PHT95601_original.jpg', link: 'https://www.naukri.com/jobs-in-india?clusters=functionalAreaGid&functionAreaIdGid=3' },
  { position: 'Data Scientist', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhp0ymXPkifuJx0-jSOUHf9eVOhWa7ytzL6A&s', link: 'https://www.naukri.com/data-science-jobs?src=gnbjobs_homepage_srch' },
  { position: 'DevOps Engineer', picture: 'https://www.govloop.com/wp-content/uploads/2024/01/devops-engineer-skills.png', link: 'https://www.naukri.com/jobs-in-india?clusters=functionalAreaGid&functionAreaIdGid=5' },
];

const JobPage = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Job Opportunities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobListings.map((job, index) => (
          <JobCard key={index} position={job.position} picture={job.picture} link={job.link} />
        ))}
      </div>
    </div>
  );
};

export default JobPage;