import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

// define a getStaticProps() function to have next.js retrieve data to use for the dynamic page
// - this name is defined by next.js
export async function getStaticProps( { params } ) {
  const itemData = await getData(params.id);
  return {
    props: {
      itemData
    }
  };
}

// define a getStaticPaths() function to tell next.js all valid URLs: 1,2,3,4 
// - this name is defined by next.js
export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false
  };
}

// export our dynamically routed page component Entry
export default function Entry( { itemData } ) {
  return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
          <h3 className="card-title">{itemData.team}</h3>
          <h4 className="card-subtitle mb-2 text-body-secondary">{itemData.coach}</h4>
          <a href="#" className="card-link">{itemData.location}</a>
          <h5>History of Stadiums</h5>
          <ol>
            {itemData.stadiums && itemData.stadiums.map(
              ({id, stadium}) => (
                <li key={id} className="list-group-item list-group-item-action">
                  {stadium}
                </li>
                )
              )
            }
          </ol>
        </div>
      </article>
    </Layout>
  );
}