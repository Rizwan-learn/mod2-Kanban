import '.styles.css';
import callApi from './modules/callApi';
import fontStructure from './modules/fontStructure';


const load = async () => {
  const data = await callApi();
  const item = productCount(data.results);
  showItemCount(item);
  await getApiDetails(data);
  await fontStructure(data);
};

load ();

