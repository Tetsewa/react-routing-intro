

import { useParams, Link } from 'react-router-dom';
//The React Router hook useParams() returns an object with URL parameters. We use it to obtain the value of the URL parameter projectId.
function ProjectDetailsPage(props) {
  const { projectId } = useParams();
  console.log('projectId -->', projectId);

  //Our next step below is to take the projectId parameter which we got from the URL, find the project with the same id, and display the project on the page. Let’s do it:
  // Method .find() returns the first found matching element,
  // or `null` if no matching element is found.
  const foundProject = props.projects.find((oneProject) => {     
    return oneProject._id === projectId;
  });

  return (
    <div>
      <h1>Project Details</h1>
      {!foundProject && <h3>Project not found!</h3>} 
 
      {foundProject && (                             
        <>
          <h2>{foundProject.name}</h2>
          <h3>Tech Stack: {foundProject.technologies}</h3>
          <p>{foundProject.description}</p>

          <Link to="/projects">Back</Link>
        </>
      )}
    </div>
  );
}

export default ProjectDetailsPage;
