import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "hz1ls2i1", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
});

export default client;

// export default sanityClient({
//   projectId: "Your Project ID Here", // find this at manage.sanity.io or in your sanity.json
//   dataset: "production", // this is from those question during 'sanity init'
//   useCdn: true,
// });
