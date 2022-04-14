const callApi = async () => {
    const red = await fetch('https://private-anon-af31af2f40-carsapi1.apiary-mock.com/cars')
    .then((res) => res.json());
    return res;

};

export default callApi