//import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllIds, getData } from '../../lib/data-orders';

export async function getStaticProps({ params }) {
    const itemData = await getData(params.id);
    // console.log(itemData);
    return {
        props: {
            itemData
        },
        revalidate: 60 // set this to seconds before ISR invoked
    };
}

export async function getStaticPaths() {
    const paths = await getAllIds();
    return {
        paths,
        fallback: false
    };
}

export default function Entry({ itemData }) {
    return (
        <Layout>
            <article className="card col-6">
                <div className="card-body">
                    <h5 className="card-title">{itemData.post_title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Reference Number: {itemData.acf_fields.reference_number}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Item Ordered: {itemData.acf_fields.reference_number}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Quantity: {itemData.acf_fields.quantity}</h6>
                    <div className="card-text" dangerouslySetInnerHTML={{ __html: itemData.post_content }} />
                </div>
            </article>
        </Layout>
    );
}