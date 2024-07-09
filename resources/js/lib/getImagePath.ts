const getImagePath = (path: string) => {
    return `http://localhost:8000/storage/images/${path}`;
};

export default getImagePath;