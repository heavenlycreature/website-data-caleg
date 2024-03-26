export const getDataDpdList = async (id) => {
    const request = await fetch(`https://caleg.zakiego.com/api/dpd/dapil/${id}`);
    const response = await request.json();
    const data = response.data;
    return data;
}
export const getDataDprList = async (id) => {
    const request = await fetch(`https://caleg.zakiego.com/api/dpr-ri/dapil/${id}`);
    const response = await request.json();
    const data = response.data;
    return data;
}
export const getDataDprdList = async (id) => {
    const request = await fetch(`https://caleg.zakiego.com/api/dprd-provinsi/dapil/${id}`);
    const response = await request.json();
    const data = response.data;
    return data;
}
export const getDataDprdKabList = async (id) => {
    const request = await fetch(`https://caleg.zakiego.com/api/dprd-kabupaten-kota/dapil/${id}`);
    const response = await request.json();
    const data = response.data;
    return data;
}
