import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage();

export const uploadFile = async (file: File, path: string) => {
    const storageRef = ref(storage, path);
    try {
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};

export const getFileUrl = async (path: string) => {
    const storageRef = ref(storage, path);
    try {
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        console.error("Error getting file URL:", error);
        throw error;
    }
};